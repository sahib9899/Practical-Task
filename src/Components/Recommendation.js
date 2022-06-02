import { Dropdown } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Recommendation = () => {
  const [movieList, setMovieList] = useState([]);

  const getMoviesData = () => {
    axios({
      method: "get",
      url: "https://api.themoviedb.org/3/movie/upcoming?api_key=ba4f3decbd81cc38175b3d6fbc4ac143&language=en-US&page=1",
    })
      .then((response) => {
        if (response?.data) setMovieList(response.data);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getMoviesData();
  }, []);

  return (
    <div className='recommend-main'>
      <div className='recommend-title'>
        <div>Recommended to you</div>
        <div className='filter-options'>
          <Dropdown>
            <Dropdown.Toggle variant='success' id='dropdown-basic-button'>
              Popular
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href='#/action-1'>Most Popular</Dropdown.Item>
              <Dropdown.Item href='#/action-2'>Least Popular</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle variant='success' id='dropdown-basic-button'>
              Year
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href='#/action-1'>New to Old</Dropdown.Item>
              <Dropdown.Item href='#/action-2'>Old to New</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle variant='success' id='dropdown-basic-button'>
              Rating
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href='#/action-1'>Highest Rating</Dropdown.Item>
              <Dropdown.Item href='#/action-2'>Lowest Rating</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <div className='recommend-movielist'>
        {movieList &&
          movieList?.results?.map((item) => {
            return (
              <div className='recommend-div'>
                <img
                  src={`https://image.tmdb.org/t/p/w500${item?.poster_path}`}
                  className='movie-poster'
                  alt=''
                />
                <span className='movie-title'>{item?.title}</span>
                <span className='movie-release-date'>Average Ratings : {item?.vote_average}</span>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Recommendation;
