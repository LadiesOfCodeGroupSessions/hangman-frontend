import './App.css';
import React, {createContext, useState} from "react";

function App() {
const [input, setInput] = useState("");

const onSubmitForm = (event) => {
  event.preventDefault();
  console.log(input);
}

const onInputChange = (event) => {
  setInput(event.target.value);
  console.log(input);
}

  return (
    <div className="App">
     <form onSubmit={onSubmitForm}>
       <label htmlFor="name">Name</label>
       <input type="text" id="name" onChange={onInputChange}/>
       <input type="submit" value="Enter"/>
     </form>
    </div>
  );
}

export default App;
