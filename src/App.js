import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./containers/HomePage";
import CollectionsPage from "./containers/CollectionsPage";
import WatchesPage from "./containers/WatchesPage"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collections" element={<CollectionsPage />} />
        <Route path="/watches" element={<WatchesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
