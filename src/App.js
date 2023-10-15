import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from "./components/LandingPage/LandingPage";
import Blog from "./components/Blog/Blog"

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/blog" element={<Blog />} />
            </Routes>
        </Router>
    );
}

export default App;
