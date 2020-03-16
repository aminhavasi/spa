import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getPostCount } from './../../services/postService';
class Navbar extends Component {
    state = {
        postCount: ''
    };
    async componentDidMount() {
        const { data: postCount } = await getPostCount();
        this.setState({ postCount: postCount.count });
    }
    render() {
        return (
            <nav className="navbar  bg-dark navbar-dark fixed-top flex d-flex">
                <a className="navbar-brand text-white">hello amin</a>
                <p className="mr-auto my-auto" style={{ color: 'white' }}>
                    posts number:
                    <span className="badge badge-primary badge-pill m-1">
                        {this.state.postCount}
                    </span>
                </p>

                <ul className="navbar-nav px-3">
                    <li className="nav-item text-nowrap">
                        <Link className="nav-link" to="/admin/logout">
                            exit
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }
}
export default Navbar;
