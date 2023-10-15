import React, { useEffect, useMemo, useState } from "react";
import "../styles/App.scss";
import TaskFormat from "../components/TaskFormat";
import MovieList from "../components/MovieList";
import My_button from "../components/UI/button/My_button";
import My_input from "../components/UI/input/My_input";
import MovieForm from "../components/MovieForm";
import My_select from "../components/UI/select/My_select";
import MyModal from "../components/UI/modal/MyModal";
import Meeting from "./Meeting";

const Cinema_Schedule = () => {
  const [movies, setMovies] = useState([]);
  const [selectedSort, setSelectedSort] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [modal, setModal] = useState(false);

  const sortedMovies = useMemo(() => {
    if (selectedSort) {
      return [...movies].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort])
      );
    }
    return movies;
  }, [selectedSort, movies]);

  const sortedAndSearchedMovies = useMemo(() => {
    return sortedMovies.filter((movie) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, sortedMovies]);

  if (Array.isArray(sortedAndSearchedMovies)) {
    console.log("Yes");
  } else {
    console.log("No");
  }

  const createMovie = (newMovie) => {
    const updatedMovies = [...movies, newMovie];
    setMovies(updatedMovies);
    localStorage.setItem("movies", JSON.stringify(updatedMovies));
    setModal(false);
  };

  useEffect(() => {
    const savedMovies = localStorage.getItem("movies");
    if (savedMovies) {
      setMovies(JSON.parse(savedMovies));
    }
  }, []);

  const removeMovie = (movie) => {
    const updatedMovies = movies.filter((t) => t.id !== movie.id);
    setMovies(updatedMovies);
    localStorage.setItem("movies", JSON.stringify(updatedMovies));
  };

  const sortMovies = (sort) => {
    setSelectedSort(sort);
    if (sort.value === "start_time" || sort.value === "end_time") {
      setMovies(
        [...movies].sort((a, b) => {
          const timeA = new Date(a[sort]);
          const timeB = new Date(b[sort]);
          return timeA - timeB;
        })
      );
    }
  };

  return (
    <div className="App">
      <My_button style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Add a new movie
      </My_button>
      <MyModal visible={modal} setVisible={setModal}>
        <MovieForm create={createMovie} />
      </MyModal>
      <hr style={{ margin: "15px 0" }} />
      <div>
        <My_input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search..."
        />
        <My_select
          value={selectedSort}
          onChange={sortMovies}
          defaultValue="Sorting..."
          options={[
            { value: "meeting", name: "By alphabetic order" },
            { value: "start_time", name: "By start time" },
            { value: "end_time", name: "By end time" },
          ]}
        />
      </div>
      <MovieList remove={removeMovie} movies={sortedAndSearchedMovies} />
    </div>
  );
};

export default Cinema_Schedule;