import React from "react";
import BookingForm from './BookingForm';
import '../Styles/BookingForm.css'

const BookingPage  = () => {
    return (
        <>
            <div className="welcome">
                <h1>Welcome to the reservation page</h1>
                <p>Please, fill out the form below to make a booking:</p>
            </div>
            <BookingForm />
        </>

    )
}




export default BookingPage;