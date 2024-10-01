import React, { useState } from 'react';
import Comment from './Comment';

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim()) {
      setComments([...comments, commentText]);
      setCommentText('');
    }
  };

  return (
    <div>
      <h3>Comentários</h3>
      <form onSubmit={handleCommentSubmit}>
        <input
          type="text"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Escreva um comentário..."
        />
        <button type="submit">Comentar</button>
      </form>
      <div>
        {comments.map((comment, index) => (
          <Comment key={index} text={comment} />
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
