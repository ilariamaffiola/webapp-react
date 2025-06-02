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
      release_year: "2010",
      abstract:
        "A skilled thief is given a chance at redemption if he can successfully perform inception.",
      image: "https://picsum.photos/200/300",
      reviews: [
        {
          id: 10,
          movie_id: 4,
          name: "Jack",
          vote: 5,
          text: "A revolutionary film in every sense.",
          created_at: "2024-11-29T10:40:13.000Z",
          updated_at: "2024-11-29T10:40:13.000Z",
        },
        {
          id: 11,
          movie_id: 4,
          name: "Karen",
          vote: 4,
          text: "Great action and a thought-provoking plot.",
          created_at: "2024-11-29T10:40:13.000Z",
          updated_at: "2024-11-29T10:40:13.000Z",
        },
        {
          id: 12,
          movie_id: 4,
          name: "Liam",
          vote: 4,
          text: "A unique take on reality and perception.",
          created_at: "2024-11-29T10:40:13.000Z",
          updated_at: "2024-11-29T10:40:13.000Z",
        },
      ],
    },
    {
      id: 2,
      title: "The Godfather",
      director: "Francis Ford Coppola",
      genre: "Crime",
      release_year: "1972",
      abstract: "ul Italian-American crime family and their struggles.",
      image: "https://picsum.photos/200/300",
      reviews: [
        {
          id: 10,
          movie_id: 4,
          name: "Jack",
          vote: 5,
          text: "A revolutionary film in every sense.",
          created_at: "2024-11-29T10:40:13.000Z",
          updated_at: "2024-11-29T10:40:13.000Z",
        },
        {
          id: 11,
          movie_id: 4,
          name: "Karen",
          vote: 4,
          text: "Great action and a thought-provoking plot.",
          created_at: "2024-11-29T10:40:13.000Z",
          updated_at: "2024-11-29T10:40:13.000Z",
        },
        {
          id: 12,
          movie_id: 4,
          name: "Liam",
          vote: 4,
          text: "A unique take on reality and perception.",
          created_at: "2024-11-29T10:40:13.000Z",
          updated_at: "2024-11-29T10:40:13.000Z",
        },
      ],
    },
    {
      id: 3,
      title: "Titanic",
      director: "James Cameron",
      genre: "Romance",
      release_year: "1997",
      abstract:
        "A romantic story set against the tragic sinking of the RMS Titanic.",
      image: "https://picsum.photos/200/300",
      reviews: [
        {
          id: 10,
          movie_id: 4,
          name: "Jack",
          vote: 5,
          text: "A revolutionary film in every sense.",
          created_at: "2024-11-29T10:40:13.000Z",
          updated_at: "2024-11-29T10:40:13.000Z",
        },
        {
          id: 11,
          movie_id: 4,
          name: "Karen",
          vote: 4,
          text: "Great action and a thought-provoking plot.",
          created_at: "2024-11-29T10:40:13.000Z",
          updated_at: "2024-11-29T10:40:13.000Z",
        },
        {
          id: 12,
          movie_id: 4,
          name: "Liam",
          vote: 4,
          text: "A unique take on reality and perception.",
          created_at: "2024-11-29T10:40:13.000Z",
          updated_at: "2024-11-29T10:40:13.000Z",
        },
      ],
    },
    {
      id: 4,
      title: "The Matrix",
      director: "The Wachowskis",
      genre: "Action",
      release_year: "1999",
      abstract:
        "A hacker discovers the truth about his reality and his role in the war against its controllers.",
      image: "https://picsum.photos/200/300",
      reviews: [
        {
          id: 10,
          movie_id: 4,
          name: "Jack",
          vote: 5,
          text: "A revolutionary film in every sense.",
          created_at: "2024-11-29T10:40:13.000Z",
          updated_at: "2024-11-29T10:40:13.000Z",
        },
        {
          id: 11,
          movie_id: 4,
          name: "Karen",
          vote: 4,
          text: "Great action and a thought-provoking plot.",
          created_at: "2024-11-29T10:40:13.000Z",
          updated_at: "2024-11-29T10:40:13.000Z",
        },
        {
          id: 12,
          movie_id: 4,
          name: "Liam",
          vote: 4,
          text: "A unique take on reality and perception.",
          created_at: "2024-11-29T10:40:13.000Z",
          updated_at: "2024-11-29T10:40:13.000Z",
        },
      ],
    },
    {
      id: 5,
      title: "Interstellar",
      director: "Christopher Nolan",
      genre: "Science Fiction",
      release_year: "2014",
      abstract:
        "A team of explorers travels through a wormhole in space to save humanity.",
      image: "https://picsum.photos/200/300",
      reviews: [
        {
          id: 10,
          movie_id: 4,
          name: "Jack",
          vote: 5,
          text: "A revolutionary film in every sense.",
          created_at: "2024-11-29T10:40:13.000Z",
          updated_at: "2024-11-29T10:40:13.000Z",
        },
        {
          id: 11,
          movie_id: 4,
          name: "Karen",
          vote: 4,
          text: "Great action and a thought-provoking plot.",
          created_at: "2024-11-29T10:40:13.000Z",
          updated_at: "2024-11-29T10:40:13.000Z",
        },
        {
          id: 12,
          movie_id: 4,
          name: "Liam",
          vote: 4,
          text: "A unique take on reality and perception.",
          created_at: "2024-11-29T10:40:13.000Z",
          updated_at: "2024-11-29T10:40:13.000Z",
        },
      ],
    },
  ];
  const { id } = useParams();
  const [movies, setMovies] = useState(initialMovies);
  const [movie, setMovie] = useState({
    reviews: [],
  });

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
      <div className="row g-4 mt-4">
        {movie.reviews.map((rew) => (
          <div className="col-12">
            <div className="card p-2 rounded">
              <h4>{rew.name}</h4>
              <p>{rew.vote}</p>
              <p>{rew.text}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MoviePage;
