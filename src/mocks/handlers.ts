// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { http } from "msw";

export const handlers = [
  http.get(import.meta.env.VITE_API_URL, (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json({
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
      })
    );
  }),
];
