import React from 'react';
import './KittenStatus.scss';


export default function KittenStatus({ price }) {
    return (
        <div className='kittenCard-status'>
            <i className='kittenCard-status__icon' />
            <p className='kittenCard-status__sale'>For sale</p>
            <p className='kittenCard-status__price'>${price}</p>
        </div>)
}