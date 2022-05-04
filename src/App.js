import "./App.css";
import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import takeName from "./api/takeName";
import Word from "./components/Word";
import Keyboard from "./components/Keyboard";
import guessLetter from "./api/guessLetter";
import startGame from "./api/startGame";
import Confetti from "react-confetti";
import { GAME_WON } from "./constants";
import GameOutcomeModal from "./components/GameOutcomeModal";

function App() {
  const [input, setInput] = useState("");
  const [user, setUser] = useState(null);
  const [nameError, setNameError] = useState(false);
  const [helperText, setHelperText] = useState(false);
  const [correctGuesses, setCorrectGuesses] = useState([]);
  const [incorrectGuesses, setIncorrectGuesses] = useState([]);
  const [numberOfLetters, setNumberOfLetters] = useState(0);
  const [lives, setLives] = useState(10);
  const [gameInProgress, setGameInProgress] = useState(true);
  const [gameId, setGameId] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const userData = localStorage.getItem("hangman");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const onSubmitForm = async (event) => {
    event.preventDefault();
    if (input) {
      setNameError(false);
      setHelperText(false);
      try {
        const user = await takeName(input)
        await restartGame(user)
      } catch (error) {
        console.error(error)
      }

    } else {
      setNameError(true);
      setHelperText(true);
    }
  };

  const restartGame = () => {
    handleStartGame(user)
    setCorrectGuesses([])
    setIncorrectGuesses([])
    setLives(10)
    setGameInProgress(true)
    setMessage('')
  }

  const handleStartGame = async (user) => {
    const response = await startGame({ "playerId": user["id"], "gameInProgress": true })
    const { gameId, secretWordLength } = await response
    await setGameId(gameId)
    await setNumberOfLetters(secretWordLength)
  }

  const onInputChange = (event) => {
    if (event.target.value) {
      setNameError(false);
      setHelperText(false);
    }
    setInput(event.target.value);
  };

  const handleGuess = (letter) => {
    if (gameId === 0) {
      console.error('something went wrong')
      return
    }

    if (lives !== 0) {
      guessLetter({ "gameId": gameId, "letter": letter })
        .then((response) => {
          const {
            correctLetters,
            incorrectLetters,
            lives: livesLeft,
            gameInProgress: inProgress
          } = response
          setCorrectGuesses(correctLetters)
          setIncorrectGuesses(incorrectLetters)
          setLives(livesLeft)
          setGameInProgress(inProgress)
          getGuessOutcomeMessage(letter, correctLetters, livesLeft, inProgress)
        })
    }
    else {
      setMessage('Game Over! Try again?')
    }
  }

  const getGuessOutcomeMessage = (letter, correctLetters, livesLeft, inProgress) => {
    if (!inProgress && livesLeft === 0) {
      setMessage('Game Over! Try again?')
    } else if (!inProgress) {
      setMessage(GAME_WON)
    } else if (correctLetters.find((item) => item.letter === letter)) {
      setMessage('Correct!')
    } else {
      setMessage('Incorrect!')
    }
  }

  return (
    <div className="App">
      {user && gameId !== 0 ? (
        <div>
          <h1>Let's play Hangman, {user.name}!</h1>
          <Word
            secretWordLength={numberOfLetters}
            correctLetters={correctGuesses}
          />
          <div>{message}</div>
          <Keyboard
            guess={handleGuess}
            correctLetters={correctGuesses}
            incorrectLetters={incorrectGuesses}
          />
          {message === GAME_WON && <Confetti />}
          <GameOutcomeModal
            open={!gameInProgress}
            message={message}
            restartGame={restartGame}
          />
        </div>
      ) : (
        <>
          <h1>Welcome to The Hangman Game!</h1>

          <form
            className="name-form"
            aria-label="player name"
            onSubmit={onSubmitForm}
          >
            <label
              className="name-label"
              htmlFor="name"
            >Enter your name </label>
            <TextField
              type="text"
              id="name"
              variant="outlined"
              onChange={onInputChange}
              error={nameError}
              helperText={helperText ? "Your name is required" : ""}
            />
            <Button
              variant="contained"
              type="submit"
              color="primary"
            >
              Start the game
            </Button>
          </form>
        </>
      )}
    </div>
  );
}

export default App;
