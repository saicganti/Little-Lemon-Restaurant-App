import React from 'react';
import './App.css';
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import ConfirmedBooking from "./components/ConfirmedBooking";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

/*
This is a frontend app in React and TypeScript for a fictional Mediterranean restaurant named Little Lemon. It has 9 components including a header, footer, navbar, call-to-action,
and a menu. The main feature of the app is a component for booking a reservation.
A backend will be built separately and integrated into the Git repo.
*/

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
