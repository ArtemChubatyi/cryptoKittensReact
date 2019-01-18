import React from 'react';
import './KittenDetails.scss';


export default function KittenStatus({ name, gen, cooldown }) {
    let category;
    if (cooldown < 2) {
        category = 'Fast';
    } else if (cooldown < 3) {
        category = 'Swift';
    } else if (cooldown < 5) {
        category = 'Snappy';
    } else if (cooldown < 7) {
        category = 'Brisk';
    } else if (cooldown < 10) {
        category = 'Plodding';
    } else if (cooldown < 11) {
        category = 'Slow';
    } else if (cooldown < 13) {
        category = 'Sluggish';
    } else if (cooldown >= 13) {
        category = 'Catatonic';
    }
    return (
        <div className='kittenCard__details'>
            <div className='kittenCard__details-header'>
                <div className='kittenCard__details-name'>#{name}</div>
                <div className='like'></div>
            </div>
            <div className='kittenCard__details-stats'>
                <i className='kittenCard__details-icon' />

                <div className='kittenCard__details-category'>Gen {gen}</div>
                <div className='kittenCard__details-category'>{category}</div>

            </div>
        </div>
    )
}