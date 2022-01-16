import React from 'react';
import './sidebar_item.styles.scss';

const SidebarItem = ({items}) => {
    return <div className='sidebar_item'>
        <span className='item_title'>{items.title}</span>
        {
            items.items.map(item => (<a href={item.url} key={item.id} className='item_sub'>{item.name}</a>))
        }
    </div>
}

export default SidebarItem;