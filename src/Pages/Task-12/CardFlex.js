import React from 'react';
import Card from '../Task-12/Card';
import img1 from '../../assets/Images/butterfly-1.jpg'
import img2 from '../../assets/Images/butterfly-2.jpg'
import img3 from '../../assets/Images/butterfly-3.jpg'

const CardFlex = () => {
  const cardData = [
    {
      id: 1,
      title: 'Card 1',
      description: 'This is the description for card 1.',
      image: {
        src: img1
      },
    },
    {
      id: 2,
      title: 'Card 2',
      description: 'This is the description for card 2.',
      image: {
        src: img2
      },
    },
    {
      id: 3,
      title: 'Card 3',
      description: 'This is the description for card 3.',
      image: {
        src: img3
      },
    },
  ];

  return (
    <div className='container d-flex justify-content-center flex-row'>
      {cardData.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          description={card.description}
          image={card.image}
        />
      ))}
    </div>
  );
};

// const styles = {
//   container: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//   },
// };

export default CardFlex;