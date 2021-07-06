import { Link } from "react-router-dom";
import pic from "../img/bibles.jpg"

const Books = () => {
  return (
    <div className="booksBackground" style={{backgroundImage: `url(${pic})`}}>
      <div className="outerPadding">
        <div className="books">
          <div className="findBooks">
            <Link to="/findBooks">Find Books</Link>
          </div>
          <button className="booksBtn">
            <Link to="/version">Version</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Books;
