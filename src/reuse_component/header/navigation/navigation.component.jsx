import React from 'react';
import './navigation.styles.scss';
import {ReactComponent as ShoppingCart} from '../../../asset/shopping-bag.svg';

const Navigation = () => {
    return <div className='col-md-3 col-3 navigation'>
      <div className='navigation_item'>Menu</div>
      <div className='navigation_item'>Log In</div>
      <div className='navigation_item navigation_item1'>
          <ShoppingCart className='shopping_car'/>
          <span className='num_car'>0</span>
      </div>
    </div>
}

export default Navigation;