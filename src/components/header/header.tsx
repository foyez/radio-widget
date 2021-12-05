import React from "react";

import classes from "./header.module.scss";
import backBtn from "../../assets/images/back-arrow.png";
import switchBtn from "../../assets/images/switch.png";

export const Header: React.FC = () => {
  return (
    <div className={classes.header}>
      <button title="back">
        <img src={backBtn} alt="back" />
      </button>
      <h1 className={classes.heading}>Stations</h1>
      <button title="switch">
        <img src={switchBtn} alt="switch" />
      </button>
    </div>
  );
};
