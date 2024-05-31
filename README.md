# React Custom DatePicker

## Description
A React component for date and time picking, inspired by a jQuery datepicker plugin.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/Ambre972ppm/react-custom-datepickerspo
    ```

2. Navigate to the project directory:
    ```sh
    cd react-custom-datepicker
    ```

3. Install the dependencies:
    ```sh
    npm install
    ```

## Usage

To use the `DateTimePicker` component in your project, follow these steps:

1. Import the `DateTimePicker` component and its CSS:
    ```jsx
    import React, { useState } from 'react';
    import DateTimePicker from './src/DateTimePicker/DateTimePicker';
    import './src/DateTimePicker/DateTimePicker.css';
    ```

2. Use the component in your React application:
    ```jsx
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
        </div>
      );
    };

    export default App;
    ```

## Documentation

To generate the documentation, run:
```sh
npm run doc
