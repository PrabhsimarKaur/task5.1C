import React, { useState } from "react";
import QuestionForm from "./QuestionForm";
import ArticleForm from "./ArticleForm";
import "./MainPage.css";

function MainPage() {
  const [postType, setPostType] = useState("question");

  return (
    <div className="main-container">
      
      <h2>New Post</h2>

      
      <div className="post-type">
        <label>
          <input
            type="radio"
            value="question"
            checked={postType === "question"}
            onChange={() => setPostType("question")}
          />
          Question
        </label>
        <label>
          <input
            type="radio"
            value="article"
            checked={postType === "article"}
            onChange={() => setPostType("article")}
          />
          Article
        </label>
      </div>

     
      <div className="section-header">
        <h4 className="header">What do you want to ask or share</h4>
        <p>
          This section is designed based on the type of the post. It could be
          developed by conditional rendering.{" "} <span className="highlight">
            For post a {postType}, the following section would be appeared.
          </span>
          
        </p>
      </div>

      
      {postType === "question" ? <QuestionForm /> : <ArticleForm />}

      
      <button className="post-btn">Post</button>
    </div>
  );
}

export default MainPage;
