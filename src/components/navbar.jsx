import React, { Component } from "react";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md bg-primary navbar-dark fixed-top">
                <p class="navbar-brand" href="#">
                    Amin havasi
                </p>
                <button
                    type="button"
                    className="navbar-toggler"
                    data-toggle="collapse"
                    data-target="#navabrNav"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navabrNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="section-description" className="nav-link">
                                Description
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="section-skills" className="nav-link">
                                Skills
                            </a>
                        </li>{" "}
                        <li className="nav-item">
                            <a href="section-posts" className="nav-link">
                                posts
                            </a>
                        </li>{" "}
                        <li className="nav-item">
                            <a href="section-contactus" className="nav-link">
                                contact us
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
export default Navbar;
