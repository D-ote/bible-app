import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { FiArchive } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Chapters from "./chapters";

const FindBooks = () => {
  const [books, setBooks] = useState([]);
  const [originalBooks, setOriginalBooks] = useState([]);
  const [search, setSearch] = useState();

  const getBooks = async () => {
    try {
      const res = await axios.get(
        "https://www.abibliadigital.com.br/api/books"
      );
      setBooks(res.data);
      setOriginalBooks(res.data)
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);


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
        <li className="ref">
          <BsChevronLeft className="backIcon" /> References
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
          <li>Books</li>
          <li><BsChevronRight className="backIcon" /></li>
          <li>Chapters</li>
          <li><BsChevronRight className="backIcon" /></li>
          <li>Passage</li>
        </ul>
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

export default FindBooks;
