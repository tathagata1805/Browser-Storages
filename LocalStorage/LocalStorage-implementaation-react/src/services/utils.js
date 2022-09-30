import { useState, useEffect } from "react";
import secureLocalStorage from "react-secure-storage";

export const Logic = () => {
  // ENCRYPTING LOCAL STORAGE DATA
  useEffect(() => {
    secureLocalStorage.setItem("books", {
      message: "This is a test message",
    });
  }, []);
  // GET THE VALUES FROM LOCAL STORAGE
  const getDatafromLS = () => {
    const data = localStorage.getItem("books");
    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  };

  // MAIN ARRAY OF BOOK OBJECT || BOOK STATE || BOOKS ARRAY OF OBJECTS
  const [books, setbooks] = useState(getDatafromLS());

  // INPUT FIELD STATES
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");

  // FORM SUBMIT EVENT HANLING
  const handleAddBookSubmit = (e) => {
    e.preventDefault();

    // CREATING AN OBJECT
    let book = {
      title,
      author,
      isbn,
    };
    setbooks([...books, book]);
    setTitle("");
    setAuthor("");
    setIsbn("");
  };

  // DELETING BOOK FROM LOCAL STORAGE
  const deleteBook = (isbn) => {
    const filteredBooks = books.filter((element, index) => {
      return element.isbn !== isbn;
    });
    setbooks(filteredBooks);
  };

  // SAVING DATA TO LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  // RETURNING

  return {
    handleAddBookSubmit,
    setTitle,
    title,
    setAuthor,
    author,
    setIsbn,
    isbn,
    books,
    setbooks,
    deleteBook,
  };
};
