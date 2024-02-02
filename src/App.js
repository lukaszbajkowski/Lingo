import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LandingPage from "./components/LandingPage/LandingPage";
import Post from "./components/SinglePost/Post";
import Category from "./components/Category/Category";
import Blog from "./components/BlogUser/Blog";
import Categories from "./components/Categories/Categories";
import StartPage from "./components/Start/Start";
import JoinPage from "./components/Join/Join";

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
                <Route path="/start" element={<StartPage/>}/>
                <Route path="/join" element={<JoinPage/>}/>
                <Route path="/legal/terms-of-service" element={<></>}/>
                <Route path="/legal/privacy-policy" element={<></>}/>
                <Route path="/legal/anti-spam-policy" element={<></>}/>
            </Routes>
        </Router>
    );
}

export default App;
