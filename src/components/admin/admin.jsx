import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../../css/style.css';
import getAdminNavLink from './../../services/navAdminLink';

class MainAdmin extends Component {
    render() {
        const adminNavLinks = getAdminNavLink();
        return (
            <div className="mt-3 p-5">
                <div className="container-fluid text-center">
                    <h2 className="bg-dark text-white">
                        welcome to main admin page
                    </h2>
                </div>
            </div>
        );
    }
}
export default MainAdmin;
