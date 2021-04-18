import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders name label", () => {
  render(<App />);
  const nameLabel = screen.getByText(/Name/i);
  expect(nameLabel).toBeInTheDocument();
});
