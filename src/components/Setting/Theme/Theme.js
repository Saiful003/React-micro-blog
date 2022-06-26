import React from "react";
import { useBlog } from "../../../context/GlobalContext";

function Theme({ color }) {
  const { setColor } = useBlog();

  const style = {
    background: color,
  };

  return (
    <a
      onClick={() => setColor(color)}
      style={style}
      className="current__theme"
      href="#"
    ></a>
  );
}

export default Theme;
