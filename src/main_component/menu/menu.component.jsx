import React from 'react';
import './menu.styles.scss';
import {data} from './menu.data';
import MenuSection from '../../reuse_component/home/menu_section/menu_section.component';

const Menu = () => {
    return <div className='col-lg-10 menu'>
       <h3 className='menu_title'>Menu</h3>
       <div className='memu_content'>
       {
            data.map(item => <MenuSection key={item.id} items={item}/>)
        }
       </div>
    </div>
}

export default Menu;