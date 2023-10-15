import React from "react";
import MovieFormat from "./MovieFormat"
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

const MovieList = ({ movies, remove }) => {
  if (!movies.length) {
    return (
      <h1 style={{textAlign: 'center'}}>
        There are no any movies 
      </h1>
    )
  }

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: 15 }}>List of movies</h1>
      <TransitionGroup className="task">
        {movies.map((movie, index) => (
          <CSSTransition key={movie.id} timeout={500} classNames="task">
            <MovieFormat remove={remove} number={index+1} movie={movie} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default MovieList;
