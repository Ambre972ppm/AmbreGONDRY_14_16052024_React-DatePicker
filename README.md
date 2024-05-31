
## Installation

To install the component, use npm:

```sh
npm install react-custom-datepicker
```

OR

```sh
yarn add react-custom-datepicker
```

## Usage
### Basic Example
Import the DateTimePicker component and its styles into your React application:

```jsx
import React, { useState } from 'react';
import DateTimePicker from 'react-custom-datepicker';
import 'react-custom-datepicker/dist/DateTimePicker.css';

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

```

### Options 

You can customize the component with the following properties:

* label (string): The label for the date picker. 
* selected (Date): The selected date.
* onChange (function): The function to call when the date changes.
* id (string): The id for the date picker.
* showTimeSelect (boolean, default: true): Whether to show time selection.
* dateFormat (string, default: "MMMM d, yyyy haa"): The format of the date.

### Examples
#### DatePicker
```jsx
<DateTimePicker
  label="Date Picker"
  selected={selectedDate}
  onChange={setSelectedDate}
/>
```

#### TimePicker
```jsx
<DateTimePicker
  label="Time Picker"
  selected={selectedDate}
  onChange={setSelectedDate}
  showTimeSelect
  dateFormat="h:mm aa"
/>
```

### Options to Highlight Specific Dates or Periods 
You can use the `highlightDates` prop to highlight specific dates:
```jsx
<DateTimePicker
  label="Special Dates"
  selected={selectedDate}
  onChange={setSelectedDate}
  highlightDates={[
    { "react-datepicker__day--highlighted": [new Date("2023-12-25"), new Date("2024-01-01")] },
  ]}
/>
```

## JS Build Help

### Requirements
This project requires Node.js and npm. Download and install Node.js.

### Installing Dependencies
Install npm dependencies:
```sh
npm install
```

### Building
To build the production files:
```sh
npm run build
```

### Generated Files Structure
When the build is complete, you will have the following files:

* `dist/react-custom-datepicker.js` - browser file
* `dist/react-custom-datepicker.min.js` - minified browser file
* `dist/react-custom-datepicker.css` - styles file

## Contribution
Contributions are welcome! Please submit pull requests or open issues on GitHub.

## License
This project is licensed under the ISC License.

## Conversion Explanation
The conversion from the jQuery plugin to a React component involved the following steps:

### Replacing jQuery APIs with React APIs
* Using React hooks (`useState`, `useEffect`) to manage state and side effects.
* Utilizing `react-datepicker` to provide the date and time picking functionality, replacing the original jQuery plugin.

### Component Structure
* The `DateTimePicker` component encapsulates the date and time picking logic.
* Props are used to customize the component's behavior (e.g., showing or hiding the time selection).

### Styles
* CSS styles were adapted to match the desired appearance of the component.
* Using CSS classes to style the date and time picker.

### Development Environment Configuration
* Using Webpack to bundle the JavaScript and CSS files.
* Using Babel to transpile JSX and ES6 code to browser-compatible JavaScript.

### Documentation
* Using JSDoc to generate detailed documentation of the component's properties and usage.
* Creating a comprehensive README to guide users on installation, usage, and contribution to the project.
* This conversion allows the date and time picker to be used effectively in React applications, leveraging React's modern features and syntax.
