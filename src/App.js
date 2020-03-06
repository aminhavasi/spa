import React from "react";
import Navbar from "./components/navbar";
import Jumbotron from "./components/jumbotron";
import Description from "./components/description";
import Skills from "./components/skills";
function App() {
    return (
        <div className="App">
            <Navbar />

            <Jumbotron />
            <Description />
            <Skills />
        </div>
    );
}

export default App;
