import React, { Component } from "react";

class Skills extends Component {
    render() {
        return (
            <section id="section-skills">
                <div className="container">
                    <h2 className="text-center">My Skills</h2>
                    <p className="text-center lead">
                        You can see my skills in different sections
                    </p>
                    <div
                        className="progress"
                        style={{ height: "40px", fontSize: "1em" }}
                    >
                        <div
                            className="progress-bar progress-bar-striped"
                            style={{ width: "80%", height: "40px" }}
                        >
                            python
                        </div>
                    </div>
                    <br />
                    <div
                        className="progress"
                        style={{ height: "40px", fontSize: "1em" }}
                    >
                        <div
                            className="progress-bar progress-bar-striped"
                            style={{ width: "85%", height: "40px" }}
                        >
                            javascript
                        </div>
                    </div>
                    <br />
                    <div
                        className="progress"
                        style={{ height: "40px", fontSize: "1em" }}
                    >
                        <div
                            className="progress-bar progress-bar-striped"
                            style={{ width: "40%", height: "40px" }}
                        >
                            machine learning
                        </div>
                    </div>
                    <br />
                    <div
                        className="progress"
                        style={{ height: "40px", fontSize: "1em" }}
                    >
                        <div
                            className="progress-bar progress-bar-striped"
                            style={{ width: "50%", height: "40px" }}
                        >
                            security
                        </div>
                    </div>
                    <br />
                    <div
                        className="progress"
                        style={{ height: "40px", fontSize: "1em" }}
                    >
                        <div
                            className="progress-bar progress-bar-striped"
                            style={{ width: "90%", height: "40px" }}
                        >
                            nodejs
                        </div>
                    </div>
                    <br />
                    <div
                        className="progress"
                        style={{ height: "40px", fontSize: "1em" }}
                    >
                        <div
                            className="progress-bar progress-bar-striped"
                            style={{ width: "70%", height: "40px" }}
                        >
                            react
                        </div>
                    </div>
                    <br />
                    <h2 className="text-center">foreign languages</h2>
                    <div
                        className="progress "
                        style={{ height: "40px", fontSize: "1em" }}
                    >
                        <div
                            className="progress-bar progress-bar-striped bg-dark"
                            style={{ width: "90%", height: "40px" }}
                        >
                            English
                        </div>
                    </div>
                    <br />{" "}
                    <div
                        className="progress"
                        style={{ height: "40px", fontSize: "1em" }}
                    >
                        <div
                            className="progress-bar progress-bar-striped bg-dark"
                            style={{ width: "30%", height: "40px" }}
                        >
                            Arabic
                        </div>
                    </div>
                    <br />{" "}
                    <div
                        className="progress"
                        style={{ height: "40px", fontSize: "1em" }}
                    >
                        <div
                            className="progress-bar progress-bar-striped bg-dark"
                            style={{ width: "40%", height: "40px" }}
                        >
                            Germany
                        </div>
                    </div>
                    <br />
                    <div
                        className="progress"
                        style={{ height: "40px", fontSize: "1em" }}
                    >
                        <div
                            className="progress-bar progress-bar-striped bg-dark"
                            style={{ width: "100%", height: "40px" }}
                        >
                            Kurdi
                        </div>
                    </div>
                    <br />
                </div>
            </section>
        );
    }
}

export default Skills;
