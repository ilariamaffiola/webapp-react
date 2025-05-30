import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Homepage = () => {
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
  const [movies, setMovies] = useState(initialMovies);

  return (
    <>
      <h1 className="text-primary my-4">Movie List</h1>
      <div className="row g-4">
        {movies.map((movie) => (
          <div className="col-lg-4 col-md-6 col-12" key={`movie-${movie.id}`}>
            <Link to={`/movies/${movie.id}`} className="text-decoration-none">
              <div className="card">
                <div className="card-image-top d-flex justify-content-center">
                  <img className="img-fluid " src={movie.image} alt="Movie" />
                </div>
                <div className="card-body">
                  <h3 className="text-primary">{movie.title}</h3>
                  <h4>
                    <em>{movie.director}</em>
                  </h4>
                  <p>{movie.genre}</p>
                  <p>{movie.relase_year}</p>
                  <p>{movie.abstract}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Homepage;
