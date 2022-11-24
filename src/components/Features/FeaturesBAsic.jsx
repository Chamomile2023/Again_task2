import React, { useState } from "react";
import './Features.scss'
import dress from '../assets/six.jpg'
import Button from '../Button/Button'

const FeaturesBAsic = () => {
    const [active, setActive] = useState(true)
    return <>
        <div className="feature">
            <div className="container">
                <div className="feature__hero">
                    <div className="feature__img">
                        <img src={dress} alt="" className="feature__img--img" />
                    </div>
                    <div className="feature__features">
                        <div className="feature__features--color">
                            <p className="feature__features--paragraph">COLOR: <span className="span">blue</span></p>
                            <img src={dress} alt="" className="feature__features--img" />
                        </div>
                        <div className="feature__features--size">
                            <Button className={`feature__features--btn ${active ? "" : "active"}`} onClick={() => setActive(false)}>XS</Button>
                            <Button className={`feature__features--btn ${active ? "active" : ""}`}>S</Button>
                            <Button className={`feature__features--btn ${active ? "active" : ""}`}>M</Button>
                            <Button className={`feature__features--btn ${active ? "active" : ""}`}>L</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>;
};

export default FeaturesBAsic;
