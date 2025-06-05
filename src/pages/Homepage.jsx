import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import axios from "axios";
import { useLoader } from "../contexts/LoaderContext";

const Homepage = () => {
  const { loader, setLoader } = useLoader();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      const fetchMovies = () => {
        axios
          .get("http://127.0.0.1:3000/api/movies/")
          .then((resp) => {
            setMovies(resp.data);
            setLoader(false);
          })
          .catch((err) => {
            console.log(err);
          });
      };
      fetchMovies();
    }, 5000);
  }, []);

  return (
    <>
      <div>{loader}</div>
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
