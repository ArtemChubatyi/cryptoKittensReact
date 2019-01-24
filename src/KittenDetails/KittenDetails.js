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
    } else if (cooldown < 9) {
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

                <div className='kittenCard__details-category'>
                    <svg className="details-icon" width="16" height="16" viewBox="0 0 16 16"><g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g stroke="#c4c3c0" strokeWidth="1.5"><path strokeLinecap="round" d="M12 1c0 7.019-8 6.282-8 14M4 1c0 7.019 8 6.282 8 14"></path><path strokeLinecap="square" d="M5 2.5h6M5 13h6M6 5h4M6 10.5h4"></path></g></g></svg>
                    Gen {gen}
                </div>
                <div className='kittenCard__details-category'>
                    <svg className="details-icon" width="16" height="16" viewBox="0 0 16 16"><g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g stroke="#c4c3c0" strokeWidth="1.5"><circle cx="8" cy="8" r="6.25"></circle><path strokeLinecap="round" strokeLinejoin="round" d="M8 4.5v4.031h3.028"></path></g></g></svg>
                    {category}</div>

            </div>
        </div>
    )
}