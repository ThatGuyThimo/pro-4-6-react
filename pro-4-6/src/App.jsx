// Filename - App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";

import Layout from "./components/layout";
import Home from "./pages/Homepage";
import Details from "./pages/Details";
import Edit from "./pages/Edit";
import Create from "./pages/Create";
// import Delete from "./pages/Delete";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/edit/:carId" element={<Edit />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/details/:carId" element={<Details />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
