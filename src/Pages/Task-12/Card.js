import React from 'react';

const Card = ({ title, description, image }) => {
  return (
    <div className='border border-1 rounded p-2 m-3 text-center shadow-md' style={{width : "200px"}}>
      <img src={image.src} style={{width : "100%"}}  className='rounded-2'/>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;