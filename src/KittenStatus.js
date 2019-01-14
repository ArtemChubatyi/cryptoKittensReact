import React from 'react';


export default function KittenStatus({ price }) {
    return (
        <div className='kittenCard__status'>
            <i className='icon' />
            <p className='sale'>For sale</p>
            <p className='price'>${price}</p>
        </div>)
}