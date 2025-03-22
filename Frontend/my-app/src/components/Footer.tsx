import React from "react";
import footerLogo from "../images/little-lemon-footer.png"

/*
Used href attribute rather than JS, since it is only a single-page application.
 */

const Footer = () => {
    return (
        <footer className="footer">
            <img src={footerLogo} alt={"footer logo"}></img>
            <section className={"footer-sec"}>
            <h3 id={"footer1-head"}>Document Navigation</h3>
            <h3 id={"footer2-head"}>Contact</h3>
            <br></br>
                <p id={"footer1-bullet"}>
                    <a href={"#header"}>Home</a> <br></br>
                    <a href={"#specials"}>Menu</a> <br></br>
                    <a href={"#about"}>About</a> <br></br>
                    <a href={"#booking-section"}>Reserve</a>
                </p>
                <p id={"footer2-bullet"}>
                    <a href={"#about"}>Address</a><br></br>
                    <a href={"#about"}>Phone<br></br></a>
                    <a href={"#about"}>Email</a>
                </p>
            </section>
        </footer>
    )
}

export default Footer;