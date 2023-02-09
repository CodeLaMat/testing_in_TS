import { render, screen } from "@testing-library/react";
import Greet from "./greet";

describe("Greet", () => {
  test("Greet renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  });
});

describe("Nested", () => {
  test("Greet renders with the name", () => {
    render(<Greet name="Eyvaz" />);
    const textElement = screen.getByText("Hello Eyvaz");
    expect(textElement).toBeInTheDocument();
  });
});
