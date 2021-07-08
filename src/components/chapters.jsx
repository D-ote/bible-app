import { Link, useHistory } from "react-router-dom";
import { useState } from "react";

const Chapters = ({ book }) => {
  const [chaptersDropdown, setDropdown] = useState(false);

  const history = useHistory();
  const navigate = (e, details, chapter) => {
    e.preventDefault();
    history.push(`/passage/${details.name}/${chapter}`, {
      abbrev: details.abbrev,
    });
  };
  return (
    <div key={book.id}>
      <li onClick={() => setDropdown(!chaptersDropdown)}>{book.name}</li>
      {chaptersDropdown ? (
        <div className="chapters">
          {Array.from({ length: book.chapters }, (_, index) => {
            return (
              <Link onClick={(e) => navigate(e, book, index + 1)}>
                <div className="chapterDiv" key={index.id}>
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
