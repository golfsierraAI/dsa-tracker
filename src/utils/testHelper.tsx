import { render } from "@testing-library/react";
import { APIContext } from "../context/apiContext";
import { ReactNode, Suspense } from "react";
import Loader from "../pages/loading";
import { MemoryRouter } from "react-router-dom";
import { optionsType } from "../types/types";

export const contextData = {
  data: [
    {
      sl_no: 1,
      title: "Arrays and Hashing",
      topics: [
        {
          id: "nxtprmttin",
          tags: "Adobe,Oracle,Microsoft,Netflix,Google,Samsung,Walmart,CRED,Meesho,Swiggy,Dream11,InMobi,Oyo",
          title: "Next Permutation",
          p1_link:
            "https://www.codingninjas.com/codestudio/problems/next-greater-permutation_6929564?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf",
          p2_link: "https://leetcode.com/problems/next-permutation/",
          step_no: 1,
          yt_link: "https://youtu.be/JDOXKqF60RQ",
          post_link:
            "https://takeuforward.org/data-structure/next_permutation-find-next-lexicographically-greater-permutation/",
          head_step_no: "Arrays and Hashing",
          sl_no_in_step: 1,
        },
        {
          id: "3smprblm",
          tags: "",
          title: "3-Sum Problem",
          p1_link:
            "https://www.codingninjas.com/codestudio/problems/three-sum_6922132?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf",
          p2_link: "https://leetcode.com/problems/3sum/",
          step_no: 1,
          yt_link: "https://youtu.be/DhFh8Kw7ymk",
          post_link:
            "https://takeuforward.org/data-structure/3-sum-find-triplets-that-add-up-to-a-zero/",
          head_step_no: "Arrays and Hashing",
          sl_no_in_step: 2,
        },
      ],
    },
  ],
};

const customRender = (ui: ReactNode, options: optionsType) =>
  render(
    <APIContext.Provider value={contextData}>
      <MemoryRouter initialEntries={[options.location]}>
        <Suspense fallback={<Loader />}>{ui}</Suspense>
      </MemoryRouter>
    </APIContext.Provider>
  );

export { customRender as render };
