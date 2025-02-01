// import
import { useState } from "react";

export default function SignUpForm({setToken}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    console.log();

    try {
        const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username, // changed this from strings with Javier to instead pass the defined variables
                password: password // these values show up on console.log(result);
            })
        });

        // console.log(username, password)
        const result = await response.json();
        console.log(result); // shows inputted username and pw

        // Authenticate Component Tab step 5: 
        // "use this function in our handleSubmit. Pass the token property of our API response to setToken."

        setToken(result.token);


    } catch (error) {
          setError(error.message);
      }
    }
    return (
        <>
          <h2>Sign Up!</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Username:{" "}
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <label>
              Password:{" "}
              <input type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button type="submit">Submit</button>
          </form>
          {error && <p style= {{color: 'red'}}>{error}</p>} 

        </>
        // react fragment, an invisible div (parent)
      );

  };
// {error && <p style= {{color: 'red'}}>{error}</p>} for error msg

/* notes with Kathryn, Javier

JS Local vs Global Scope
- vanilla js, functions and var can be declared globally unless encapsulated in a function or block scope
    - we can call these globally defined functions from anywhere within the code
    - hence, can be problematic (name collisions, unintended behavior)
- React, 
define useState() within export default function, bc react is functional scope

*/
// 

//
// vanilla js can take in global
// keep info/state as private/localized as possible // minimize exposure to other components

// return (); should be the last thing you put in your component
// make sure to remember to wrap () around code

// do I all set an onChange property to the error, set error (line 7)?

// stay consistent in structure throughout application
// this is an alternative way to write

// function App() {
//   const [formData, setFormData] = useState({ username: "", password: "" });

//   function handleChange(e) {
//     const { fieldName, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [fieldName]: value,
//     }));
//   }

//   function handleSubmit() {}
//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <label>
//           <input type="text" name="username" value={formData.username} onChange={handleChange}/>
//         </label>
//         <label>
//           <input type="text" name="password" value={formData.password} onChange={handleChange}/>
//         </label>
//         <input type="submit" value="submit" />
//       </form>
//     </>
//   );
// }

// export default App;
