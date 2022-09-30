import React from "react";
import { Logic } from "../services/utils";

const Form = () => {
  const {
    handleAddBookSubmit,
    setTitle,
    title,
    setAuthor,
    author,
    setIsbn,
    isbn,
  } = Logic();
  return (
    <React.Fragment>
      <div className="form-container">
        <form
          autoComplete="off"
          className="form-group"
          onSubmit={handleAddBookSubmit}
        >
          {/* MAPPING DATA FROM THE LOCAL STORAGE */}
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            required
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          ></input>
          <br></br>
          <label>Author</label>
          <input
            type="text"
            className="form-control"
            required
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
          ></input>
          <br></br>
          <label>ISBN No.</label>
          <input
            type="text"
            className="form-control"
            required
            onChange={(e) => setIsbn(e.target.value)}
            value={isbn}
          ></input>
          <br></br>
          <button type="submit" className="btn btn-success btn-md">
            ADD
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Form;
