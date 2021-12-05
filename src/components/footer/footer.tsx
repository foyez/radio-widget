import React from "react";

import classes from "./footer.module.scss";

type FooterProps = {
  stationName: string | undefined;
};

export const Footer: React.FC<FooterProps> = ({ stationName }) => {
  return (
    <div id="footer" className={classes.footer}>
      {stationName ? (
        <>
          <h3 className={classes.footerTitle}>Currently Playing</h3>
          <div className={classes.stationName}>{stationName}</div>
        </>
      ) : null}
    </div>
  );
};
