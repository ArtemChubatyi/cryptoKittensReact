import React, { Component } from 'react';
import KittenStatus from '../KittenStatus/KittenStatus';
import KittenDetails from '../KittenDetails/KittenDetails';
import './Kitten.scss';

class Kitten extends Component {
    render() {
        const { kitten } = this.props;
        const getBgColor = () => {
            function hashCode(stringValue) {
                var hash = 0, i, chr;
                if (stringValue.length === 0) return hash;
                for (i = 0; i < stringValue.length; i++) {
                    chr = stringValue.charCodeAt(i);
                    hash = ((hash << 5) - hash) + chr;
                    hash |= 0; // Convert to 32bit integer
                }
                return hash;
            }
            const colors = [
                '#eee9e8',
                '#faeefa',
                '#faeefa',
                '#fae1ca',
                '#c5eefa',
                '#efe1da',
                '#d9f5cb',
                '#dbf0d0',
                '#e5e7ef',
                '#fde9e4',
                '#e5f3e2'
            ]
            const hashNumber = Math.abs(hashCode(kitten.name));
            const arrayNumber = hashNumber % colors.length;
            const kittenBgColor = colors[arrayNumber];

            return kittenBgColor;
        }
        let currentBgColor = getBgColor();
        let styles = {
            background: {
                background: currentBgColor
            }
        };

        const { name, category, price, img_url, id } = kitten;

        return (
            <div className='kittenCard'>
                <div className='kittenCard__main' style={styles.background}>
                    <div className='kittenCard__main-container'>
                        <div className='kittenCard__image-container'>
                            <img className='kittenCard__image' src={img_url} alt={id}></img>
                        </div>
                        <KittenStatus price={price} />
                    </div>
                </div>
                <KittenDetails name={name} category={category} />
            </div >
        );
    }
}

export default Kitten;