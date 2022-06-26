import React from "react";
import Layout from "./components/Layout/Layout";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import UserPosts from "./components/UserPosts/UserPosts";
import Setting from "./components/Setting/Setting";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="app">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path=":dynamicPostId" element={<Home />} />
          </Route>
          <Route path="/setting" element={<Setting />} />
        </Routes>
      </Layout>
    </div>
  );
}
export default App;
