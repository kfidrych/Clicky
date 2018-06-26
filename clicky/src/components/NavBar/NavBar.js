import React from "react";
import "./NavBar.css";

const NavBar = props => (
    <nav className="navbar">
        <ul>
            <li className="brand">
                <a href="/">Clicky Game</a>
            </li>
            <li className="">{props.guess}</li>
            <li>Score: {props.score} | Top Score: {props.highscore}</li>
        </ul>
    </nav>
);

export default NavBar;

