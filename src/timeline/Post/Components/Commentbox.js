import React, { useState } from 'react';

function CommentBox({ postId, onAddComment }) {
  const [comment, setComment] = useState('');

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = () => {
    if (comment.trim() !== '') {
      onAddComment(postId, comment);
      setComment('');
    }
  };

  return (
    <div className="comment-box">
      <textarea
        placeholder="Add a comment..."
        value={comment}
        onChange={handleCommentChange}
      />
      <button onClick={handleSubmit}>Post</button>
    </div>
  );
}

export default CommentBox;
