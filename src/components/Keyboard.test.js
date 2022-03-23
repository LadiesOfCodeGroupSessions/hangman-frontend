import { render, screen } from "@testing-library/react"
import Keyboard from "./Keyboard"

describe('Keyboard', () => {
    it('should render keyboard letters on screen', () => {
        render(<Keyboard />);
        const buttons = screen.queryAllByRole('button');
        expect(buttons[0]).toHaveTextContent('Q');
        expect(buttons.length).toBe(26);
    })

    it('should guess letter Q on click', () => {
        const guess = jest.fn();
        render(<Keyboard guess={guess} />);
        const [button] = screen.queryAllByRole('button');
        const letter = button.textContent;
        button.click();
        expect(letter).toBe('Q');
        expect(guess).toHaveBeenCalledWith('Q');
    })

    it('button is disabled when letter has been guessed', () => {
        const guess = jest.fn();
        const correctGuesses = [{letter : "Q", position : [0]}];
        const incorrectGuesses = []; 

        render(<Keyboard guess={guess} correctLetters={correctGuesses} incorrectLetters={incorrectGuesses}/>);
        const button = screen.queryByText('Q');
        expect(button).toBeDisabled();
    } )
})