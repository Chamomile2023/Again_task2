import React from "react";
import './Header.scss'
import { NavLink } from 'react-router-dom'

const HeaderBottom = () => {
  return (
    <>
      <div className="header_bottom">
        <div className="container">
          <div className="header_bottom__hero">
            <div className="header_bottom__logo">
              <NavLink to="/" className="header_bottom--logo">MiSto</NavLink>
            </div>
            <div className="header_bottom__close">
              <i class="fa-solid fa-bars header_bottom__close--bar"></i>
            </div>
            <div className="header_bottom__ul">
              <ul className="header_bottom__list">
                <li className="header_bottom__list--item">
                  <NavLink to="/" className="header_bottom__list--link">About Us</NavLink>
                </li>
                <li className="header_bottom__list--item">
                  <NavLink to="/" className="header_bottom__list--link">Women</NavLink>
                </li>
                <li className="header_bottom__list--item">
                  <NavLink to="/" className="header_bottom__list--link">Men</NavLink>
                </li>
                <li className="header_bottom__list--item">
                  <NavLink to="/" className="header_bottom__list--link">Beauty</NavLink>
                </li>
                <li className="header_bottom__list--item">
                  <NavLink to="/" className="header_bottom__list--link">Accessories</NavLink>
                </li>
                <li className="header_bottom__list--item">
                  <NavLink to="/" className="header_bottom__list--link">Blog</NavLink>
                </li>
                <li className="header_bottom__list--item">
                  <NavLink to="/" className="header_bottom__list--link">Contact</NavLink>
                </li>
              </ul>
            </div>
            <div className="header_bottom__icons">
              <i className="fa-solid fa-magnifying-glass header_bottom--icon"></i>
              <i className="fa-solid fa-earth-americas header_bottom--icon"></i>
              <i className="fa-solid fa-user header_bottom--icon"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderBottom;
