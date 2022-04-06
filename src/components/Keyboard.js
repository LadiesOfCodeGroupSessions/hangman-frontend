import "./Keyboard.css"

function Keyboard(props) {
  return (
    <div>
      {"QWERTYUIOPASDFGHJKLZXCVBNM".split("").map((letter) => (
        <button className={getClassName(letter, props.correctLetters, props.incorrectLetters) ? "correctGuess" : "incorrectGuess"} disabled={isButtonDisabled(letter, props.correctLetters, props.incorrectLetters)} key={letter} onClick={() => props.guess(letter)}>
          {letter}
        </button>
      ))}
    </div>
  );
}

function isButtonDisabled(guessLetter, correctLetters, incorrectLetters) {
  if (correctLetters.find(item => (item.letter === guessLetter)) || (incorrectLetters.find(item => (item.letter === guessLetter)))) {
    return true;
  }
}

function getClassName(guessLetter, correctLetters, incorrectLetters){
  if (correctLetters.find(item => (item.letter === guessLetter))) {
    return true;
  }

  if (incorrectLetters.find(item => (item.letter === guessLetter))) {
    return false;
  }
}

export default Keyboard;
