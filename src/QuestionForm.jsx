import React from "react";

function QuestionForm() {
  return (
    <div className="form-section">
      <label>Title</label>
      <input
        type="text"
        placeholder="Start your question with how, what, why, etc."
      />

      <label>Describe your problem</label>
      <textarea className="large" placeholder="Describe your problem" />

      <label>Tags</label>
      <input
        type="text"
        placeholder="Please add up to 3 tags to describe what your question is about e.g., Java"
      />
    </div>
  );
}

export default QuestionForm;
