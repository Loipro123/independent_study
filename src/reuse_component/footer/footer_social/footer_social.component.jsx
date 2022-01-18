import React from "react";
import "./footer_social.styles.scss";

const FooterSocial = () => {
  return (
    <div className="row">
      <div className="footer_social col-md-12">
        <button className="social-btn">
            <i className='fa fa-facebook'></i>
        </button>
        <button className="social-btn">
            <i className='fa fa-twitter'></i>
        </button>
        <button className="social-btn">
            <i className='fa fa-instagram'></i>
        </button>
        <button className="social-btn">
            <i className='fa fa-youtube'></i>
        </button>
      </div>
    </div>
  );
};

export default FooterSocial;
