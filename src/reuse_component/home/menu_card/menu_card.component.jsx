import React from 'react';
import './menu_card.styles.scss';

const MenuCard = ({item}) => {
    const {urlImage,name} = item;
    return <div className='sub_mainItems'>
         <div className='sub_box'>
            <img src={urlImage} alt={name} className='subImage'/>
            <div className='box_opacity'></div>
         </div>
        <h3 className='sub_title'>{name}</h3>
    </div>
}

export default MenuCard;