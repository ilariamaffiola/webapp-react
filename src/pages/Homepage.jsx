import React from "react";
import { Link } from "react-router-dom";
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
        <div className="col-lg-4 col-md-6 col-12">
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
        </div>
        <div className="col-lg-4 col-md-6 col-12">
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
        </div>
        <div className="col-lg-4 col-md-6 col-12">
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
        </div>
      </div>
    </>
  );
};

export default Homepage;
