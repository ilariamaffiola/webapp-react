import React from "react";

const Homepage = () => {
  return (
    <>
      <h1 className="text-primary">Movie List</h1>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-12">
          <div className="card">
            <div className="card-image-top">
              <img src="https://picsum.photos/200/300" alt="Movie" />
            </div>
            <div className="card-body">
              <h3 className="text-primary"></h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
