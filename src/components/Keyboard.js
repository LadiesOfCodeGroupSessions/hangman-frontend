import "./Keyboard.css"

function Keyboard(props) {
  return (
    <div>
      {"QWERTYUIOPASDFGHJKLZXCVBNM".split("").map((letter) => (
        // TODO: pass down array of correct letters and 
        // incorrect letters as props
        // dynamically asign classname to change to colour
        <button className="key" disabled= {disabledButton(letter, props.correctLetters)} key={letter} onClick={() => props.guess(letter)}>
          {letter}
        </button>
      ))}
    </div>
  );
}

function disabledButton(guessLetter, correctLetters) {
  if (!correctLetters) {
    return false;
  }

  if (correctLetters.find(item => (item.letter === guessLetter))) {
    return true;
  } 
  return false;
}

export default Keyboard;
