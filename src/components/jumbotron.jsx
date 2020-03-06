import React, { Component } from "react";
import "./../css/style.css";

class Jumbotron extends Component {
    render() {
        return (
            <div
                id="section-top"
                class="jumbotron jumbotron-fluid text-white d-flex justify-content-center aligin-items-center"
                style={{ paddingTop: "5rem" }}
            >
                <div class="container text-center">
                    <h1 className="display-1 text-primary text-uppercase">
                        pau
                    </h1>
                    <p className="lead p-2">
                        this is my personal website for fun.
                    </p>
                    <p className="lead p-2">
                        my name is amin havasi .that is my personal website
                        created with react for some fun{" "}
                    </p>
                    <p>
                        <strong>Follow me on social network:</strong>
                    </p>
                    <a
                        href="https://instagram.com"
                        className="btn btn-lg btn-primary m-1"
                    >
                        <i className="fa fa-instagram">Instagram</i>
                    </a>
                    <a
                        href="https://twitter.com"
                        className="btn btn-lg btn-primary "
                    >
                        <i className="fa fa-twitter">twitter</i>
                    </a>
                </div>
            </div>
        );
    }
}

export default Jumbotron;
