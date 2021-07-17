import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Sevices!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Wherever the art of medicine is loved, there is also a love of humanity. '
              label='Hospital'
              path='/about'
            />
            <CardItem
              src='images/img-2.jpg'
              text='All doctors treat, but a good doctor lets nature heal.'
              label='Doctor'
              path='/about'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='We love to see you safe with a smile'
              label='Patient'
              path='/about'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Labs that love to give the rebirth'
              label='Laboratory'
              path='/about'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Next to creating a life, the finest thing a man can do is save one'
              label='Ambulance'
              path='/about'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
