import React from "react";
import Navbar from "./components/navbar";
import Jumbotron from "./components/jumbotron";
import Description from "./components/description";
import Skills from "./components/skills";
import Posts from "./components/post";
function App() {
    return (
        <div className="App">
            <Navbar />

            <Jumbotron />
            <Description />
            <Skills />
            <Posts />
        </div>
    );
}

export default App;
