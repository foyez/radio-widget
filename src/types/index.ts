import { compose } from "redux";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export type Station = {
  id: number;
  name: string;
  frequency: string;
  imgUrl: string;
};
