import React, { useState } from "react";
import styled from "styled-components";
import { useBlog } from "../../../context/GlobalContext";
import ThemePlate from "../ThemePlate/ThemePlate";
import styles from "./CurrentThemeBtn.module.css";

function CurrentThemeBtn() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { currentColor } = useBlog();

  return (
    <div className={styles.colorPlate__wrapper}>
      <Ancor
        currentColor={currentColor}
        onClick={() => setIsOpenModal(!isOpenModal)}
        href="#"
      ></Ancor>
      {isOpenModal && <ThemePlate />}
    </div>
  );
}

const Ancor = styled.a`
  width: 55px;
  height: 55px;
  display: block;
  border-radius: 50%;
  background-color: ${({ currentColor }) => currentColor};
`;

export default CurrentThemeBtn;
