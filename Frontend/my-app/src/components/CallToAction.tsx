import React from "react";

const navigateToSection = (sectionId: string) => () =>{
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({behavior: "smooth"});
    }
};

const CallToAction = () => {
    return (
        <section className="CallToAction">
            <br></br><br></br>
            <h1>LIMITED TIME OFFER! UPTO 50% OFF</h1>
            <br></br>
            <p>Get up to 50% off on select items this weekend.</p>
            <p>Reserve your table now! {"=>"} <button aria-label="On Click" className={"reserveButton"} onClick={navigateToSection("booking-section")}>Reserve a Table</button> </p>
            <br></br>
            <p>Note: Offer ends March 9</p>
        </section>
    )
}

export default CallToAction;