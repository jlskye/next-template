import Home from "src/app/[lang]/page";
import { render, screen } from "@testing-library/react";

describe("index page", () => {
  it("should render without crashing", async () => {
    render(await Home());
    const button = screen.getByRole("button");

    expect(button.innerText).toBe("test");
  });
});
