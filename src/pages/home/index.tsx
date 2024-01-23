import { MouseEvent, ReactNode, useContext } from "react";
import { APIContext } from "../../context/apiContext";
import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";
import { ApiType, CategoryType } from "../../types/types";
import github from "../../assets/github.png";

const Home = (): ReactNode => {
  const data: ApiType | null | string = useContext(APIContext);
  const navigate = useNavigate();

  const emojis = [
    "😀",
    "😃",
    "😄",
    "😁",
    "😆",
    "😅",
    "🤣",
    "😂",
    "🙂",
    "🙃",
    "😉",
    "😊",
    "😇",
    "🥰",
    "😍",
    "🤩",
    "😘",
    "😗",
    "😚",
    "😙",
    "😋",
    "😛",
    "😝",
    "😜",
    "🤪",
    "🤨",
    "🧐",
    "🤓",
    "😎",
    "🤩",
    "🥳",
    "😏",
    "😒",
    "😞",
    "😔",
    "😟",
    "😕",
    "🙁",
    "☹️",
    "😣",
    "😖",
    "😫",
    "😩",
    "🥺",
    "😢",
    "😭",
    "😤",
    "😠",
    "😡",
    "🤬",
    "🤯",
    "😳",
    "🥵",
    "🥶",
    "😱",
    "😨",
    "😰",
    "😥",
    "😓",
    "🤗",
    "🤔",
    "🤭",
    "🤫",
    "🤥",
    "😶",
    "😐",
    "😑",
    "😬",
    "🙄",
    "😯",
    "😦",
    "😧",
    "😮",
    "😲",
    "😴",
    "🤤",
    "😪",
    "😵",
    "🤐",
    "🥴",
    "🤕",
    "🥳",
    "😷",
    "🤒",
    "🤕",
    "🤑",
    "🤠",
    "😈",
    "👿",
    "👹",
    "👺",
    "💀",
    "👻",
    "👽",
    "🤖",
    "💩",
    "😺",
    "😸",
    "😹",
    "😻",
    "😼",
    "😽",
    "🙀",
    "😿",
    "😾",
  ];

  const getRandomEmoji = () => {
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];
    return emoji;
  };

  const handleClick = (
    event: MouseEvent<HTMLDivElement>,
    category: CategoryType
  ): void => {
    event.stopPropagation();
    navigate(`/category/${category.title}`, { state: category });
  };

  const renderData = () => {
    if (typeof data === "string") {
      return <h1>Internal Server Error</h1>;
    } else {
      const elements = data?.data.map((category: CategoryType) => {
        return (
          <div
            role={"list-item"}
            className={styles.category}
            onClick={(e) => handleClick(e, category)}
            key={category.sl_no}
          >
            <h3>
              {getRandomEmoji()} Serial No. {category.sl_no}
            </h3>
            <h2>{category.title}</h2>
          </div>
        );
      });
      return elements;
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.nav}>
        <h1 className={styles.welcomeText}>
          👋 Hello learner, let's dive into some coding 🚀
        </h1>
        <div className={styles.logoWrapper}>
          <a href="https://github.com/golfsierraAI" target="_blank">
            <img src={github} alt="github logo" />
          </a>
        </div>
      </div>

      <div className={styles.tagsWrapper}>{renderData()}</div>
    </div>
  );
};

export default Home;
