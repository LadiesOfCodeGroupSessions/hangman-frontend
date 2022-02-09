function Keyboard(props) {
  return (
    <div>
      {"QWERTYUIOPASDFGHJKLZXCVBNM".split("").map((letter) => (
        <button key={letter} onClick={() => props.guess(letter)}>
          {letter}
        </button>
      ))}
    </div>
  );
}

export default Keyboard;
