import { render, screen } from "@testing-library/react"
import Keyboard from "./Keyboard"

describe('Keyboard', () => {
    it('should render keyboard letters on screen', () => {
        render(<Keyboard />)
        screen.debug()
        const buttons = screen.queryAllByRole('button');
        expect(buttons[0]).toHaveTextContent('Q')
    })

    it('should guess letter Q on click', () => {
        const guess = jest.fn()
        render(<Keyboard guess={guess} />)
        screen.debug()
        const button = screen.getByRole('button');
        const letter = button.textContent
        button.click()
        expect(guess).toHaveBeenCalledWith(letter);
    })
})