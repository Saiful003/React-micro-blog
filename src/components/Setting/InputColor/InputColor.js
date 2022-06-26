import React, { useEffect, useState } from "react";
import { useBlog } from "../../../context/GlobalContext";
import Input from "../../Input/Input";
import styles from "./InputColor.module.css";

function InputColor() {
  const { setColor } = useBlog();
  const [value, setValue] = useState("");

  function validateHexCode(colorCode) {
    const regex = /^#([0-9A-F]{3}){1,2}$/i;
    if (regex.test(`#${colorCode}`)) return true;
    return false;
  }

  useEffect(() => {
    if (validateHexCode(value)) setColor(`#${value}`);
  }, [value]);

  return (
    <div className={styles.wrapper}>
      <span className={styles.has_sign}>#</span>
      <Input
        className={styles.input_class2}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default InputColor;
