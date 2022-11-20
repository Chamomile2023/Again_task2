import React from "react";
import "./BasicPage.scss";
import one from "../assets/1.jpg";
import two from "../assets/2.jpg";
import three from "../assets/3.jpg";
import four from "../assets/4.jpg";
import Button from "../Button/Button";
import wordOne from '../assets/i1.svg'
import wordTwo from '../assets/i2.svg'
import wordThree from '../assets/i3.svg'

const BasicPageTop = () => {
    return (
        <>
            <div className="basic_top">
                <div className="container">
                    <div className="basic_top__hero">
                        <div className="basic_top__pictures">
                            <div className="basic_top__left">
                                <img src={one} alt="one" className="basic_top__left--img" />
                                <Button className="basic_top__clothes">Clothes</Button>
                            </div>
                            <div className="basic_top__right">
                                <div className="basic_top__right--top">
                                    <div className="basic_top__right--left">
                                        <img src={two} alt="" className="basic_top__img--left" />
                                        <Button className="basic_top__women">Women</Button>
                                    </div>
                                    <div className="basic_top__img--right">
                                        <img src={three} alt="" className="basic_top--img--right" />
                                        <Button className="basic_top__men">Men</Button>
                                    </div>
                                </div>
                                <div className="basic_top__bottom--img">
                                    <img src={four} alt="" className="basic_top__img--bottom" />
                                    <Button className="basic_top__access">Accessories</Button>
                                </div>
                            </div>
                        </div>
                        <div className="basic_top__words">
                            <div className="basic_top__word">
                                <img src={wordOne} alt="" className="basic_top__word--img" />
                                <p className="basic_top__paragraph">On all UA order or order above $100</p>
                            </div>
                            <div className="basic_top__word">
                                <img src={wordTwo} alt="" className="basic_top__word--img" />
                                <p className="basic_top__paragraph">Simply return it within 30 days for an exchange</p>
                            </div>
                            <div className="basic_top__word">
                                <img src={wordThree} alt="" className="basic_top__word--img" />
                                <p className="basic_top__paragraph">Contact us 24 hours a day, 7 days a week</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BasicPageTop;
