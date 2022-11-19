import React from 'react';
import './Footer.scss'

const FooterTop = () => {
    return (
        <>
            <div className="footer_top">
                <div className="container">
                    <div className="footer_top__hero">
                        <div className="footer_top__title">
                            <p className="footer_top__title--title">BE IN TOUCH WITH US:</p>
                        </div>
                        <div className="footer_top__input">
                            <input type="text" className="footer_top__input--input" placeholder='Enter your email' />
                            <button className="footer_top__input--btn">Join Us</button>
                        </div>
                        <div className="footer_top__icons">
                            <a href="#" className="footer_top__icons--link"><i className="fa-brands fa-instagram footer_top__icons--icon"></i></a>
                            <a href="#" className="footer_top__icons--link"><i className="fa-brands fa-twitter footer_top__icons--icon"></i></a>
                            <a href="#" className="footer_top__icons--link"><i className="fa-brands fa-facebook footer_top__icons--icon"></i></a>
                            <a href="#" className="footer_top__icons--link"><i className="fa-brands fa-pinterest footer_top__icons--icon"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FooterTop;