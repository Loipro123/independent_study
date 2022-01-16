import React from 'react';
import {ReactComponent as LogoImg} from '../../../asset/logo.svg';
import './logo.styles.scss';

const Logo = () => {
    return <div className='col-md-2 col-2 logo'>
        <LogoImg className='logo_img'/>
    </div>
}

export default Logo;