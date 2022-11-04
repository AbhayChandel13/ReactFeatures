import React from "react";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/home";
import Aboutus from "./components/aboutus";
import Service from "./components/service";
import Blog from "./components/blog";
import Loadmorepage from "./components/loadmorepage";
import InfiniteScroll from "./components/infiniteScroll";
import AddUser from "./components/AddUser";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<Aboutus />}></Route>
          <Route path="/service" element={<Service />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/loadmore" element={<Loadmorepage />}></Route>
          <Route path="/scroll" element={<InfiniteScroll />}></Route>
          <Route path="/add" element={<AddUser />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
