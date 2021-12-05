import React from "react";
import { Station } from "../../types";
import { StationWidget } from "../station-widget/station-widget";

import classes from "./station-item.module.scss";

interface StationProps {
  station: Station;
  selectedStation: Station | null;
  onClickStation: (station: Station) => () => void;
}

export const StationItem: React.FC<StationProps> = ({
  station,
  selectedStation,
  onClickStation,
}) => {
  const { id, name, frequency, imgUrl } = station;

  return (
    <div className={classes.stationItem}>
      {selectedStation?.id === id ? (
        <StationWidget stationName={name} imgUrl={imgUrl} />
      ) : null}

      <div
        data-testid="station-content"
        className={classes.stationContent}
        onClick={onClickStation(station)}
      >
        <div>{name}</div>
        <div className={classes.frequency}>{frequency}</div>
      </div>
    </div>
  );
};
