import React from 'react';
// import {NavLink} from 'react-router-dom'

export default function Header() {
    return (
        <div className="header">
            <div className="container">
                <nav className="navbar navbar-expand-sm">
                    <a to="/home" className="navbar-brand">
                        <img src="./img/logo.png" alt="" />
                    </a>
                </nav>
            </div>
        </div>
    )
}
