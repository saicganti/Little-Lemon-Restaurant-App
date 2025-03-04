import React from 'react';
import './App.css';
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import ConfirmedBooking from "./components/ConfirmedBooking";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
    return (
        <>
            <Header/>
            <Nav/>
            <Router>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/confirmation" element={<ConfirmedBooking />} />
                </Routes>
            <Footer/>
            </Router>
        </>
    );
}

export default App;
