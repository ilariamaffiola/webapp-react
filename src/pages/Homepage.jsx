import React from "react";
import { Link } from "react-router-dom";

const InitialMovies = [
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
const Homepage = () => {
  return (
    <>
      <h1 className="text-primary my-4">Movie List</h1>
      <div className="row g-4">
        <div className="col-lg-4 col-md-6 col-12">
          <Link to="/movies/1" className="text-decoration-none">
            <div className="card">
              <div className="card-image-top d-flex justify-content-center">
                <img
                  className="img-fluid "
                  src="https://picsum.photos/200/300"
                  alt="Movie"
                />
              </div>
              <div className="card-body">
                <h3 className="text-primary">Titolo</h3>
                <h4>
                  <em>director</em>
                </h4>
                <p>genere</p>
                <p>anno di rilascio</p>
                <p>trama</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Homepage;
