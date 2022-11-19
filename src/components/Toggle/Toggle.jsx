import React, { useState, useContext } from "react";
import "./Toggle.scss";
import { NavLink } from "react-router-dom";
import { ToggleContext } from "../Context/Toggle/ToggleContext";
const Toggle = () => {
  const { show, setShow } = useContext(ToggleContext);
  return (
    <>
      <div className="toggle">
        <div className={` ${show ? "toggle__hero" : "toggle__hero--active"}`}>
          <div className="toggle__left">
            <div className="toggle__left--top">
              <NavLink
                to="/"
                className="toggle__logo--logo"
                style={{ color: "black" }}
              >
                MiSto
              </NavLink>
              <i
                className="fa-solid fa-xmark toggle__left--close"
                onClick={() => setShow(!show)}
              ></i>
            </div>
            <ul className="toggle__list">
              <li className="toggle__item">
                <NavLink to="/" className="toggle__item--links">
                  About Us
                </NavLink>
              </li>
              <li className="toggle__item">
                <NavLink to="/" className="toggle__item--links">
                  Women
                </NavLink>
              </li>
              <li className="toggle__item">
                <NavLink to="/" className="toggle__item--links">
                  Men
                </NavLink>
              </li>
              <li className="toggle__item">
                <NavLink to="/" className="toggle__item--links">
                  Beauty
                </NavLink>
              </li>
              <li className="toggle__item">
                <NavLink to="/" className="toggle__item--links">
                  Accessories
                </NavLink>
              </li>
              <li className="toggle__item">
                <NavLink to="/" className="toggle__item--links">
                  Blog
                </NavLink>
              </li>
              <li className="toggle__item">
                <NavLink to="/" className="toggle__item--links">
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="toggle__icons">
              <ul className="toggle__icons--list">
                <li className="header__right--item">
                  <a href="#">
                    <i className="fa-brands fa-facebook toggle__left--icon"></i>
                  </a>
                </li>
                <li className="header__right--item">
                  <a href="#">
                    <i className="fa-brands fa-twitter toggle__left--icon"></i>
                  </a>
                </li>
                <li className="header__right--item">
                  <a href="#">
                    <i className="fa-brands fa-instagram toggle__left--icon"></i>
                  </a>
                </li>
                <li className="header__right--item">
                  <a href="#">
                    <i className="fa-brands fa-pinterest toggle__left--icon"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Toggle;
