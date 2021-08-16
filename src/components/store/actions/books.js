import axios from "axios";
import { FETCHED_BOOKS } from "./actionTypes";

const fetchBooks = (payload) => (dispatch, getState) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get(
        "https://www.abibliadigital.com.br/api/books"
      );
      dispatch({ type: FETCHED_BOOKS, payload: res.data });
      resolve(res.data);
    } catch (err) {
      reject(err);
    }
  });
};

export default fetchBooks;
