import React from "react";
import My_button from "./UI/button/My_button";

const MovieFormat = ({movie, number, remove}) => {
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {number}. <p>Movie: {movie.title}</p>
        </strong>
        <div>
          <strong>Start Time: {movie.start_time}</strong>
        </div>
        <div>
          <strong>End Time: {movie.end_time}</strong>
        </div>
      </div>
      <div className="post__btns">
        <My_button onClick={() => remove(movie)}>Delete</My_button>
      </div>
    </div>
  );
};

export default MovieFormat;
