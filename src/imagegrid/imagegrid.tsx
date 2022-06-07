import React from "react";
import styles from "./imagegrid.module.scss";
import "./imagegrid.css";
import group from "./assets/Group.svg";
import arrow from "./assets/arrow.svg";

export interface ImagegridProps {
    className?: string;
}

export const Imagegrid: React.FC<ImagegridProps> = ({ className }) => {
    return (
        <div className={`${styles.root} ${className}`}>
            <img
                className="mobile"
                src="/Users/joshuaa/Dev/learndeckprov2/src/imagegrid/assets/mobile.png"
            />
            <h1 className="uxText">UX in Mobile</h1>
            <div className="textArea">
                <div className="skillDiv">
                    <img src={group} className="group" />
                    <p className="intermediate">Intermediate</p>
                </div>
                <div className="learnMoreThings">
                    <img src={arrow} className="arrow" />
                    <p className="learnMore">Learn More</p>
                </div></div></div>
    );
};
