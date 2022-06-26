import React from "react";
import styles from "./ThemePlate.module.css";
import Theme from "../Theme/Theme";
import { colors } from "../../../Data/Data";
import InputColor from "../InputColor/InputColor";

function ThemePlate() {
  return (
    <div className={styles.theme_plate_container}>
      {colors.map(({ themeColor, id }) => (
        <Theme color={themeColor} key={id} />
      ))}
      <InputColor />
    </div>
  );
}

export default ThemePlate;
