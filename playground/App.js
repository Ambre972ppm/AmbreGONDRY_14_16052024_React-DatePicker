import React, { useState } from 'react';
import DateTimePicker from '../src/DateTimePicker/DateTimePicker';

const App = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div>
      <h1>React Custom DateTimePicker</h1>
      <DateTimePicker
        label="Select Date and Time"
        selected={selectedDate}
        onChange={date => setSelectedDate(date)}
      />
    </div>
  );
};

export default App;
