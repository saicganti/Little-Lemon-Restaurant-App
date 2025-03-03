import React from "react";
import footerLogo from "../images/little-lemon-footer.png"

const Footer = () => {
    return (
        <footer className="footer">
            <img src={footerLogo} alt={"footer logo"}></img>
            <section className={"footer-sec"}>
            <h3 id={"footer1-head"}>Document Navigation</h3>
            <h3 id={"footer2-head"}>Contact</h3>
            <br></br>
                <p id={"footer1-bullet"}>Home <br></br> Menu <br></br>About <br></br>Reserve</p>
                <p id={"footer2-bullet"}>Address<br></br>Phone<br></br>Email</p>
            </section>
        </footer>
    )
}

export default Footer;