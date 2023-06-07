import React from "react"; 
//import { Navigate } from "react-router-dom";

import { Routes, Route } from "react-router-dom";
import './App.css';
import Contact from'./contact.js';
import Home from './accueil.js';
import Service from "./service";
import Count from "./count";
function App() {
  return (
    
<Routes>
  <Route path="/" element={<Home />}></Route>
  <Route path="/contact" element={<Contact />}></Route>
  <Route path="/service" element={<Service />}></Route> 
  <Route path="/count" element={<Count />}></Route> 
</Routes>
  );
}

export default App;
