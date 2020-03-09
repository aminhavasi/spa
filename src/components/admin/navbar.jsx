import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar  bg-dark navbar-dark fixed-top">
                <a className="navbar-brand text-white">hello amin</a>
                <p className="mt-auto" style={{ color: 'white' }}>
                    posts number:
                    <span className="badge badge-primary badge-pill m-1">
                        {' '}
                        20
                    </span>
                </p>
                <p className="mt-auto" style={{ color: 'white' }}>
                    course number:
                    <span className="badge badge-primary badge-pill m-1">
                        {' '}
                        5
                    </span>
                </p>
                <ul className="navbar-nav px-3">
                    <li className="nav-item text-nowrap">
                        <Link className="nav-link" to="/home">
                            exit
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }
}
export default Navbar;
