import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const CreateReviewPage = () => {
  const { id } = useParams();
  const initialData = {
    movie_id: parseInt(id),
    name: "",
    vote: null,
    text: "",
  };
  const [formData, setFormData] = useState(initialData);
  const navigate = useNavigate();

  const setFieldValue = (e) => {
    const { value, name } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://127.0.0.1:3000/api/movies/reviews`, formData)
      .then(() => {
        navigate(`/movies/${id}`);
      });
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Nuova recensione</h1>
          </div>
          <div className="col-12">
            <form onSubmit={handleSubmit}>
              <div className="row g-4">
                <div className="col-12">
                  <label htmlFor="" className="control-label">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Nome"
                    value={formData.name}
                    onChange={setFieldValue}
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="" className="control-label">
                    Vote
                  </label>
                  <input
                    type="number"
                    name="vote"
                    className="form-control"
                    placeholder="Vote"
                    value={formData.vote}
                    onChange={setFieldValue}
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="" className="control-label">
                    Text
                  </label>
                  <textarea
                    name="text"
                    className="form-control"
                    value={formData.text}
                    onChange={setFieldValue}
                  ></textarea>
                </div>
              </div>
              <button type="submit" className="btn btn-primary mt-4">
                Invia Recensione
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateReviewPage;
