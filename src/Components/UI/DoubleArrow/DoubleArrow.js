import React from "react";
import classes from "./DoubleArrow.module.css";

const doubleArrow = props => (
    <div>
        <div className={[classes.arrowContainer, classes.top].join(" ")}>
                <svg className={classes.arrowTop}>
                <polyline points="0,100 100,50 200,100" />
                Sorry, your browser does not support inline SVG.
                </svg>
        </div>
        <div className={[classes.arrowContainer, classes.bottom].join(" ")}>
            <svg className={classes.arrowBottom}>
            <polyline points="0,100 100,50 200,100" />
            Sorry, your browser does not support inline SVG.
            </svg>
        </div>
    </div>
    
);

export default doubleArrow;