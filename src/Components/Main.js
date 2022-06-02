import React from "react";
import MoviePoster from "./MoviePoster";
import Recommendation from "./Recommendation";
import SearchBarMain from "./SearchBarMain";
import Sidebar from "./Sidebar";

const Main = () => {
  return (
    <div className='main-container'>
      <div className='main-window'>
        <Sidebar />
        <div className='content-main'>
          <SearchBarMain />
          <MoviePoster />
          <Recommendation />
        </div>
      </div>
    </div>
  );
};

export default Main;
