import React from 'react';
import Announce from '../../main_component/announce/annouce.component';
import Menu from '../../main_component/menu/menu.component';
import SideBar from '../../main_component/sidebar/sidebar.component';
import './home.styles.scss';
 
const Home = () => {
    return (<div className='container-fluid'>
       <Announce/>
       <div className='row home_contain'>
           <SideBar/>
           <Menu/>
       </div>
    </div>)
}

export default Home;