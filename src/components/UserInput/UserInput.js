import React, { useState } from "react";
import TextArea from "../TextArea/TextArea";
import { v4 as uuidv4 } from "uuid";
import Button from "../Button/Button";
import Avatar from "../Avatar/Avatar";
import Input from "../Input/Input";
import { useBlog } from "../../context/GlobalContext";
import styles from "./UserInput.module.css";

function UserInput() {
  const { posts, setPosts } = useBlog();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [textLength, setTextLength] = useState(0);
  const [error, setError] = useState(false);
  const [error2, setError2] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const limit = 300;

  // onchange handler
  function handleChange(e) {
    const text = e.target.value;
    setTextLength(text.length);
    // must do it
    setName(e.target.value);
  }

  function checkValidity() {
    if (textLength <= limit) return true;
    return false;
  }

  function textMaker() {
    if (limit === textLength) {
      return `0 word left`;
    }
    if (textLength <= limit) {
      return `${limit - textLength} words left`;
    }
    return `${textLength - limit} words exceeded`;
  }

  function handleAddPosts(myPost) {
    // copy posts array
    const workingPosts = [...posts];

    setError(false);
    setError2(false);

    // conditions
    if (name === "") setError2(true);
    if (username === "") setError(true);
    if (!checkValidity()) setError2(true);
    if (name === "" || username === "" || !checkValidity()) return;

    // create new post
    const post = {
      id: uuidv4(),
      author: username,
      body: myPost,
    };
    workingPosts.unshift({ ...post });

    setTimeout(() => {
      setPosts(workingPosts);
      setIsSuccess(false);
    }, 1000);

    // update the state
    setTextLength(0);
    setName("");
    setUsername("");
    setIsSuccess(true);
  }

  return (
    <div className={styles.userInput__section}>
      <div className={styles.user__introduction}>
        <Avatar />
        <Input
          className={styles.input_class1}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter Your name"
          style={{ border: error ? "1px solid #ff0046" : "1px solid gray" }}
        />
      </div>

      <TextArea
        value={name}
        onChange={(e) => handleChange(e)}
        placeholder="Write here"
        style={{
          border: error2 ? `1px solid #ff0046` : "1px solid",
          resize: "none",
        }}
        rows={8}
      />
      <div className={styles.parent_wrapper}>
        {checkValidity() ? (
          <span style={{ color: "black" }}>{textMaker()}</span>
        ) : (
          <span style={{ color: "#ff0046" }}>{textMaker()}</span>
        )}
        <Button onClick={() => handleAddPosts(name)}>
          {isSuccess ? "Adding Post" : "Add Post"}
        </Button>
      </div>
    </div>
  );
}

export default UserInput;
