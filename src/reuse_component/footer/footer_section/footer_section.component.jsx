import React from 'react';
import './footer_section.styles.scss';

const FooterSection = ({items}) => {
    return <div className={`${items.size == 'small' ? 'col-md-2' : 'col-md-3'} footer_section`}>
        <h5>{items.title}</h5>
        {
            items.items.map((item) => <a href={item.link} key={item.id} className='footer_link'>{item.title}</a>)
        }
    </div>
}

export default FooterSection;