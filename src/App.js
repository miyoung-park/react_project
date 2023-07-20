import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Counter from "./views/Counter";
import InputFirst from "./views/InputFirst";
import InputSecond from "./views/InputSecond";
import UserList from "./views/UserList";
import Change from "./views/Change";
import Subject from "./views/Subject";
import Navigation from "./views/Navigation";
import Content from "./views/Content";
import TodoApp from "./views/TodoApp";
import UserLogin from "./views/UserLogin";
import UseMemoHooks from "./views/hooks/UseMemoHooks";
import UseCallbackHooks from "./views/hooks/UseCallbackHooks";
import UseRefHooks from "./views/hooks/UseRefHooks";






function App() {
    return (
        <div>
            <Subject title="WEB" sub="world wide web !"/>
            <Navigation />
            <Content />

            <br/><br/>
            <nav>
                <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/counter">Counter</Link>
                | <Link to="/input/first">InputFirst</Link> | <Link to="/input/second">InputSecond</Link> | <Link to="/list">UserList</Link>
                | <Link to="/change">Change</Link> | <Link to="/todo">Todo</Link>| <Link to="/login">UserLogin</Link>
                | <Link to="/useMemoHooks">useMemoHooks</Link> | <Link to="/useCallbackHooks">useCallbackHooks</Link>
                | <Link to="/useRefHooks">UseRefHooks</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/counter" element={<Counter/>}/>
                <Route path="/input/first" element={<InputFirst/>}/>
                <Route path="/input/second" element={<InputSecond/>}/>
                <Route path="/list" element={<UserList/>}/>
                <Route path="/change" element={<Change/>}/>
                <Route path="/todo" element={<TodoApp/>}/>
                <Route path="/login" element={<UserLogin/>}/>
                <Route path="/useMemoHooks" element={<UseMemoHooks/>}/>
                <Route path="/useCallbackHooks" element={<UseCallbackHooks/>}/>
                <Route path="/useRefHooks" element={<UseRefHooks/>}/>
            </Routes>
        </div>
    )
}

export default App;
