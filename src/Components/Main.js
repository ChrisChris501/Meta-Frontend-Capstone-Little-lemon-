import React, { useState } from 'react';
import BookingForm from './BookingForm'

function Main () {
    const [availableTimes, setAvailableTimes] = useState(['17:00', '18:00', '19:00', '20:00']);

    return (
        <div>
          <BookingForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} />
        </div>
      );
}


export default Main;
