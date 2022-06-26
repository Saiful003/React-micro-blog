import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useBlog } from "../../context/GlobalContext";
import styles from "./FilteredPost.module.css";

function FilteredPost() {
  const [keyword, setKeyWord] = useState([]);
  const { currentColor, posts, findKeyWord } = useBlog();

  useEffect(() => {
    const result = findKeyWord();
    setKeyWord(result);
  }, [posts]);

  return (
    <div className={styles.filteredPost__container} >
      {keyword.length === 0 && <h4>No more keyword</h4>}
      {keyword.map((e, i) => (
        <Link style={{ color: currentColor }} to={`/${e}`} key={i}>
          {`#${e}`}
        </Link>
      ))}
    </div>
  );
}

export default FilteredPost;
