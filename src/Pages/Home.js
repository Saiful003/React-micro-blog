import React from "react";
import FilteredPost from "../components/FilteredPost/FilteredPost";
import UserInput from "../components/UserInput/UserInput";
import UserPosts from "../components/UserPosts/UserPosts";

function Home() {
  return (
    <>
      <UserInput />
      <UserPosts />
      <FilteredPost />
    </>
  );
}

export default Home;
