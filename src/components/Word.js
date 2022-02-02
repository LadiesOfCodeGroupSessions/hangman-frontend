import "./Word.css";

function Word(props){
    const secretWordLength = new Array(props.secretWordLength);
    const secretWordArray = secretWordLength.fill("_");
    
    return <div className= "word"> {secretWordArray.map((lines, index) => ( 
        <span aria-label="letter" key={index}>{lines}</span> ))}
        </div>
}

export default Word;