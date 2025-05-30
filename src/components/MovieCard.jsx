import React from "react";
import { Link } from "react-router-dom";
const MovieCard = ({ movie }) => {
  return (
    <>
      <div className="col-lg-4 col-md-6 col-12">
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
    </>
  );
};

export default MovieCard;
