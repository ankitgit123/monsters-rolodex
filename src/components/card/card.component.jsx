
import React, { Component } from 'react';
import './card.styles.css';

export const Card = props => (

    <div className='card-cotainer'>
        <img 
            alt='monster'
            src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
        />

        <h2>{props.monster.name}</h2>
        <p>{props.monster.email}</p>

    </div>


);