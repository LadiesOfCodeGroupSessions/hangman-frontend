import {render, screen} from "@testing-library/react";
import Word from './Word';



describe('Word', () => {
    it('Should render 5 underscores if secret word length is 5', () => {
        render(<Word secretWordLength={5} />)
        screen.debug()
        const para = screen.queryByText('_')
        expect(para.length).toBe(5);
    })
})