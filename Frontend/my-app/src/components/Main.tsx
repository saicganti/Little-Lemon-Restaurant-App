import React, {useState, useReducer} from "react";
// @ts-ignore
import { submitAPI } from './api';
import { fetchAPI } from "./api";
import CallToAction from "./CallToAction";
import Specials from "./Specials"
import About from "./About";
import BookingForm from "./BookingForm";;

/* Used ts ignore at some places as TS interferes with app flow sometimes*/


// Used to initialize booking times when app starts
export const initializeTimes = () => {
    const today = new Date().toISOString().split('T')[0];
    return fetchAPI(today);
}

// Updates times in accordance with user selection, essentially updating state.
export const updateTimes = (state: any, action: {
    payload: any;
    type: any; }) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            const date = new Date(action.payload).toISOString().split('T')[0];
            return fetchAPI(date);
        default:
            return state;
    }
};


const Main: React.FC = () => {

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

    // The logic for submitting form. Logs a message to console, and then directs to the confirmed-booking page.
    const submitForm = (formData: any) => {
        console.log('Submitting form...');
        if (submitAPI(formData)) {
            console.log('Navigation to confirmation...');
            window.location.href = '/confirmation';
        } else {
            alert('Failed to submit the booking. Please try again.');
        }
    };

    return (
        <main>
            <CallToAction/>
            <Specials/>
            <About/>
            <BookingForm
                availableTimes={availableTimes}
                dispatch={dispatch} submitForm={submitForm}
            />
        </main>
    )
}

export default Main;