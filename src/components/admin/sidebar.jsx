import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../../css/style.css';
import getAdminNavLink from './../../services/navAdminLink';

class Sidebar extends Component {
    render() {
        const adminNavLinks = getAdminNavLink();
        return (
            <div style={{ direction: 'rtl' }}>
                <nav className="col-md-2 d-none d-md-block bg-dark  sidebar ">
                    <hr style={{ border: '1px solid yellow' }} />
                    <div className="sidebar-sticky">
                        <ul className="nav " style={{ paddingRight: '0' }}>
                            {adminNavLinks.map(nav => (
                                <li className="nav-item " key={nav.id}>
                                    <Link
                                        className="nav-link text-white"
                                        style={{ textAlign: 'right' }}
                                        to={nav.link}
                                    >
                                        <span className={nav.icon} />
                                        <span className="m-2 ">{nav.text}</span>
                                    </Link>
                                    <hr className="shadow" />
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}
export default Sidebar;
