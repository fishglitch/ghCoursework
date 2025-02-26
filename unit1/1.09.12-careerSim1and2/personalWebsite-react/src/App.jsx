import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Portfolio from "./components/Portfolio"
import Home from "./components/Home";
import Navigation from "./components/Navigation";
// import {Blue, Red} from "./components"; this doesn't work

function App() {
  return (
    <>
      <div id="container">
        <Navigation></Navigation>
        <div id="main-section">
          <Routes>
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;