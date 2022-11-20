import React from "react";
import './Footer.scss'

const FooterMiddle = () => {
    return <>
        <div className="footer_middle">
            <div className="container">
                <div className="footer_middle__hero">
                    <ul className="footer_middle__list">
                        <p className="footer_middle__list--title">Categories</p>
                        <li className="footer_middle__list--item">
                            <a href="#" className="footer_middle--link">Men</a>
                        </li>
                        <li className="footer_middle__list--item">
                            <a href="#" className="footer_middle--link">Women</a>
                        </li>
                        <li className="footer_middle__list--item">
                            <a href="#" className="footer_middle--link">Beauty</a>
                        </li>
                        <li className="footer_middle__list--item">
                            <a href="#" className="footer_middle--link">Accessories</a>
                        </li>
                    </ul>
                    <ul className="footer_middle__list">
                        <p className="footer_middle__list--title">Information</p>
                        <li className="footer_middle__list--item">
                            <a href="#" className="footer_middle--link">About Us</a>
                        </li>
                        <li className="footer_middle__list--item">
                            <a href="#" className="footer_middle--link">Contact Us</a>
                        </li>
                        <li className="footer_middle__list--item">
                            <a href="#" className="footer_middle--link">Blog</a>
                        </li>
                        <li className="footer_middle__list--item">
                            <a href="#" className="footer_middle--link">FAQ</a>
                        </li>
                    </ul>
                    <ul className="footer_middle__list">
                        <p className="footer_middle__list--title">USEFUL LINKS</p>
                        <li className="footer_middle__list--item">
                            <a href="#" className="footer_middle--link">Terms & Conditions</a>
                        </li>
                        <li className="footer_middle__list--item">
                            <a href="#" className="footer_middle--link">Returns & Exchanges</a>
                        </li>
                        <li className="footer_middle__list--item">
                            <a href="#" className="footer_middle--link">Shipping & Delivery</a>
                        </li>
                        <li className="footer_middle__list--item">
                            <a href="#" className="footer_middle--link">Privacy Policy</a>
                        </li>
                    </ul>
                    <ul className="footer_middle__list">
                        <p className="footer_middle__list--title">CONTACT US</p>
                        <li className="footer_middle__list--item">
                            <a href="#" className="footer_middle--link">
                                <i className="fa-solid fa-location-dot footer_middle__list--icon"></i>
                                Ukraine, Kyiv,Khreshchatyk 1
                            </a>
                        </li>
                        <li className="footer_middle__list--item">
                            <a href="#" className="footer_middle--link">
                                <i className="fa-solid fa-phone footer_middle__list--icon"></i>
                                +38 (050) 12 34 567
                            </a>
                        </li>
                        <li className="footer_middle__list--item">
                            <a href="#" className="footer_middle--link">
                                <i className="fa-solid fa-clock footer_middle__list--icon"></i>
                                All week 24/7
                            </a>
                        </li>
                        <li className="footer_middle__list--item">
                            <a href="#" className="footer_middle--link">
                                <i className="fa-solid fa-envelope footer_middle__list--icon"></i>
                                shaman.magic.music@gmail.com
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </>;
};

export default FooterMiddle;
