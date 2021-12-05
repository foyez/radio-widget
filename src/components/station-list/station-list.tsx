import React, { useEffect } from "react";

import classes from "./station-list.module.scss";
import { StationItem } from "../station-item/station-item";
import type { Station } from "../../types";
import { useStationActions } from "../../store/station/station.actions";
import { useStation } from "../../store/selectors";
import { Spinner } from "../spinner/spinner";

export const StationList: React.FC = () => {
  const { selectStation, fetchStationsStart } = useStationActions();
  const { stations, isFetching, selectedStation } = useStation();

  useEffect(() => {
    fetchStationsStart();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleClickStation = (station: Station) => () => {
    const isSameStation = selectedStation?.id === station.id;
    selectStation(isSameStation ? null : station);
  };

  if (isFetching) {
    return (
      <div className={classes.stationList}>
        <Spinner />
      </div>
    );
  }

  return (
    <div data-testid="station-list" className={classes.stationList}>
      {stations.map((station) => (
        <StationItem
          key={station.id}
          station={station}
          selectedStation={selectedStation}
          onClickStation={handleClickStation}
        />
      ))}
    </div>
  );
};
