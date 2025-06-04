import React from "react";

const CreateReviewPage = () => {
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
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="" className="control-label">
                    Text
                  </label>
                  <textarea name="text" className="form-control"></textarea>
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
