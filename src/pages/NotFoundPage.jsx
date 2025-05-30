import React from "react";
import { Link } from "react-router-dom";
const NotFoundPage = () => {
  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <h2>Page not Found</h2>
        <p className="mt-3">Non è stato possibile caricare la pagina</p>
        <Link to="/" className="btn btn-primary">
          Torna alla Home
        </Link>
      </div>
    </>
  );
};

export default NotFoundPage;
