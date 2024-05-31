import React, { useState } from 'react';
import DateTimePicker from '../src/DateTimePicker/DateTimePicker';
import '../src/DateTimePicker/DateTimePicker.css';

const App = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div>
      <h1>DateTimePicker Demo</h1>
      <DateTimePicker
        label="Select Date and Time"
        selected={selectedDate}
        onChange={setSelectedDate}
      />
      {selectedDate && <p>Selected Date: {selectedDate.toString()}</p>}
    </div>
  );
};

export default App;
