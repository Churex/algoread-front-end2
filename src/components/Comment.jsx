import React from 'react';

const Comment = ({ text }) => {
  return (
    <div style={{ margin: '8px 0', border: '1px solid #eee', padding: '8px' }}>
      <p>{text}</p>
    </div>
  );
};

export default Comment;
