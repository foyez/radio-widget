import React from "react";

import classes from "./station-widget.module.scss";
import volumeUp from "../../assets/images/plus.png";
import volumeDown from "../../assets/images/minus.png";

type StationWidgetProps = {
  stationName: string;
  imgUrl: string;
};

export const StationWidget: React.FC<StationWidgetProps> = ({
  stationName,
  imgUrl,
}) => {
  return (
    <div data-testid="station-widget" className={classes.stationWidget}>
      <button className={classes.volumeBtn}>
        <img src={volumeDown} alt="volume down" />
      </button>
      <img className={classes.stationImg} src={imgUrl} alt={stationName} />
      <button className={classes.volumeBtn}>
        <img src={volumeUp} alt="volume up" />
      </button>
    </div>
  );
};
