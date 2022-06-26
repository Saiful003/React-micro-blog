import React from "react";
import styled from "styled-components";
import CurrentThemeBtn from "./CurrentThemeBtn/CurrentThemeBtn";

function Setting() {
  return (
    <Wrapper>
      <h2>Choose your favourite color:</h2>
      <CurrentThemeBtn />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5em;
`;

export default Setting;
