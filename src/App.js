import React from "react";
import "./App.css";
import Row from "./Row";
import { LoadableBanner, LoadableHeader, LoadableRow } from "./loadable";
import requests from "./requsets";

function App() {
  return (
    <div className="App">
      <LoadableHeader />
      <LoadableBanner />
      <Row big title="Popular" categoruUrl={requests.popular} />
      <LoadableRow title="Top Rated" categoruUrl={requests.top_rated} />
      <LoadableRow title="Trending" categoruUrl={requests.trending} />
      <LoadableRow title="Upcoming" categoruUrl={requests.upcoming} />
      <LoadableRow title="Action" categoruUrl={requests.action} />
      <LoadableRow title="Horror" categoruUrl={requests.horror} />
      <LoadableRow title="Comedy" categoruUrl={requests.comedy} />
    </div>
  );
}

export default App;
