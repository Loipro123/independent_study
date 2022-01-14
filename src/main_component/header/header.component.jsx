import React from 'react';
import Logo from '../../reuse_component/header/logo/logo.component';
import Navigation from '../../reuse_component/header/navigation/navigation.component';
import Search from '../../reuse_component/header/search/search.component';
import './header.styles.scss';

const Header = () => {
    return <div className="header container-fluid">
        <div className='row'>
            <Logo/>
            <Search/>
            <Navigation/>
        </div>
    </div>
}

export default Header;