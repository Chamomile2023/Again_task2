import React from "react";
import './Footer.scss'

const FooterBottom = () => {
    return <>
        <div className="footer_bottom">
            <div className="container">
                <div className="footer_bottom__hero">
                    <div className="footer_bottom__top">
                        <p className="footer_bottom__top--paragraph">Copyright © 2032 all rights reserved</p>
                    </div>
                    <div className="footer_bottom__middle">
                        <a href="#" className="footer_bottom__middle--link">
                            <i className="fa-brands fa-cc-stripe footer_bottom__middle--icon"></i>
                        </a>
                        <a href="#" className="footer_bottom__middle--link">
                            <i className="fa-brands fa-cc-paypal footer_bottom__middle--icon"></i>
                        </a>
                        <a href="#" className="footer_bottom__middle--link">
                            <i className="fa-brands fa-cc-visa footer_bottom__middle--icon"></i>
                        </a>
                        <a href="#" className="footer_bottom__middle--link">
                            <i className="fa-brands fa-cc-mastercard footer_bottom__middle--icon"></i>
                        </a>
                        <a href="#" className="footer_bottom__middle--link">
                            <i className="fa-brands fa-cc-discover footer_bottom__middle--icon"></i>
                        </a>
                    </div>
                    <div className="footer_bottom__bottom">
                        <p className="footer_bottom__top--paragraph">Designed by Oleh Chabanov</p>
                    </div>
                </div>
            </div>
        </div>
    </>;
};

export default FooterBottom;
