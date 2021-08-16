import { BsChevronLeft } from "react-icons/bs";
import { FiArchive } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import React, { useState, useEffect } from "react";
import Chapters from "./chapters";
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import fetchBooks from "./store/actions/books";

const FindBooks = (props) => {
  const [books, setBooks] = useState([]);
  const [originalBooks, setOriginalBooks] = useState([]);
  const [search, setSearch] = useState();

  useEffect(() => {
    props.fetchBooks()
    .catch(err=>{
      console.log({err});
    })
  }, []);

  useEffect(() => {
    setBooks(props.books)
    setOriginalBooks(props.books)
  }, [props.books]);

  const findSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    const searchValue = e.target.value
    const newList = originalBooks.filter((book) => {
      return book.name.includes(searchValue);
    }) 
    setBooks(newList);
  };

  return (
    <>
      <ul className="header">
        <li className="ref"><Link to="/books">
          <BsChevronLeft className="backIcon" /></Link> References
        </li>
        <li className="findBookIcon">
          <FiArchive />
        </li>
        <li className="findBookIcon">
          <FiArchive />
        </li>
      </ul>
      <div className="bibleBooksDiv">
        <ul className="bibleBooksHeader">
          <li className="padded">Books</li>
          <li className="padded">Chapters</li>
          <li className="padded">Passage</li>
        </ul>
        <div className="underline"></div>
        <form action="search">
          <BiSearch className="findBooksSearchIcon" />
          <input
            type="search"
            name="findBookSearch"
            className="findBookSearch"
            placeholder="Search"
            value={search}
            onChange={findSearch}
          />
        </form>
        <div className="bibleBooks">
          <ul>
            {books.map((book) => {
              return <Chapters book={book} />;
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log({state});
  return{
    books:state.booksReducer.books
  }
}

export default connect(mapStateToProps, {fetchBooks})(FindBooks);