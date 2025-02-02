import React, { useState } from 'react';

const NewPlayerForm = ({ addNewPlayer }) => {
  const [formData, setFormData] = useState({
    name: '',
    breed: '',
    imageUrl: '',
    status: '',
    team: 'unassigned',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addNewPlayer(formData);
    setFormData({ name: '', breed: '', imageUrl: '', status: '', team: 'unassigned' }); // Reset form
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <label>
        Breed:
        <input type="text" name="breed" value={formData.breed} onChange={handleChange} required />
      </label>
      <label>
        Image URL:
        <input type="text" name="imageUrl" value={formData.imageUrl} onChange={handleChange} />
      </label>
      <label>
        Status:
        <select name="status" value={formData.status} onChange={handleChange}>
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
  );
};

export default NewPlayerForm;