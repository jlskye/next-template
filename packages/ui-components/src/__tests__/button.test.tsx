import { ClientButton } from "../client/ClientButton";
import { render, screen, within } from "@testing-library/react";

describe("button", () => {
  it("should render without crashing", () => {
    render(<ClientButton label={"test"} />);
    const button = within(screen.getByRole("button"));

    expect(button.findByText(/test/)).toBeDefined();
  });
});
