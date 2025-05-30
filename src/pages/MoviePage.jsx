import React from "react";

const MoviePage = () => {
  return (
    <>
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4">
          <img
            className="img-fluid "
            src="https://picsum.photos/200/300"
            alt="Movie"
          />
        </div>
        <div className="col-12 col-md-6 col-lg-8">
          <h1 className="text-primary">Titolo</h1>
          <h4>
            <em>director</em>
          </h4>
          <p>genere</p>
          <p>anno di rilascio</p>
          <p>trama</p>
        </div>
      </div>
    </>
  );
};

export default MoviePage;
