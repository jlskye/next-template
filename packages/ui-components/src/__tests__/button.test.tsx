import { Button } from "src/client/Button";
import { render, screen, within } from "@testing-library/react";

describe("button", () => {
  it("should render without crashing", () => {
    render(<Button label={"test"} />);
    const button = within(screen.getByRole("button"));

    expect(button.findByText(/test/)).toBeDefined();
  });
});
