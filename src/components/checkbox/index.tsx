import { useEffect, useState } from "react";
import { checkBoxProps } from "../../types/types";
import styles from "./index.module.scss";

const CustomCheckBox = ({ id, onChange }: checkBoxProps) => {
  const [checked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    const localStorageArray = localStorage.getItem("completed");
    const str: string = localStorageArray !== null ? localStorageArray : "[]";

    const array: string[] = JSON.parse(str);
    setChecked(array.indexOf(id) !== -1);
  }, [id]);

  const handleSubmission = (event: React.ChangeEvent<HTMLInputElement>) => {
    const completedArray: string | null = localStorage.getItem("completed");
    const array: string[] =
      completedArray !== null ? JSON.parse(completedArray) : [];

    if (event.target.checked) {
      if (array.indexOf(id) === -1) array.push(id);
    } else {
      array.splice(array.indexOf(id), 1);
    }
    setChecked(event.target.checked);
    localStorage.setItem("completed", JSON.stringify(array));
    onChange();
  };
  return (
    <>
      <div className={styles["checkbox-wrapper-5"]}>
        <div className={styles["check"]}>
          <input
            onChange={handleSubmission}
            id={"check" + id}
            type="checkbox"
            checked={checked}
          />
          <label htmlFor={"check" + id}></label>
        </div>
      </div>
    </>
  );
};

export default CustomCheckBox;
