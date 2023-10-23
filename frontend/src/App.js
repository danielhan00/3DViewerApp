import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import CreatePage from "./components/CreatePage";
import FileContextProvider from "./contexts/FileContextProvider";


// Main App.js of the front end.
//    - Defines main routes of the landing page and create page.
function App() {
  return (
    <FileContextProvider>
    <Router>
      <Routes>
        <Route path="/" exact element={<LandingPage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Router>
    </FileContextProvider>
  );
}

export default App;