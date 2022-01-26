import React from "react";
import App from "./App";
import {render, screen} from "@testing-library/react";

describe('App', () => {
  it('Should have form', async () => {
    render(<App />);

    expect(await screen.findByRole("form")).not.toBeNull();
  });
});
