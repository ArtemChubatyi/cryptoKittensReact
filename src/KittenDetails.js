import React from 'react';


export default function KittenStatus({ name, category }) {
    return (
        <div className='kittenCard__details'>
            <div className='kittenCard__details-header'>
                <div className='kittenCard__details-name'>{name}</div>
                <div className='like'></div>
            </div>
            <div className='kittenCard__details-stats'>
                <i className='kittenCard__details-icon' />
                <div className='kittenCard__details-category'>{category}</div>
            </div>
        </div>
    )
}