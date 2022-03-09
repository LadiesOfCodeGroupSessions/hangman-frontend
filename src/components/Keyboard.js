import "./Keyboard.css"

function Keyboard(props) {
  return (
    <div>
      {"QWERTYUIOPASDFGHJKLZXCVBNM".split("").map((letter) => (
        // TODO: pass down array of correct letters and 
        // incorrect letters as props
        // dynamically asign classname to change to colour
        <button className="key" key={letter} onClick={() => props.guess(letter)}>
          {letter}
        </button>
      ))}
    </div>
  );
}

export default Keyboard;
