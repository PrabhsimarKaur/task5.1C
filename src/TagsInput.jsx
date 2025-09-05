import { useState } from "react";

// ---------------- TagsInput ----------------
function TagsInput({ tags, setTags }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Add up to 3 tags"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />
    </div>
  );
}

export default TagsInput;