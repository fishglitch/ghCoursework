import { useState, useEffect } from "react";
import PropTypes from 'prop-types'; // Import PropTypes

const Login = ({ login, register, errorMessage }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submit = (ev) => {
    ev.preventDefault();
    login({ username, password });
  };


  const eventRegister = (ev) => {
    ev.preventDefault();
    register({ username, password });
  };

  return (
    <form>
      <input
        value={username}
        placeholder="username"
        onChange={(ev) => setUsername(ev.target.value)}
      />
      <input
        value={password}
        placeholder="password"
        onChange={(ev) => setPassword(ev.target.value)}
      />
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>} {/* Displaying error message */}
      <button
        onClick={(event) => eventRegister(event)}
        disabled={!username || !password}
      >
        Register
      </button>
      <button
        disabled={!username || !password}
        onClick={(event) => submit(event)}
      >
        Login
      </button>
    </form>
  );
};

function App() {
  const [auth, setAuth] = useState({});
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [errorMessage, setErrorMessage] = useState(""); // State for error messages


  useEffect(() => {
    attemptLoginWithToken();
  }, []);

  const attemptLoginWithToken = async () => {
    const token = window.localStorage.getItem("token");
    if (token) {
      const response = await fetch(`/api/auth/me`, {
        headers: {
          authorization: token,
        },
      });
      const json = await response.json();
      if (response.ok) {
        setAuth(json);
      } else {
        window.localStorage.removeItem("token");
      }
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("/api/products");
      const json = await response.json();
      setProducts(json);
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchFavorites = async () => {
      const token = window.localStorage.getItem("token");
      const response = await fetch(`/api/users/${auth.id}/favorites`, {
        headers: {
          Authorization: token,
      }});
      const json = await response.json();
      if (response.ok) {
        setFavorites(json);
      }
    };
    if (auth.id) {
      fetchFavorites();
    } else {
      setFavorites([]);
    }
  }, [auth]);

  const login = async (credentials) => {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(credentials),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();
    if (response.ok) {
      window.localStorage.setItem("token", json.token);
      console.log('Token stored:', json.token); 
      setErrorMessage(""); // Clear any existing error messages
      attemptLoginWithToken();
    } else {
      setErrorMessage(json.error || "Login failed");
      console.log(json);
    }
  };

  const register = async (credentials) => {
    const response = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify(credentials),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();
    if (response.ok) {
      window.localStorage.setItem("token", json.token);
      console.log('Token stored after registration:', json.token);
      // setErrorMessage(""); // Clear any existing error messages
      // attemptLoginWithToken();
      login(credentials); // Call login immediately with the same credentials to fetch user info
    } else {
      setErrorMessage(json.error || "Registration failed"); 
      console.log(json);
    }
  };

  const addFavorite = async (product_id) => {

    const token = window.localStorage.getItem("token");
    const response = await fetch(`/api/users/${auth.id}/favorites`, {
      method: "POST",
      body: JSON.stringify({ product_id }),
      headers: {
        "Content-Type": "application/json",
        Authorization: token, // Ensure that the token is included in the headers
      },
    });

    const json = await response.json();
    if (response.ok) {
      setFavorites([...favorites, json]);
    } else {
      console.log(json);
    }
  };

  const removeFavorite = async (id) => {
    const token = window.localStorage.getItem("token");
    const response = await fetch(`/api/users/${auth.id}/favorites/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: token, // Include the authorization token
      },
    });
    // const json = await response.json();
    console.log("response", response);
    if (response.ok) {
      setFavorites(favorites.filter((favorite) => favorite.id !== id));
    } else {
      // console.log(json);
    }
  };

  const logout = () => {
    window.localStorage.removeItem("token");
    setAuth({});
  };

  return (
    <>
      {!auth.id ? (
        <
        Login login={login} 
        register={register} 
        errorMessage={errorMessage}
        />
      ) : (
        <button onClick={logout}>Logout {auth.username}</button>
      )}
      <ul>
        {products.map((product) => {
          const isFavorite = favorites.find(
            (favorite) => favorite.product_id === product.id
          );
          return (
            <li key={product.id} className={isFavorite ? "favorite" : ""}>
              {product.name}
              {auth.id && isFavorite && (
                <button onClick={() => removeFavorite(isFavorite.id)}>-</button>
              )}
              {auth.id && !isFavorite && (
                <button onClick={() => addFavorite(product.id)}>+</button>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
}
// Add prop types validation
Login.propTypes = {
  login: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
};

export default App;
