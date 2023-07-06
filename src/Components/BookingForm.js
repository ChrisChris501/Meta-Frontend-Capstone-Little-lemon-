import React from "react";
import {useState} from "react"; 
import '../Styles/BookingForm.css'

const BookingForm = () => {

    const [formData, setFormData] = useState({
        date: "",
        time: "17:00",
        guests: 0,
        occasion: "Birthday",
    })

    const [availableTimes] = useState(['17:00', '18:00', '19:00', '20:00']);

    const handleChange = (event) => {
        setFormData(()=>({
            ...formData,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Reservation Successful!");
    }

    return (
    <div id="formContainer">
        <img className="formImage"
            height = {90}
            width = {140}
            src={require("../assets/restaurant.jpg")}
            alt="Little Lemon Page"
            />
        <form onSubmit={handleSubmit} className="form">
                <label htmlFor="name">Full Name</label>
                <input type="text"
                    placeholder="First and Last name"
                    name="name"
                    required
                    minLength={3}
                    onChange={handleChange}
                />
                <span className="non-valid"></span>
            <label htmlFor="res-date">Choose date</label>
            <input type="date"
            id="res-date"
            required
            onChange={handleChange}/>
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" required>
                {availableTimes.map((time) => (
                <option key={time}>{time}</option>
                ))}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number"
            placeholder="1"
            min="1"
            max="15"
            id="guests"
            required
            onChange={handleChange}
            />
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion"
             required
             onChange={handleChange}
            >
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Engagement</option>
          <option>Other</option>
            </select>
            <input type="submit" value="Make Your reservation"/>
        </form>
        </div>
        )
    }

export default BookingForm;