function Keyboard(props) {
    return (<div>
        <button onClick={(e) => props.guess('Q')}>Q</button>
    </div>);
}

export default Keyboard;