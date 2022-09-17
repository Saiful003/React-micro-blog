import React, { useState } from "react";
import TextArea from "../TextArea/TextArea";
import { v4 as uuidv4 } from "uuid";
import Button from "../Button/Button";
import Avatar from "../Avatar/Avatar";
import Input from "../Input/Input";
import { useBlog } from "../../context/GlobalContext";
import styles from "./UserInput.module.css";
import { useLimit } from "../../hooks/useLimit";

function UserInput() {
  const { posts, setPosts } = useBlog();
  const [username, setUsername] = useState("");
  const [textValue, setTextValue] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [inputError, setInputError] = useState(false);
  const [textAreaError, setTextAreaError] = useState(false);

  const limit = 30;
  const currentLength = textValue.length;
  const limitInfo = useLimit(limit, currentLength);

  const isLimitCheckPassed = () => {
    if (currentLength > limit) {
      return false;
    }
    return true;
  };

  function handleAddPosts(myPost) {
    // copy posts array
    const workingPosts = [...posts];

    setInputError(false);
    setTextAreaError(false);

    if (!username) {
      setInputError(true);
    }
    if (!textValue) {
      setTextAreaError(true);
    }

    if (!isLimitCheckPassed()) {
      setTextAreaError(true);
    }
    if (!username || !textValue || !isLimitCheckPassed()) return;

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
    setUsername("");
    setTextValue("");
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
          style={{
            border: `${inputError ? "1px solid red" : "1px solid gray"}`,
          }}
        />
      </div>

      <TextArea
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
        placeholder="Write here"
        style={{
          border: `${textAreaError ? "1px solid red" : "1px solid gray"}`,
          resize: "none",
        }}
        rows={8}
      />
      <div className={styles.parent_wrapper}>
        <span style={{ color: `${isLimitCheckPassed() ? "gray" : "red"} ` }}>
          {limitInfo}
        </span>
        <Button onClick={() => handleAddPosts(textValue)}>
          {isSuccess ? "Adding Post" : "Add Post"}
        </Button>
      </div>
    </div>
  );
}

export default UserInput;
