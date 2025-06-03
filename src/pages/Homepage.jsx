import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import axios from "axios";

const Homepage = () => {
  const [movies, setMovies] = useState([]);
  const fetchBooks = () => {
    axios
      .get("http://127.0.0.1:3000/api/movies/")
      .then((resp) => {
        setMovies(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <>
      <h1 className="text-primary my-4">Movie List</h1>
      <div className="row g-4">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={`movie-${movie.id}`} />
        ))}
      </div>
    </>
  );
};

export default Homepage;
