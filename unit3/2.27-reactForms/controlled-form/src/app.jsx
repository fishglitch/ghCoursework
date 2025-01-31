import { useState, useEffect } from "react";
import './index.css';

function App() {
  const [formData, setFormData] = useState({ username: "", password: "" });

useEffect(() =>{
  console.log(formData);
}, [formData])

  function handleChange(e) {
    const { fieldName, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  }

  function handleSubmit() {}
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" name="username" value={formData.username} onChange={handleChange}/>
        </label>
        <label>
          <input type="text" name="password" value={formData.password} onChange={handleChange}/>
        </label>
        <input type="submit" value="submit" />
      </form>
    </>
  );
}

export default App;
