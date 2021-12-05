import classes from "./spinner.module.scss";

export const Spinner = () => (
  <div className={classes.spinnerOverlay}>
    <div className={classes.spinner} />
  </div>
);
