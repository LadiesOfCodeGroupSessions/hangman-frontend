import React from "react";
import App from "./App";
import {render, screen} from "@testing-library/react";

describe('App', () => {
  it('Should have form', () => {
    render(<App />);

    expect(screen.getByRole("form")).not.toBeNull();
  });
});
