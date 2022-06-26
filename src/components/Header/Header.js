import React from "react";
import { Link } from "react-router-dom";
import { useBlog } from "../../context/GlobalContext";
import styles from "./Header.module.css";

function Header() {
  const { currentColor } = useBlog();

  return (
    <header>
      <div className="container">
        <div className={styles.header_wrapper}>
          <div className={styles.logo}>
            <Link to="/">
              <h2 style={{ color: currentColor }}> React-Fb </h2>
            </Link>
          </div>
          <div>
            <Link style={{ color: currentColor }} to="/">
              Home
            </Link>
          </div>
          <div>
            <Link style={{ color: currentColor }} to="/setting">
              Setting
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
