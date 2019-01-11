import React from 'react';
import Kitten from './Kitten';



export default function KittensList({ kittens }) {
    const kittensElements = kittens.map(element =>
        <Kitten key={element.id} kitten={element} />
    )
    return kittensElements;
}