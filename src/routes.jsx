import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Paginas/Home";
import Projects from "./Paginas/Projects";
import Resume from "./Paginas/Resume"
function App() {
    return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
        </Routes>
    </Router>);
}
export default App;
