import { useState, useEffect } from "react";
import { Routes, Route } from "react-router";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Button from "./components/Button";
import HomePage from "./pages/HomePage";
import SinglePage from "./pages/SinglePage";
import GroupPage from "./pages/GroupPage";

export default function App() {
  // useEffect(() => {
  //   async function fetchPosts() {
  //     const res = await fetch("http://localhost:9001/posts");
  //     const res = await fetch("https://w07-database-driven-app.onrender.com/posts");
  //     const data = await res.json();
  //     setPosts(data);
  //   }
  //   fetchPosts();
  // }, [posts]);

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts" element={<GroupPage />} />
          <Route path="/posts/:id" element={<SinglePage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
