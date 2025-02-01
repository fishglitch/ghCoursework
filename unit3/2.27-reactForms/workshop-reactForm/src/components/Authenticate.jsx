import { useState } from "react";

export default function Authenticate({ token, setToken }) {
  // states here

  const [successMessage, setSuccessMessage] = useState(null);

  const [error, setError] = useState(null);

  // function here with try catch

  async function handleClick(event) {
    event.preventDefault();
    console.log();

    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();
      console.log(data);
      setSuccessMessage(data.message);
      setToken(data.token);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    // If successMessage is a truthy value
    // (not null, undefined, 0, false, '', or NaN),
    // the expression will render a <p> element with the value of successMessage inside it.
    // same logic for setting up conditional rendering for error variable
    <>
      <div>
        <h2>Authenticate!</h2>
        <button className="authenticate-button" onClick={handleClick}> Authenticate Token </button>
        {successMessage && <p>{successMessage}</p>}
        {error && <p>{error}</p>}
      </div>
    </>
  );
}
