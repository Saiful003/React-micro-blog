import React from "react";
import { useParams } from "react-router-dom";
import { useBlog } from "../../context/GlobalContext";
import SinglePost from "../SinglePost/SinglePost";
import styles from "./UserPosts.module.css";
function UserPosts() {
  const { posts, currentColor } = useBlog();
  const { dynamicPostId } = useParams();

  function loopThrough() {
    return posts.filter(({ body }) => {
      if (!dynamicPostId) return posts;
      return (
        body.startsWith(`#${dynamicPostId}`) ||
        body.includes(` #${dynamicPostId}`)
      );
    });
  }
  const filteredPosts = loopThrough();

  return (
    <div className={styles.post__container}>
      {dynamicPostId && (
        <div
          style={{ backgroundColor: currentColor }}
          className={styles.hastag_container}
        >
          <h4> {`Hastag : #${dynamicPostId}`} </h4>
        </div>
      )}
      <ul>
        {posts.length === 0 || filteredPosts.length === 0 ? (
          <div className={styles.message}>
            {dynamicPostId ? (
              <h4>{`No more posts here with this ${dynamicPostId} keyword.`}</h4>
            ) : (
              <h4>No more posts here... </h4>
            )}
          </div>
        ) : null}
        {filteredPosts.map((user) => {
          return (
            <SinglePost key={user.id} {...user} dynamicPostId={dynamicPostId} />
          );
        })}
      </ul>
    </div>
  );
}

export default UserPosts;
