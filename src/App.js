import "./App.css";
import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import takeName from "./api/takeName";
import Word from "./components/Word";
import Keyboard from "./components/Keyboard";
import guessLetter from "./api/guessLetter";
import startGame from "./api/startGame";

function App() {
  const [input, setInput] = useState("");
  const [user, setUser] = useState(null);
  const [nameError, setNameError] = useState(false);
  const [helperText, setHelperText] = useState(false);
  const [correctGuesses, setCorrectGuesses] = useState([]);
  const [incorrectGuesses, setIncorrectGuesses] = useState([]);
  const [numberOfLetters, setNumberOfLetters] = useState(0);
  const [lives, setLives] = useState(10);
  const [gameInProgress, setGameInProgress] = useState(false);
  const [gameId, setGameId] = useState(0);

  useEffect(() => {
    const userData = localStorage.getItem("hangman");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const onSubmitForm = (event) => {
    event.preventDefault();
    if (input) {
      setNameError(false);
      setHelperText(false);
      takeName(input).then((user) => {
        setUser(user)
        return startGame({ "playerId": user["id"], "gameInProgress": true })
      }).then(response => {
        console.log(response)
        setGameId(response["gameId"])
      }).catch(console.error);
    } else {
      setNameError(true);
      setHelperText(true);
    }
  };

  const onInputChange = (event) => {
    if (event.target.value) {
      setNameError(false);
      setHelperText(false);
    }
    setInput(event.target.value);
  };

  const handleGuess = (letter) => {
    guessLetter({ "gameId": gameId, "letter": letter });
  }

  return (
    <div className="App">
      {user ? (
        <div>
          <h1>Hi, {user.name}</h1>

          <Word secretWordLength={numberOfLetters} correctLetters={[
            {
              letter: "A",
              position: [0],
            },
          ]} />
          
          <Keyboard guess={handleGuess} />
        </div>
      ) : (
        <>
          <h1>Welcome to The Hangman Game!</h1>

          <form aria-label="player name" onSubmit={onSubmitForm}>
            <label htmlFor="name">Enter your name </label>
            <TextField
              type="text"
              id="name"
              onChange={onInputChange}
              error={nameError}
              helperText={helperText ? "Your name is required" : ""}
            />

            <Button variant="contained" type="submit" color="primary">
              Start the game
            </Button>
          </form>
        </>
      )}
    </div>
  );
}

export default App;
