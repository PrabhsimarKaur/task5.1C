import React from "react";

function ArticleForm() {
  return (
    <div className="form-section">
      <label>Title</label>
      <input type="text" placeholder="Enter a descriptive title" />

      <label>Abstract</label>
      <textarea placeholder="Enter a 1-paragraph abstract" />

      <label>Article Text</label>
      <textarea className = "large"placeholder="Enter the main content of your article" />

      <label>Tags</label>
      <input
        type="text"
        placeholder="Please add up to 3 tags to describe what your article is about e.g., Java"
      />
    </div>
  );
}

export default ArticleForm;
