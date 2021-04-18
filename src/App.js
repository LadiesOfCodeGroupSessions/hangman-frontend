import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [input, setInput] = useState("");
  const [user, setUser] = useState();

  useEffect(() => {
    const userData = localStorage.getItem("hangman");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const onSubmitForm = (event) => {
    event.preventDefault();
    takeName();
  };

  const takeName = () => {
    axios
      .post("http://localhost:8080/api/v1/player", { name: input })
      .then((response) => {
        localStorage.setItem("hangman", JSON.stringify(response.data));
        setUser(response.data);
      })
      .catch((error) => {
        console.log("error in takeName function", error);
      });
  };

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className="App">
      {user ? (
        <div>
          <h1>{user.name}</h1>
        </div>
      ) : (
        <form onSubmit={onSubmitForm}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" onChange={onInputChange} />
          <input type="submit" value="Enter" />
        </form>
      )}
    </div>
  );
}

export default App;
