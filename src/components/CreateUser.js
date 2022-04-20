import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export function CreateUser() {
  const [inputs, setInputs] = useState({}); //array destructuring
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8005/api/', inputs).then(function(response) {
      console.log(response.data); //data from form
      navigate('/'); //Change page to the root
    });
  };

  return (
    <div>
      <h1>Create Users</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input type="text" name="name" onChange={handleChange} />
        </div>
        <div>
          <label>Email: </label>
          <input type="email" name="email" onChange={handleChange} />
        </div>
        <div>
          <label>Mobile: </label>
          <input type="number" name="mobile" onChange={handleChange} />
        </div>
        <button>Save</button>
      </form>
    </div>
  );
}

export default CreateUser;
