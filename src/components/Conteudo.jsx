import React from 'react';

const Conteudo = ({ data }) => {
  return (
    <div className="content-item">
      <h3>{data.title}</h3>
      <p>{data.body}</p>
      <span>{data.category}</span>
      <div>{data.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
    </div>
  );
};

export default Conteudo;
