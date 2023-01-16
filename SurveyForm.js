import React, { useState } from 'react';

const SurveyForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // perform submit logic here
    alert(`Thank you ${name} for your feedback: ${feedback}`);
    setName("");
    setEmail("");
    setFeedback("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Customer Survey</h1>
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <label>
        Feedback:
        <textarea value={feedback} onChange={handleFeedbackChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default SurveyForm;
