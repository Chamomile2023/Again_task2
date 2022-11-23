import React from "react";
import './WomenHeaderPage.scss'

const WomenHeaderTop = () => {
    return <>
        <div className="women_top">
            <div className="container">
                <div className="women_top__hero">
                    <div className="women_top__top">
                        <p className="women_top__top--paragraph">Home Women</p>
                        <p className="women_top__top--paragraph">
                            <i className="fa-solid fa-share-nodes women_top--icon"></i>
                            Share
                        </p>
                    </div>
                    <h2 className="women_top--title">Women</h2>
                </div>
            </div>
        </div>
    </>;
};

export default WomenHeaderTop;
