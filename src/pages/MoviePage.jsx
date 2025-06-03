import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Stars from "../components/Stars";

const MoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({
    reviews: [],
  });

  const fetchMovie = () => {
    axios
      .get(`http://127.0.0.1:3000/api/movies/${id}`)
      .then((resp) => {
        setMovie(resp.data);
      })
      .catch((err) => {
        console.log(err);
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
          <div className="col-12" key={`rew-${rew.id}`}>
            <div className="card p-2 rounded">
              <h4>{rew.name}</h4>
              <p>
                <Stars vote={rew.vote} />
              </p>
              <p>{rew.text}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MoviePage;
