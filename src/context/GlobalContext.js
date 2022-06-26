import React, { useContext, useEffect, useState } from "react";
import { users } from "../Data/Data";

// create context
const BlogContext = React.createContext();

// custom hook
export function useBlog() {
  return useContext(BlogContext);
}

export function BlogContextProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [currentColor, setCurrentColor] = useState("#ff0046");

  function findKeyWord() {
    return posts
      .filter(
        ({ body }) =>
          body.startsWith("#") || (body.includes(" #") ? body : null)
      )
      .map(({ body }) => {
        return body.split(" ");
      })
      .flat()
      .reduce((hashArr, item) => {
        const removeHashSign = item.substring(1);
        if (item.startsWith("#") || item.includes(" #")) {
          if (hashArr.indexOf(removeHashSign) === -1) {
            hashArr.push(removeHashSign);
          }
        }
        return hashArr;
      }, []);
  }

  function setColor(newColor) {
    setCurrentColor(newColor);
  }

  function deletePost(id) {
    const workingPosts = [...posts];
    const filterdPosts = workingPosts.filter((post) => post.id !== id);
    setPosts(filterdPosts);
  }
  useEffect(() => {
    setPosts([...posts, ...users]);
  }, []);

  const value = {
    posts,
    setPosts,
    deletePost,
    currentColor,
    setColor,
    findKeyWord,
  };

  return (
    <BlogContext.Provider value={value}> {children} </BlogContext.Provider>
  );
}
