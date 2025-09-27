import React, { useState } from "react";
function Onchange() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [ischecked, setIsChecked] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [radioOption, setRadioOption] = useState("");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleAgeChange(event) {
    setAge(event.target.value);
  }
  function handleRadioChange(event) {
    setRadioOption(event.target.value);
  }

  return (
    <div>
      <input
        type="text"
        onChange={handleNameChange}
        placeholder="Type your name..."
      />
      <textarea onChange={handleNameChange} placeholder="Type your name..." />
      <input
        type="number"
        onChange={handleAgeChange}
        placeholder="Type your age..."
      />
      <input
        type="checkbox"
        className="m-2 w-4 h-4"
        onChange={() => setIsChecked(!ischecked)}
      />
      <select
        name="options"
        onChange={(e) => setSelectedOption(e.target.value)}
        id=""
      >
        <option value="">Select an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <label className="ml-4">Option 1</label>
      <input
        className="ml-2"
        type="radio"
        name="options"
        value="option1"
        onChange={(event) => setRadioOption(event.target.value)}
      />
      <label className="ml-4">Option 2</label>
      <input
        className="ml-2"
        type="radio"
        name="options"
        value="option2"
        onChange={(event) => setRadioOption(event.target.value)}
      />

      <p>You typed: {name}</p>
      <p>Your age is: {age}</p>
      <p>{ischecked ? "Checkbox is checked" : "Checkbox is not checked"}</p>
      <p>Selected option: {selectedOption}</p>
      <p>Selected radio option: {radioOption}</p>
    </div>
  );
}
export default Onchange;
