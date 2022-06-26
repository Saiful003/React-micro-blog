import React from "react";
import styled from "styled-components";
import { useBlog } from "../../context/GlobalContext";

function Button({ children, ...rest }) {
  const { currentColor } = useBlog();
  return (
    <MyButton {...rest} currentColor={currentColor}>
      {children}
    </MyButton>
  );
}

const MyButton = styled.button`
  display: inherit;
  border: none;
  padding: 8px 32px;
  cursor: pointer;
  background: ${({ currentColor }) => currentColor};
  color: #fff;
  font-weight: bold;
  border-radius: 3px;
  font-size: 0.95rem;
`;

export default Button;
