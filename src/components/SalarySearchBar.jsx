import React, { useState, useEffect } from 'react';

export default function SalarySearchBar() {
  const [salaryText, setSalaryText] = useState('');

  const handleChange = (event) => {
    const userInput = event.target.value;
    setSalaryText(userInput);
    console.log(userInput);
  };

  return (
    <div className="mx-1">
      <input
        id="salary-search"
        className="form-control"
        placeholder="Min. Salary"
        value={salaryText}
        onClick={() => {
          console.log('Input clicked');
        }}
        onChange={handleChange}
      />

    </div>
  );
}
