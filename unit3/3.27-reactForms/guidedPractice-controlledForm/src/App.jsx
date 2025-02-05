import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({ username: "", password: "" });

  useEffect(()=>{
    console.log(formData);

  }, [formData]);

  function handleChange(e) {
    const {name, value} = e.target; // use {} bc this is an object, not an array
    // Curly braces are used when you want to extract properties from an object.
    setFormData((prevData) => ({
      ...prevData,
      [name]: value //key value pairs
    }));
  }

  function handleSubmit(){

  }

  return (
  <>
  <div>
  <form onSubmit={handleSubmit}>
    <label>
      Username: <input type="text" name="username" value={formData.username} onChange={handleChange} />
    </label>
    <label>
      Password: <input type="password" name="password" value={formData.password} onChange={handleChange} />
    </label>
    <input type="submit" value="Submit" />
  </form>
  </div>

  
  </>);
}

export default App;
