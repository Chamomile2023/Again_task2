import React from "react";
import women from '../assets/women.svg'
import men from '../assets/men.svg'
import './SubscribePage.scss'

const SubscribePage = () => {
    return <>
        <div className="subscribe">
            <div className="container">
                <div className="subscribe__hero">
                    <div className="subscribe__images">
                        <img src={women} alt="" className="subscribe__images--women" />
                        <div className="subscribe__box">
                            <p className="subscribe__box--paragraph">Special Offer</p>
                            <h2 className="subscribe__box--title">Subscribe <br />And <span className="subscribe__box--span">Get 10% Off</span></h2>
                            <div className="subscribe__buttons">
                                <button className="subscribe__box--email">Enter your email</button>
                                <button className="subscribe__box--btn">Subscribe</button>
                            </div>
                        </div>
                        <img src={men} alt="" className="subscribe__images--men" />
                    </div>
                </div>
            </div>
        </div>
    </>;
};

export default SubscribePage;
