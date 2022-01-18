import React from 'react';
import FooterCopy from '../../reuse_component/footer/footer_copyright/footer_copyright.component';
import FooterPrivacy from '../../reuse_component/footer/footer_privacy/footer_privacy.component';
import FooterSection from '../../reuse_component/footer/footer_section/footer_section.component';
import FooterSocial from '../../reuse_component/footer/footer_social/footer_social.component';
import './footer.styles.scss';

const footer_data = [
    {   
        id: 1,
        title: 'About Us',
        items: [
            {
                id: 1,
                title: 'Our Company',
                link: '/aboutus/company'
            },
            {
                id: 2,
                title: 'Our Food',
                link: '/aboutus/food'
            },
            {
                id: 3,
                title: 'Customer Service',
                link: '/aboutus/customerservice'
            },
            {
                id: 4,
                title: 'Event',
                link: '/aboutus/events'
            },
        ]
    },
    {   
        id: 2,
        title: 'Order and Pickup',
        items: [
            {
                id: 1,
                title: 'Order on the Web',
                link: '/order'
            },
            {
                id: 2,
                title: 'Order on the App',
                link: '/order'
            },
            {
                id: 3,
                title: 'Order and Pickup Options',
                link: '/order'
            },
            {
                id: 4,
                title: 'Order and Pickup Options',
                link: '/order'
            }
        ]
    }
    ,
    {   
        id: 3,
        title: 'Product',
        size:'small',
        items: [
            {
                id: 1,
                title: 'Food',
                link: '/food'
            },
            {
                id: 2,
                title: 'Drink',
                link: '/drink'
            },
            {
                id: 3,
                title: 'Cake',
                link: '/customerservice'
            }
        ]
    },
    {   
        id: 4,
        title: 'Contact',
        size: 'small',
        items: [
            {
                id: 1,
                title: 'Phone',
                link: '/phone'
            },
            {
                id: 2,
                title: 'Email',
                link: '/email'
            },
            {
                id: 3,
                title: 'Social',
                link: '/social'
            }
        ]
    }
]

const footer_privacy = [
    {
        id: '1',
        title: 'Privacy Policy',
        first: true
    },
    {
        id: '2',
        title: 'Terms of Use'
    },
    {
        id: '3',
        title: 'Supply Chain'
    },
    {
        id: '4',
        title: 'Cookies Referrence',
    }
]
const Footer = () => {
    return <div className='footer '>
     <div className='container'>
     <div className="footer_content row">
            {
                footer_data.map(item => <FooterSection key={item.id} items = {item}/>)
            }
        </div>
        <FooterSocial/>
        <FooterPrivacy items={footer_privacy}/>
        <FooterCopy/>
     </div>
   
    </div>
}

export default Footer;