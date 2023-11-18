import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LandingPage from "./components/LandingPage/LandingPage";
import Post from "./components/SinglePost/Post";
import Category from "./components/Category/Category";
import Blog from "./components/BlogUser/Blog";
import Categories from "./components/Categories/Categories";

function App () {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/blog" element={<Blog/>}/>
                <Route path="/blog/admin" element={<Blog/>}/>
                <Route path="/categories" element={<Categories/>}/>
                <Route path="/categories/admin" element={<Categories/>}/>
                <Route path="/category/:id" element={<Category/>}/>
                <Route path="/post/:id" element={<Post/>}/>
            </Routes>
        </Router>
    );
}

export default App;
