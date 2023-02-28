import React from "react";
import { Routes, Route } from "react-router-dom";
import { ContactPage, HomePage,Detail } from "../controller/PageController";
export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/contact" element={<ContactPage />}/>
        <Route path="/detail/:id" element={<Detail/>}/>
      </Routes>
    </>
  );
}
