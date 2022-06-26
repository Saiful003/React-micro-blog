import React, { useState } from "react";
import Button from "../Button/Button";
import styles from "./SinglePost.module.css";
import Avatar from "../Avatar/Avatar";
import { Link } from "react-router-dom";
import { useBlog } from "../../context/GlobalContext";
import { BsXLg } from "react-icons/bs";

function SinglePost({ author, body, love, id }) {
  const [loveState, setLoveState] = useState(love);
  const { deletePost, currentColor } = useBlog();

  function spiltOutBodyText() {
    const bodyArr = body.split(" ");
    const pureFilteredArr = bodyArr.filter(
      (item, index, array) => array.indexOf(item) === index
    );
    return pureFilteredArr;
  }
  const pureFilteredArr = spiltOutBodyText();

  return (
    <div className={styles.single__post}>
      <Avatar />
      <div className={styles.content__wrapper}>
        <h3 className={styles.user__name}> {author} </h3>
        <div className={styles.content}>
          {pureFilteredArr.map((item, id) => {
            if (item.includes(" #") || item.startsWith("#")) {
              return (
                <React.Fragment key={id}>
                  <Link
                    style={{ color: currentColor }}
                    key={id}
                    to={`/${item.substring(1)}`}
                  >
                    {item}
                  </Link>
                </React.Fragment>
              );
            }
            return <span key={id}> {item} </span>;
          })}
        </div>
        <Button onClick={() => setLoveState(!loveState)}>
          {loveState ? "Loved" : "Love"}
        </Button>
      </div>
      <div className={styles.delete__icon} onClick={() => deletePost(id)}>
        <BsXLg />
      </div>
    </div>
  );
}

export default SinglePost;
