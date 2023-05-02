import React from 'react';
import { GalleryImg, Root } from './styles';
import item from '../../../../assets/images/__item.jpg';
import item_1 from '../../../../assets/images/__item-1.jpg';
import item_2 from '../../../../assets/images/__item-2.jpg';
import item_3 from '../../../../assets/images/__item-3.jpg';
import item_4 from '../../../../assets/images/__item-4.jpg';
import item_5 from '../../../../assets/images/__item-5.jpg';
import item_6 from '../../../../assets/images/__item-6.jpg';
import item_7 from '../../../../assets/images/__item-7.jpg';
import item_8 from '../../../../assets/images/__item-8.jpg';
import item_9 from '../../../../assets/images/__item-9.jpg';
import item_10 from '../../../../assets/images/__item-10.jpg';
import item_11 from '../../../../assets/images/__item-11.jpg';
//Импорты вынести в отдельный факл, запихнуть в массив и замапить

const images: Array<string> = [
    item,
    item_1,
    item_2,
    item_3,
    item_4,
    item_5,
    item_6,
    item_7,
    item_8,
    item_9,
    item_10,
    item_11,
];

const Gallery = () => {
    return (
        <Root>
            {images.map((image) => (
                <GalleryImg src={image} />
            ))}
        </Root>
    );
};

export default Gallery;
