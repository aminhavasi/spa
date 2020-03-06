import React, { Component } from "react";
import { Link } from "react-router-dom";

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
                            <Link to="#section-top" className="nav-link">
                                Top page
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="#section-description"
                                className="nav-link"
                            >
                                Description
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="#section-skills" className="nav-link">
                                Skills
                            </Link>
                        </li>{" "}
                        <li className="nav-item">
                            <Link to="section-posts" className="nav-link">
                                posts
                            </Link>
                        </li>{" "}
                        <li className="nav-item">
                            <Link to="section-contactus" className="nav-link">
                                contact us
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
export default Navbar;
