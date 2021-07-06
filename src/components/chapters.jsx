import { Link, useHistory } from "react-router-dom";
import { useState } from "react";

const Chapters = ({ book }) => {
  const [chaptersDropdown, setDropdown] = useState(false);

  const history = useHistory();
  const navigate = (e, details,chapter) => {
    e.preventDefault();
    console.log({chapter});
    // let test = e.target.innerHTML;
    // console.log(test)
    // var targetchapter = test.slice(8, 10)
    // console.log(test, targetchapter, "testtt");
    history.push(`/passage/${details.abbrev.en}/${chapter}`, {details, chapter});
  }
  return (
    <div key={book.id}>
      <li onClick={() => setDropdown(!chaptersDropdown)}>{book.name}</li>
      {chaptersDropdown ? (
          <div className="chapters">
            {Array.from({ length: book.chapters }, (_, index) => {
                return (
                  <Link onClick={(e) => navigate(e, book, index + 1)}>
                <div className="chapterDiv">
                  <div className="chapterNum">{`chapter ${index + 1}`}</div>
                </div>
            </Link>
              );
            })}
          </div>
      ) : null}
    </div>
  );
};

export default Chapters;
