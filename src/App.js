import React, {useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./containers/HomePage";
import CollectionsPage from "./containers/CollectionsPage";
import WatchesPage from "./containers/WatchesPage"; 
import ServicesPage from "./containers/ServicesPage";
import BridalPage from "./containers/BridalPage";
function App() {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        const sidebar = document.getElementById("sidebar");
        if (sidebar) sidebar.style.width = "0";
      }
    };
  
    window.addEventListener("resize", handleResize);
  
    handleResize();
  
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collections" element={<CollectionsPage />} />
        <Route path="/watches" element={<WatchesPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/engagement" element={<BridalPage />} />
      </Routes>
    </Router>
  );
}

export default App;
