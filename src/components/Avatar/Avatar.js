import React from "react";
import { useBlog } from "../../context/GlobalContext";
import styles from "./Avatar.module.css";
import userAvatar from "../../assests/images/274742708_677160566814197_376092508177793665_n.jpg";
function Avatar() {
  const { currentColor } = useBlog();

  return (
    <div
      style={{ boxShadow: `0px 0px 4px 2px ${currentColor}` }}
      className={styles.user__avatar}
    >
      <img src={userAvatar} alt="" />
    </div>
  );
}

export default Avatar;
