import loadable from "react-loadable";
import React from "react";
const Loading = ({ error, timeOut, retry }) => {
  if (error)
    return (
      <div className="page__center">
        <h1>Error : {error}</h1>
        <button onClick={retry}>relaod </button>
      </div>
    );
  else if (timeOut)
    return (
      <div className="page__center">
        <h1>Taking a long Time ...</h1>
        <button onClick={retry}>relaod </button>
      </div>
    );
  else
    return (
      <div className="page__center">
        <h1>Loading...</h1>
      </div>
    );
};

export const LoadableHeader = loadable({
  loader: () => import(/* webpackChunkName: "Login" */ "./Header"),
  loading: Loading,
  timeout: 10000,
});
export const LoadableBanner = loadable({
  loader: () => import(/* webpackChunkName: "sidebar" */ "./Banner"),
  loading: Loading,
  timeout: 10000,
});

export const LoadableRow = loadable({
  loader: () => import(/* webpackChunkName: "settings" */ "./Row"),
  loading: Loading,
  timeout: 10000,
});
