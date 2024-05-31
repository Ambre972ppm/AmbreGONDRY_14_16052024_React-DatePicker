import React from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DateTimePicker.css';

/**
 * DateTimePicker component
 * @param {object} props - The properties object
 * @param {string} props.label - The label for the date picker
 * @param {Date} props.selected - The selected date
 * @param {function} props.onChange - The function to call when the date changes
 * @param {string} props.id - The id for the date picker
 * @param {boolean} [props.showTimeSelect=true] - Whether to show time selection
 * @param {string} [props.dateFormat="MMMM d, yyyy h:mm aa"] - The format of the date
 */
const DateTimePicker = ({ label, selected, onChange, id, showTimeSelect = true, dateFormat = "MMMM d, yyyy h:mm aa" }) => {
  return (
    <div className="datetime-picker">
      <label htmlFor={id}>{label}</label>
      <ReactDatePicker
        selected={selected}
        onChange={onChange}
        showTimeSelect={showTimeSelect}
        dateFormat={dateFormat}
        id={id}
        className="form-control"
      />
    </div>
  );
};

export default DateTimePicker;
