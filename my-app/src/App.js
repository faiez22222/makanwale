import React, { useEffect, useState } from "react";



import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import Layout from "./Component/Layout";
import Glow from "./Component/glow";
import Cost from "./Component/cost-plus-contract-house-construction";
import About from "./Component/About";
import Contact_Us from "./Component/Contact-us";


const App = () => {
 

  return (
    <>

        <Routes>
        
            
              <Route path="/" element={<Layout />} />
              <Route path="/glow" element={<Glow />} />
              <Route path="/cost-plus-contract-house-construction" element={<Cost/>} />
              <Route path="/about-us" element={<About/>} />
              <Route path="/contact-us" element={<Contact_Us/>} />
              
             
             
        
        </Routes>
   


    </>
  );
};

export default App;
