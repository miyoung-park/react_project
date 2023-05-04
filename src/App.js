import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Counter from "./views/Counter";
import InputFirst from "./views/InputFirst";
import InputSecond from "./views/InputSecond";
import UserList from "./views/List";

function App() {
    return (
        <div className="App">
            <nav>
                <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/counter">Counter</Link>
                | <Link to="/input/first">InputFirst</Link> | <Link to="/input/second">InputSecond</Link> | <Link to="/list">UserList</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/counter" element={<Counter/>}/>
                <Route path="/input/first" element={<InputFirst/>}/>
                <Route path="/input/second" element={<InputSecond/>}/>
                <Route path="/list" element={<UserList/>}/>
            </Routes>
        </div>
    )
}

export default App;
