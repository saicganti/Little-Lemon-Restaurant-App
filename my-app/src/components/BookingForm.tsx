import React, {useState} from "react";
import bookingCycle from "../images/booking-cycle.jpg";

// @ts-ignore
const BookingForm = ({availableTimes: availableTimes, dispatch, submitForm}) => {

    const [reserveDate,setReserveDate] = React.useState('');
    const [reserveTime,setReserveTime] = React.useState('');
    const [guestNum,setGuestNum] = React.useState('');
    const [occasion,setOccasion] = React.useState('');

    const handleDateChange = (e: { target: { value: any; }; }) => {
        setReserveDate((e.target.value))
        dispatch({ type: 'UPDATE_TIMES', payload: e.target.value });
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const formData = { reserveDate,reserveTime,guestNum,occasion};
        console.log('Form Data:', formData);
        submitForm(formData);
    };

    return (
        <section className={"booking-section"}>
            <img src={bookingCycle} alt={"booking cycle"} id={"bookingCycle"}></img>
            <h1 id={"reserve-head"}>Reserve Your Table</h1>
            <br></br>
            <form onSubmit = {handleSubmit}>
                <label htmlFor={"reserveDate"} id={"reserveDateLabel"}>Reservation Date</label>
                <input type={"date"} id={"reserveDate"} onChange={(e) => setReserveDate(e.target.value)}></input>
                <br></br><br></br>
                <label htmlFor={"reserveTime"} id={"reserveTime"}>Reservation Time</label>
                <select id={"reserveTime"} onChange={(e) => setReserveTime(e.target.value)}>
                    {availableTimes.map((availableTime: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined, index: React.Key | null | undefined) => (
                        <option key={index}>
                            {availableTime}
                        </option>
                    ))}
                </select>
                <br></br><br></br>
                <label htmlFor={"guestNum"} id={"guestNumLabel"}>Number of Guests</label>
                <input type={"number"} id={"guestNum"} placeholder={"1"} min={"1"} max={"10"}
                       onChange={(e) => setGuestNum(e.target.value)}></input>
                <br></br><br></br>
                <label htmlFor={"occasion"} id={"occasion"}>Occasion</label>
                <select id={"occasion"} onChange={(e) => setOccasion(e.target.value)}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <br></br><br></br>
                <button type={"submit"}>Reserve Table</button>
            </form>
        </section>
    )
}

export default BookingForm;