import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-info">
                    <div className="container-fluid">
                        <Link className="navbar-brand text-light" to="/">NewsMonkey</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item"><Link className="nav-link text-light" aria-current="page" to="/">Home</Link></li>
                                <li className="nav-item"><Link className="nav-link text-light" to="/business">Business</Link></li>
                                <li className="nav-item"><Link className="nav-link text-light" to="/entertainment">Entertainment</Link></li>
                                <li className="nav-item"><Link className="nav-link text-light" to="/general">General</Link></li>
                                <li className="nav-item"><Link className="nav-link text-light" to="/health">Health</Link></li>
                                <li className="nav-item"><Link className="nav-link text-light" to="/science">Science</Link></li>
                                <li className="nav-item"><Link className="nav-link text-light" to="/sports">Sports</Link></li>
                                <li className="nav-item"><Link className="nav-link text-light" to="/technology">Technology</Link></li>

                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">General</Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/business"></Link>Business</li>
                                        <li><Link className="dropdown-item" to="/entertainment">Entertainment</Link></li>
                                        <li><Link className="dropdown-item" to="/general"></Link>General</li>
                                        <li><Link className="dropdown-item" to="/health">Health</Link></li>
                                        <li><Link className="dropdown-item" to="/science"></Link>Science</li>
                                        <li><Link className="dropdown-item" to="/sports">Sports</Link></li>
                                        <li><Link className="dropdown-item" to="/technology">Technology</Link></li>
                                    </ul>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
        )
    }
}
