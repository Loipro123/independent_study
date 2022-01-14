import React from 'react';
import Announce from '../../main_component/announce/annouce.component';
import SideBar from '../../main_component/sidebar/sidebar.component';
import './home.styles.scss';
 
const Home = () => {
    return (<div className='container-fluid'>
       <Announce/>
       <div className='row home_contain'>
           <SideBar/>
           <div className='col-lg-10 home'></div>
       </div>
    </div>)
}

export default Home;