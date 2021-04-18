import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [input, setInput] = useState('');

  const onSubmitForm = (event) => {
    event.preventDefault();
    takeName();
  };

  const takeName = () => {
    //need to change the backend for {name:input}
    axios
      .post('http://localhost:8080/name', { name: input })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log('error in takeName function', error);
      });
  };

  const onInputChange = (event) => {
    setInput(event.target.value);
    console.log(input);
  };

  return (
    <div className="App">
      <form onSubmit={onSubmitForm}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" onChange={onInputChange} />
        <input type="submit" value="Enter" />
      </form>
    </div>
  );
}

export default App;
