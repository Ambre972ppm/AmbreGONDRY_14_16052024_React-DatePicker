import React, { useState, useEffect } from 'react';
import './DateTimePicker.css';

/**
 * DateTimePicker component
 * @param {object} props - The properties object
 * @param {string} props.label - The label for the date picker
 * @param {Date} props.selected - The selected date
 * @param {function} props.onChange - The function to call when the date changes
 * @param {string} props.id - The id for the date picker
 * @param {boolean} [props.showTimeSelect=true] - Whether to show time selection
 * @param {string} [props.dateFormat="yyyy-MM-dd'T'HH:mm"] - The format of the date
 */
const DateTimePicker = ({ label, selected, onChange, id, showTimeSelect = true, dateFormat = "yyyy-MM-dd'T'HH:mm" }) => {
  const [date, setDate] = useState(selected);

  useEffect(() => {
    setDate(selected);
  }, [selected]);

  const handleChange = (event) => {
    const newDate = new Date(event.target.value);
    setDate(newDate);
    onChange(newDate);
  };

  return (
    <div className="datetime-picker">
      <label htmlFor={id}>{label}</label>
      <input
        type="datetime-local"
        id={id}
        value={date ? date.toISOString().slice(0, 16) : ''}
        onChange={handleChange}
        className="form-control"
      />
    </div>
  );
};

export default DateTimePicker;
