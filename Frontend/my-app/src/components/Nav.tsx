import React from "react";

/*
Used href here too, once again no multiple webpages means no need for separate JavaScript
 */

const Nav = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><a href={"#header"}>Home</a></li>
                <li><a href={"#specials"}>Menu</a></li>
                <li><a href={"#booking-section"}>Reserve</a></li>
                <li><a href={"#about"}>About</a></li>
            </ul>
        </nav>
    )
}

export default Nav;