import React from "react";
import { Routes, Route } from "react-router-dom";
import { ContactPage } from "../controller/PageController";
export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<h1 className="text-xl font-sans">This is HomePage</h1>} />
        <Route path="/contact" element={<ContactPage />}/>
      </Routes>
    </>
  );
}
