// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./app";
import { server } from "./mocks/server";
import { http } from "msw";

describe("App tests", () => {
  test("App is rendering correctly", async () => {
    const handler = (_, res, ctx) => {
      return res(ctx.status(500));
    };
    server.use(http.get(import.meta.env.VITE_API_URL, handler));
    render(<App />);
    const error = await screen.findByRole("heading", {
      name: "Internal Server Error",
    });
    expect(error).toBeInTheDocument();
  });
});
