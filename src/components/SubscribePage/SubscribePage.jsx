import React from "react";
import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.png";
import "./SubscribePage.scss";

const SubscribePage = () => {
  return (
    <>
      <div className="subscribe">
        <div className="container">
          <div className="subscribe__hero">
            <h2 className="subscribe__hero--title">LATEST FROM BLOG</h2>
            <div className="subscribe__boxes">
              <div className="subscribe__box">
                <img src={blog1} alt="" className="subscribe__box--img" />
                <div className="subscribe__words">
                  <h3 className="subscribe__words--title">
                    The Easiest Way to Break
                  </h3>
                  <p className="subscribe__words--paragraph">
                    But I must explain to you how all this mistaken idea of
                    denouncing pleas and praising pain was bor
                  </p>
                </div>
              </div>
              <div className="subscribe__box">
                <img src={blog2} alt="" className="subscribe__box--img" />
                <div className="subscribe__words">
                  <h3 className="subscribe__words--title">Wedding Season</h3>
                  <p className="subscribe__words--paragraph">
                    But I must explain to you how all this mistaken idea of
                    denouncing pleas and praising pain was bor
                  </p>
                </div>
              </div>
              <div className="subscribe__box">
                <img src={blog3} alt="" className="subscribe__box--img" />
                <div className="subscribe__words">
                  <h3 className="subscribe__words--title">
                    Recent Favorites On Repeat
                  </h3>
                  <p className="subscribe__words--paragraph">
                    But I must explain to you how all this mistaken idea of
                    denouncing pleas and praising pain was bor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubscribePage;
