import React from 'react';
import './footer_privacy.styles.scss';

const FooterPrivacy = ({items}) => {
    return <div className='row'>
        <div className="col-md-12 footer_privacy">
            {
                items.map(item=> <h6 key={item.id} className={`${item.first==true ? 'privacy_item1' : 'privacy_item'}`}>{item.title}</h6>)
            }
        </div>
    </div>
}

export default FooterPrivacy;