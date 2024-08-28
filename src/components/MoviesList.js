import React from "react";
import MoviesCard from "./MoviesCard";

const MoviesList = ({ movies, title }) => {
  return (
    <div className=" relative z-20 p-6">
      <h1 className="text-white text-2xl mb-2">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies &&
            movies.map((movie) => (
              <MoviesCard key={movie.id} posterPath={movie.poster_path} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
