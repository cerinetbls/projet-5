import React from "react";
import { Routes, Route } from 'react-router-dom';
import Apropos from "./pages/Apropos/Apropos";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Logement from "./pages/Logement/Logement";
import './App.css';


function App() {
	return (
    
    <div>  
      <Routes>      
        <Route path="/" element={<Home />} />
        <Route path="/Apropos" element={<Apropos />} />
        <Route path="/Logement/:id" element={<Logement />} />        
        <Route path="*" element={<NotFound />} />
      </Routes>
    
    </div>
  );
};

export default App;

