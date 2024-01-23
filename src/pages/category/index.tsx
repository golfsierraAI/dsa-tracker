import { ReactNode, useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CategoryType, TopicsType } from "../../types/types";
import styles from "./index.module.scss";
import CustomCheckBox from "../../components/checkbox";

const Category = (): ReactNode => {
  const location = useLocation();
  const navigate = useNavigate();

  const [completedArray, setCompletedArray] = useState<string[] | null>(null);
  const onChange = useCallback(() => {
    const localStorageArray = localStorage.getItem("completed");
    const array: string = localStorageArray !== null ? localStorageArray : "[]";
    setCompletedArray(JSON.parse(array));
  }, []);

  useEffect(() => {
    onChange();
    window.scrollBy(0, 0);
  }, [onChange]);

  useEffect(() => {
    if (location.state === null) {
      navigate("/");
    }
  }, [location.state, navigate]);

  const data: CategoryType = location.state;

  const getTagsList = (tags: string): ReactNode[] => {
    return tags?.split(",").map((tag) => {
      return (
        <div key={tag} className={styles.tag}>
          {tag}
        </div>
      );
    });
  };

  const getTitle = (item: TopicsType): ReactNode => {
    return (
      <h3>
        {item.sl_no_in_step}. {item.title}
      </h3>
    );
  };

  const getPostLink = (item: TopicsType): ReactNode => {
    return item.post_link ? (
      <h6>
        Post Link:{" "}
        <a href={item.post_link} target="_blank">
          Click to view the post
        </a>
      </h6>
    ) : null;
  };

  const getYoutubeLink = (item: TopicsType): ReactNode => {
    return item.yt_link ? (
      <h6>
        Youtube Link:{" "}
        <a href={item.yt_link} target={"_blank"}>
          Click to watch the solution on YouTube
        </a>
      </h6>
    ) : null;
  };

  const getPlatformLink = (
    link: string | null,
    platform: string
  ): ReactNode => {
    return link ? (
      <h6>
        Solve this problem in{" "}
        <a href={link} target={"_blank"}>
          {platform}
        </a>
      </h6>
    ) : null;
  };

  return (
    <div className={styles.root}>
      <div className={styles.titleWrapper}>
        <h1>Let's solve {data.title} 🎉</h1>
        <h2>Below are some questions to get you started.</h2>
      </div>
      <div className={styles.questionWrapper}>
        {data.topics.map((item: TopicsType) => {
          return (
            <div
              className={
                completedArray?.find((record) => record === item.id) !==
                undefined
                  ? styles["question--done"]
                  : styles.temp
              }
              key={item.id}
            >
              <div role="cards-wrapper" className={styles.question}>
                {getTitle(item)}
                {getPostLink(item)}
                {getPlatformLink(item.p1_link, "Coding Ninjas")}
                {getPlatformLink(item.p2_link, "Leetcode")}
                {getYoutubeLink(item)}
                <div className={styles.tagsWrapper}>
                  {item.tags ? "Tags: " : null}
                  {item.tags ? getTagsList(item.tags) : null}
                </div>
              </div>
              <CustomCheckBox id={item.id} onChange={onChange} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
