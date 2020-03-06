import React from "react";
import Navbar from "./components/navbar";
import Jumbotron from "./components/jumbotron";
import Description from "./components/description";
function App() {
    return (
        <div className="App">
            <Navbar />

            <Jumbotron />
            <Description />
        </div>
    );
}

export default App;
