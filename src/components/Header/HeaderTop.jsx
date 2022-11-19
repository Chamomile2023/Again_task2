import React from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";

const HeaderTop = () => {
  return (
    <>
      <div className="header_top">
        <div className="container">
          <div className="header_top__hero">
            <div className="header_top__left">
              <ul className="header_top__list">
                <li className="header_top__item">
                  <NavLink to="/" className="header_top__link">
                    <i className="fa-solid fa-phone header_top__link--icon"></i>
                    +38 (050) 12 34 567
                  </NavLink>
                </li>
                <li className="header_top__item">
                  <NavLink to="/" className="header_top__link">
                    <i className="fa-solid fa-location-dot header_top__link--icon header_top__additional"></i>
                    Ukraine, Kyiv,Khreshchatyk 1
                  </NavLink>
                </li>
                <li className="header_top__item">
                  <NavLink to="/" className="header_top__link">
                    <i class="fa-solid fa-clock header_top__link--icon header_top__additional"></i>
                    All week 24/7
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="header_top__right">
              <a href="#">
                <i class="fa-brands fa-facebook header_top__right--icon"></i>
              </a>
              <a href="#">
                {" "}
                <i className="fa-brands fa-instagram header_top__right--icon"></i>
              </a>
              <a href="#">
                {" "}
                <i className="fa-brands fa-twitter header_top__right--icon"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-pinterest header_top__right--icon"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderTop;
