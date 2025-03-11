import React from "react";
import littlelemonlogo from "../images/Little Lemon Logo.jpg";

const Header = () => {
    return (
        <header className="App-header" id={"header"}>
            <img src={littlelemonlogo} alt={"little lemon logo"}></img>
        </header>
    )
}

export default Header;