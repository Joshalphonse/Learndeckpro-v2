import React, { useState } from "react";
import "./imagegrid.css";
import Button, { Button as Button0 } from "../button/button";
import mobile from "./assets/mobile.png";
import group from "./assets/Group.svg";
import arrow from "./assets/arrow.svg";

export interface ImagegridProps {
    className?: string;
}

export const Imagegrid: React.FC<ImagegridProps> = ({ className }) => {
    return (
        <div className={`${className}`}>
            <img className="mobile" src={mobile} />
            <div className="textContainer">
                <Button0 />
                <h1 className="uxText">UX in Mobile</h1>
                <div className="textArea">
                    <div className="skillDiv">
                        <img src={group} className="group circleIcon" />
                        <p className="intermediate">Intermediate</p>
                    </div>
                    <div className="learnMoreThings">
                        <img src={arrow} className="arrow" />
                        <p className="learnMore">Learn More</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Imagegrid;
