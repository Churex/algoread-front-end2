import React, { useState } from 'react';
import LikeButton from './LikeButton';
import CommentSection from './CommentSection';

const Post = () => {
  const [likes, setLikes] = useState(0);

  const handleLikeToggle = (isLiked) => {
    setLikes((prev) => (isLiked ? prev + 1 : prev - 1));
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', margin: '16px' }}>
      <h2>Título do post</h2>
      <p>Faça comentários aqui...</p>
      <LikeButton onLikeToggle={handleLikeToggle} />
      <p>{likes} curtidas</p>
      <CommentSection />
    </div>
  );
};

export default Post;
