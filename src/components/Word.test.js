import { render, screen } from "@testing-library/react";
import Word from "./Word";

describe("Word", () => {
  it("Should render 5 underscores if secret word length is 5", () => {
    render(<Word secretWordLength={5} />);
    screen.debug();
    const span = screen.queryAllByText("_");
    expect(span.length).toBe(5);
  });

  it("Should render correctly guessed letter in the correct position", () => {
    const correctLetters = [
      {
        letter: "A",
        position: [1],
      },
    ];

    render(<Word secretWordLength={5} correctLetters={correctLetters} />);
    screen.debug();
    const letterElements = screen.queryAllByRole("listitem");
    expect(letterElements[1].textContent).toBe("A");
  });
});
