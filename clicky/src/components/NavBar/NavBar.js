import React from "react";
import "./NavBar.css";

const NavBar = props => (
    <nav class="navbar">
        <ul>
            <li class="brand">
                <a href="/">Clicky Game</a>
            </li>
            <li class="">You guessed incorrectly!</li>
            <li>Score: 0 | Top Score: 12</li>
        </ul>
    </nav>
);

export default NavBar;

