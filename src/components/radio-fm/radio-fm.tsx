import React from "react";

import classes from "./radio-fm.module.scss";
import { Header } from "../header/header";
import { StationList } from "../station-list/station-list";
import { Footer } from "../footer/footer";
import { useStation } from "../../store/selectors";

export const RadioFM: React.FC = () => {
  const stationState = useStation();

  return (
    <div className={classes.container}>
      <Header />
      <StationList />
      <Footer stationName={stationState.selectedStation?.name} />
    </div>
  );
};
