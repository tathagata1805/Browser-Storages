import React from "react";
import { View } from "../components/View";
import { Logic } from "../services/utils";

const ViewContainer = () => {
  const { books, setbooks, deleteBook } = Logic();
  
  return (
    <React.Fragment>
      <div className="view-container">
        {books.length > 0 && (
          <>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>ISBN No.</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {/* INDIVIDUAL BOOK DELETE BUTTON */}
                  <View books={books} deleteBook={deleteBook} />
                </tbody>
              </table>
            </div>
            {/* DELETE BUTTON */}
            <button
              className="btn btn-danger btn-md"
              onClick={() => setbooks([])}
            >
              Remove All
            </button>
          </>
        )}
        {/* IF NO BOOKS TO SHOW IN THE LOCAL STORAGE */}
        {books.length < 1 && <div>No books are added yet</div>}
      </div>
    </React.Fragment>
  );
};

export default ViewContainer;
