import { useState } from "react";
import { useNavigate } from "react-router-dom";

// 5. Pass Props to Child Components
export default function NewPlayerForm({ addNewPlayer }) {
  const [formData, setFormData] = useState({
    name: "",
    breed: "",
    imageUrl: "",
    status: "bench", // why do i need to set a default value instead of ""?
    // if left as "" empty string, the API will identify this as invalid
    // the API expects a specific value which validates it against an enum
    // an enum is a defined set of possible values
    // resolving this helped me successfully add a new player to the database.
    team: "",
  });

  const navigate = useNavigate();

  //it is a logical flow to define handleChange before handleSubmit

  const handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [key]: value });
  }; // this is a key-value pair
  //dynamically updates an object in the state
  // based on user input,
  // where the keys are the names of input fields,
  // and the values are what the user enters
  // (or selects) in those fields.

  const handleSubmit = async (event) => {
    event.preventDefault();
    await addNewPlayer(formData);

    // show alert with player details
    alert(
      `
        New player added:\n
        Name: ${formData.name}\n
        Breed: ${formData.breed}\n
        Image URL: ${formData.imageUrl}\n
        Status: ${formData.status}\n
        Team: ${formData.team}
        `
    );

    setFormData({
      // this resets the form after submission
      // best practice to reset form data 
      // upon successful submission alongside navigation.
      name: "",
      breed: "",
      imageUrl: "",
      status: "",
      team: "",
    });

    // navigate to home page after submission
    navigate("/");

  };

  


  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Breed:
            <input
              type="text"
              name="breed"
              value={formData.breed}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Image URL:
            <input
              type="text"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
            />
          </label>
          <label>
            Status:
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="field">Field</option>
              <option value="bench">Bench</option>
            </select>
          </label>
          <label>
            Team:
            <select name="team" value={formData.team} onChange={handleChange}>
              <option value="unassigned">Unassigned</option>
              <option value="ruff">Ruff</option>
              <option value="fluff">Fluff</option>
            </select>
          </label>
          <button type="submit">Add Player</button>
        </form>
      </div>
    </>
  );
}
