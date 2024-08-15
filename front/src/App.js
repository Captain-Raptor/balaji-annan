import React, { useContext } from "react";
import "./App.css";
import Header from './components/Header'
import Home from './pages/Home'
import { ThemeContext } from "./context/themeContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const { theme } = useContext(ThemeContext);
  console.log(theme)
  return (
    <div className={`App ${theme}`}>
      
      <Router>
      <div className={`App ${theme}`}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes as needed */}
        </Routes>
      

      </div>
    </Router>
    </div>
  );
}

export default App;