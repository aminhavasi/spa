import React, { Component } from "react";
import { Link } from "react-router-dom";
class NotFound extends Component {
    render() {
        return (
            <div
                style={{
                    display: "flex",
                    height: "100vh",
                    backgroundColor: "#669999"
                }}
                className="justify-content-center align-items-center"
            >
                <div className="text-center">
                    <p className="display-4">Oppss!!</p>
                    <p className="lead">
                        we can't find anything please comeback to home page!
                    </p>
                    <div>
                        <Link
                            to="/"
                            type="button"
                            className="btn btn-small btn-secondary"
                            style={{ cursor: "pointer" }}
                        >
                            Home
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default NotFound;
