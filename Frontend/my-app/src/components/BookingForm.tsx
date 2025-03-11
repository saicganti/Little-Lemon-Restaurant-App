import React, {useState, useEffect} from "react";
import bookingCycle from "../images/booking-cycle.jpg";

interface BookingFormProps {
    availableTimes: string[];
    dispatch: React.Dispatch<any>;
    submitForm: (formData: any) => void;
}

const BookingForm: React.FC<BookingFormProps> = ({availableTimes = [], dispatch, submitForm}) => {

    const [reserveDate, setReserveDate] = useState('');
    const [reserveTime, setReserveTime] = useState('');
    const [guestNum, setGuestNum] = useState('');
    const [occasion, setOccasion] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        const checkFormValidity = () => {
            return reserveDate && reserveTime && guestNum && occasion;
        };
        // @ts-ignore
        setIsFormValid(checkFormValidity());
    }, [reserveDate, reserveTime, guestNum, occasion]);

    const handleDateChange = (e: { target: { value: any; }; }) => {
        setReserveDate(e.target.value);
        dispatch({type: 'UPDATE_TIMES', payload: e.target.value});
    };

    const handleSubmit = (e: {preventDefault: () => void;}) => {
        e.preventDefault();
        if (isFormValid) {
            const formData = {reserveDate, reserveTime, guestNum, occasion};
            console.log('Form Data:', formData);
            submitForm(formData);
        }
    };

    return (
        <section className={"booking-section"} id={"booking-section"}>
            <img src={bookingCycle} alt={"booking cycle"} id={"bookingCycle"}/>
            <h1 id={"reserve-head"}>Reserve Your Table</h1>
            <br/>
            <form onSubmit={handleSubmit}>
                <label htmlFor="reserveDate" id="reserveDateLabel">Reservation Date</label>
                <input
                    type="date"
                    id="reserveDate"
                    required
                    value={reserveDate}
                    onChange={handleDateChange}
                />
                <br/><br/>

                <label htmlFor="reserveTime" id="reserveTimeLabel">Reservation Time</label>
                <select
                    id="reserveTime"
                    required
                    value={reserveTime}
                    onChange={(e) => setReserveTime(e.target.value)}
                >
                    <option value="" disabled>Select a time</option>
                    {availableTimes.map((availableTime) => (
                        <option key={availableTime} value={availableTime}>
                            {availableTime}
                        </option>
                    ))}
                </select>

                <br/><br/>

                <label htmlFor="guestNum" id="guestNumLabel">Number of Guests</label>
                <input
                    type="number"
                    id="guestNum"
                    placeholder="1"
                    min="1"
                    max="10"
                    required
                    value={guestNum}
                    onChange={(e) => setGuestNum(e.target.value)}
                />
                <br/><br/>

                <label htmlFor="occasion" id="occasionLabel">Occasion</label>
                <select
                    id="occasion"
                    required
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                >
                    <option value="">Select Occasion</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </select>
                <br/><br/>

                <button aria-label="On Click" type="submit" disabled={!isFormValid}>Reserve Table</button>
            </form>
        </section>
    );
}

export default BookingForm;