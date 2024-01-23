import { describe, expect, test } from "vitest";
import { contextData, render } from "../../utils/testHelper";
import { screen } from "@testing-library/react";
import type { InitialEntry } from "@remix-run/router";
import "@testing-library/jest-dom/extend-expect";
import { LazyHome } from "../../utils/LazyLoad";

const location: InitialEntry = {
  pathname: "/",
  state: null,
};

describe("Home page tests", () => {
  test("Home page is rendered correctly", async () => {
    render(<LazyHome />, {
      location,
    });
    const heading = await screen.findByRole("heading", {
      name: "👋 Hello learner, let's dive into some coding 🚀",
    });

    expect(heading).toBeInTheDocument();
  });

  test("List is rendered correctly", async () => {
    render(<LazyHome />, {
      location,
    });

    const list = await screen.findAllByRole("list-item");

    expect(list).not.toBeNull;
    expect(list.length).to.equal(contextData.data.length);
  });
});
