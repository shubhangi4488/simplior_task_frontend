import React from "react";
import { BrowserRouter } from "react-router-dom";
import Post from "./components/Post";
import PostForm from "./components/PostForm";
import PrimaryRoutes from "./primaryRoutes";
import "./App.css"

const App = () => {
  return (
    <BrowserRouter>
      <PrimaryRoutes />
    </BrowserRouter>
  );
};

export default App;
