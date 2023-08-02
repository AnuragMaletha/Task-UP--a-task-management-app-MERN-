import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import './update.css'; 

function Update() {
  const location = useLocation();
  const navigate = useNavigate();
  const id = location.state.id;

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(id);
    try {
      await axios.put(`http://localhost:8800/api/tasks/${id}`, { title, desc, status });
    } catch (error) {
      console.error('Error saving task:', error);
    }
    navigate('/');
  };

  return (
    <div className="update-container">
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <br />

      <label htmlFor="desc">Desc:</label>
      <input
        type="text"
        id="desc"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        required
      />
      <br />

      <label htmlFor="status">Status:</label>
      <input
        type="text"
        id="status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        required
      />
      <br />

      <button className="btn-update1" type="submit" onClick={handleSubmit}>
        Update
      </button>
    </div>
  );
}

export default Update;
