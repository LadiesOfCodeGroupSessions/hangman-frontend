import "./Word.css";

function Word(props) {
  const secretWordLength = new Array(props.secretWordLength);
  const secretWordArray = secretWordLength.fill("_");
  populateLetterInPosition();

  function populateLetterInPosition() {
    props.correctLetters?.forEach((correctLetter) => {
      correctLetter.position.forEach((position) => {
        secretWordArray[position] = correctLetter.letter;
      });
    });
  }

  return (
    <ul className="word">
      {secretWordArray.map((lines, index) => {
        return (
          <li aria-label="letter" key={index}>
            {lines}
          </li>
        );
      })}
    </ul>
  );
}

export default Word;
