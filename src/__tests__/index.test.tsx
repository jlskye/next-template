import Home from "src/pages/index";
import { render, screen, within } from "@testing-library/react";

describe("index page", () => {
  it("should render without crashing", () => {
    render(<Home />);
    const main = within(screen.getByRole("main"));

    expect(
      main.getByRole("heading", { level: 1, name: /Hello World/i })
    ).toBeDefined();
  });
});
