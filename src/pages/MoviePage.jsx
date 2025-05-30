import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MoviePage = () => {
  const initialMovies = [
    {
      id: 1,
      title: "Inception",
      director: "Christopher Nolan",
      genre: "Science Fiction",
      relase_year: "2010",
      abstract:
        "A skilled thief is given a chance at redemption if he can successfully perform inception.",
      image: "https://picsum.photos/200/300",
    },
    {
      id: 2,
      title: "The Godfather",
      director: "Francis Ford Coppola",
      genre: "Crime",
      relase_year: "1972",
      abstract: "ul Italian-American crime family and their struggles.",
      image: "https://picsum.photos/200/300",
    },
    {
      id: 3,
      title: "Titanic",
      director: "James Cameron",
      genre: "Romance",
      relase_year: "1997",
      abstract:
        "A romantic story set against the tragic sinking of the RMS Titanic.",
      image: "https://picsum.photos/200/300",
    },
    {
      id: 4,
      title: "The Matrix",
      director: "The Wachowskis",
      genre: "Action",
      relase_year: "1999",
      abstract:
        "A hacker discovers the truth about his reality and his role in the war against its controllers.",
      image: "https://picsum.photos/200/300",
    },
    {
      id: 5,
      title: "Interstellar",
      director: "Christopher Nolan",
      genre: "Science Fiction",
      relase_year: "2014",
      abstract:
        "A team of explorers travels through a wormhole in space to save humanity.",
      image: "https://picsum.photos/200/300",
    },
  ];
  const { id } = useParams();
  const [movies, setMovies] = useState(initialMovies);
  const [movie, setMovie] = useState({});

  const fetchMovie = () => {
    movies.forEach((actualMovie) => {
      if (actualMovie.id === parseInt(id)) {
        setMovie(actualMovie);
      }
    });
  };

  useEffect(() => {
    fetchMovie();
  }, [id]);
  return (
    <>
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4">
          <img className="img-fluid " src={movie.image} alt="Movie" />
        </div>
        <div className="col-12 col-md-6 col-lg-8">
          <h1 className="text-primary">{movie.title}</h1>
          <h4>
            <em>{movie.director}</em>
          </h4>
          <p>{movie.genre}</p>
          <p>{movie.release_year}</p>
          <p>{movie.abstract}</p>
        </div>
      </div>
    </>
  );
};

export default MoviePage;
