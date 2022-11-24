import React from "react";
import "../MenHeaderPage/WomenHeaderPage.scss";

const SubscribeTop = () => {
    return <>
        <div className="women_top">
            <div className="container">
                <div className="women_top__hero">
                    <div className="women_top__top">
                        <p className="women_top__top--paragraph">
                            Home
                            <i className="fa-solid fa-caret-right women_top--icon"></i>
                            Clothes
                        </p>
                        <p className="women_top__top--paragraph">
                            <i className="fa-solid fa-share-nodes women_top--icon"></i>
                            Share
                        </p>
                    </div>
                    <h2 className="women_top--title">Clothes</h2>
                </div>
            </div>
        </div>
    </>;
};

export default SubscribeTop;
