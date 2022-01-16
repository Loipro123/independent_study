import React from 'react';
import MenuCard from '../menu_card/menu_card.component';
import './menu_section.styles.scss';

const MenuSection = ({items}) => {
    console.log(items)
    return <div className='menu_section'>
        <h4 className='section_title'>{items.title}</h4>
        <div className="menu_items">
            {items.items.map(item => <MenuCard key={item.id} item={item}/>)}
        </div>
    </div>
}

export default MenuSection;