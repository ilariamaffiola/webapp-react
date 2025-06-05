import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Stars from "../components/Stars";
import { Link } from "react-router-dom";
import { useLoader } from "../contexts/LoaderContext";

const MoviePage = () => {
  const { loader, setLoader } = useLoader();
  const { id } = useParams();
  const [movie, setMovie] = useState({
    reviews: [],
  });

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      const fetchMovie = () => {
        axios
          .get(`http://127.0.0.1:3000/api/movies/${id}`)
          .then((resp) => {
            setMovie(resp.data);
            setLoader(false);
          })
          .catch((err) => {
            console.log(err);
          });
      };
      fetchMovie();
    }, 3000);
  }, [id]);
  return (
    <>
      <div>{loader}</div>
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
          <p>
            <Stars vote={movie.average_vote} />
          </p>
        </div>
      </div>
      <div className="row g-4 mt-4">
        <div className="col-12">
          <Link className="text-decoration-none" to={`/movies/${id}/review`}>
            <button className="btn btn-primary">Aggiungi recensione</button>
          </Link>
        </div>
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
