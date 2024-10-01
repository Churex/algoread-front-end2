import React, { useState } from 'react';

const LikeButton = ({ onLikeToggle }) => {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked((prev) => !prev);
    onLikeToggle(!liked);
  };

  return (
    <button onClick={handleClick}>
      {liked ? 'Descurtir' : 'Curtir'}
    </button>
  );
};

export default LikeButton;
