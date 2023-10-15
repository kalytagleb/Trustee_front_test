import React, {useState} from "react";
import My_input from "./UI/input/My_input";
import My_button from "./UI/button/My_button";

const MovieForm = ({create}) => {
  const [movie, setMovie] = useState({
    title: "",
    start_time: "",
    end_time: "",
  });

  const addNewMovie = (e) => {
    e.preventDefault();
    const newMovie = {
        ...movie, id: Date.now()
    }
    create(newMovie)
    setMovie({title: "", start_time: "", end_time: ""})
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      
      const inputFields = document.querySelectorAll("input");
      const currentInput = e.target;
      const currentIndex = Array.from(inputFields).indexOf(currentInput);

      if (currentIndex < inputFields.length - 1) {
        const nextInput = inputFields[currentIndex + 1];
        nextInput.focus();
      } else {
        addNewMovie(e);
      }
    }
  };

  return (
    <form>
      <My_input
        name="title"
        value={movie.title}
        type="text"
        placeholder="Movie title: "
        onChange={(e) => setMovie({ ...movie, title: e.target.value })}
        onKeyDown={handleKeyDown}
      />
      <My_input
        name="start_time"
        value={movie.start_time}
        type="text"
        placeholder="Start time: "
        onChange={(e) => setMovie({ ...movie, start_time: e.target.value })}
        onKeyDown={handleKeyDown}
      />
      <My_input
        name="end_time"
        value={movie.end_time}
        type="text"
        placeholder="End time: "
        onChange={(e) => setMovie({ ...movie, end_time: e.target.value })}
        onKeyDown={handleKeyDown}
      />
      <My_button onClick={addNewMovie}>Add movie to list</My_button>
    </form>
  );
};

export default MovieForm;