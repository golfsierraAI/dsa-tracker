import { screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import "@testing-library/jest-dom/extend-expect";
import type { InitialEntry } from "@remix-run/router";

import { render } from "../../utils/testHelper";
import { LazyCategory } from "../../utils/LazyLoad";

const location: InitialEntry = {
  pathname: "/category/Binary Search",
  state: {
    sl_no: 2,
    title: "Binary Search",
    topics: [
      {
        id: "srchinrttdsrtdrryii",
        tags: "",
        title: "Search in Rotated Sorted Array II",
        p1_link:
          "https://www.codingninjas.com/codestudio/problems/search-in-a-rotated-sorted-array-ii_7449547?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf",
        p2_link:
          "https://leetcode.com/problems/search-in-rotated-sorted-array-ii/",
        step_no: 2,
        yt_link: "https://youtu.be/w2G2W8l__pc",
        post_link:
          "https://takeuforward.org/arrays/search-element-in-rotated-sorted-array-ii/",
        head_step_no: "Binary Search ",
        sl_no_in_step: 1,
      },
      {
        id: "findminimminrttdsrtdrry",
        tags: "",
        title: "Find minimum in Rotated Sorted Array",
        p1_link:
          "https://www.codingninjas.com/codestudio/problems/rotated-array_1093219?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf",
        p2_link:
          "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
        step_no: 2,
        yt_link: "https://youtu.be/nhEMDKMB44g",
        post_link:
          "https://takeuforward.org/data-structure/minimum-in-rotated-sorted-array/",
        head_step_no: "Binary Search ",
        sl_no_in_step: 2,
      },
    ],
  },
};

describe("Category component tests", () => {
  test("Category component is rendered correctly", async () => {
    render(<LazyCategory />, {
      location: location,
    });

    const heading = await screen.findByRole("heading", {
      name: `Let's solve ${location.state.title} 🎉`,
    });

    expect(heading).toBeInTheDocument();
  });

  test("Card is rendered correctly", async () => {
    render(<LazyCategory />, {
      location: location,
    });

    const cards = await screen.findAllByRole("cards-wrapper");

    expect(cards.length).to.equal(location.state.topics.length);
  });
});
