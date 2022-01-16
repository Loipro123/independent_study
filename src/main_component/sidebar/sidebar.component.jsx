import React from 'react';
import SidebarItem from '../../reuse_component/home/sidebar_item/sidebar_item.component';
import {data} from '../menu/menu.data';
import './sidebar.styles.scss';



const  SideBar = () => {
    return <div className='col-lg-2 sidebar'>
        {
            data.map(item => <SidebarItem key={item.id} items={item}/>)
        }
        <div className='border_sidebar'></div>
    </div>
}

export default SideBar;