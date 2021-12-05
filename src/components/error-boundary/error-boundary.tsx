import React, { ErrorInfo, ReactNode } from "react";

import classes from "./error-boundary.module.scss";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(_: Error) {
    // process the error
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Uncaught error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={classes.errorOverlay}>
          <div className={classes.errorImage} />
          <div className={classes.errorText}>Sorry this page is broken</div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
