import React from "react";
import { useState } from "react";
const initialData = {
  name: "",
  vote: "",
  text: "",
};
const CreateReviewPage = () => {
  const [formData, setFormData] = useState(initialData);

  const setFieldValue = (e) => {
    console.log(e);
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Nuova recensione</h1>
          </div>
          <div className="col-12">
            <form onSubmit="">
              <div className="row g-3">
                <div className="col-12">
                  <label htmlFor="" className="control-label">
                    Name
                  </label>
                  <input
                    type="text"
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
              <button type="submit" className="btn btn-primary">
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
