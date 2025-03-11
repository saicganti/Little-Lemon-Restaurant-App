import React, {useState, useReducer} from "react";
// @ts-ignore
import { submitAPI } from './api';
import { fetchAPI } from "./api";
import CallToAction from "./CallToAction";
import Specials from "./Specials"
import About from "./About";
import BookingForm from "./BookingForm";;


export const initializeTimes = () => {
    const today = new Date().toISOString().split('T')[0];
    return fetchAPI(today);
}


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