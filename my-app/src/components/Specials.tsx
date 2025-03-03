import React from "react";
import salad from "../images/action-background.jpg";
import bruschetta from "../images/bruschetta.jpg";
import pasta from "../images/pasta.jpg";

const Specials = () => {
    return (
        <>
        <h1 id="specials">Weekend Specials</h1>
        <section className={"specials"}>
            <section className={"greek-salad-section"}>
                <img src={salad} alt={"salad"}></img>
                <br></br><br></br>
                <h2 id={"greek-salad-head"}> Greek Salad </h2>
                <h3 id={"greek-salad-price"}> $15.99</h3>
                <p id={"greek-salad-desc"}>Refreshing salad, made with tomatoes, feta cheese, <br></br> falafel, and
                    lettuce. Dressed with olive oil.</p>
            </section>
            <section className={"bruschetta-section"}>
                <img src={bruschetta} alt={"bruschetta"}></img>
                <br></br><br></br>
                <h2 id={"bruschetta-head"}> Bruschetta </h2>
                <h3 id={"bruschetta-price"}> $13.99 </h3>
                <p id={"bruschetta-desc"}> Toasted bread, topped with cheese. Seasoned with <br></br>salt and olive oil.
                </p>
            </section>
            <section className={"pasta-section"}>
                <img src={pasta} alt={"pasta"}></img>
                <br></br><br></br>
                <h2 id={"pasta-head"}>Pasta</h2>
                <h3 id={"pasta-price"}>$14.99</h3>
                <p id={"pasta-desc"}>An Italian classic! Cooked with marinara sauce and <br></br> herbs</p>
            </section>
        </section>
        </>
    )
}

export default Specials;