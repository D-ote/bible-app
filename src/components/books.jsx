
import {Link} from "react-router-dom";

const Books = () => {
  

  return (
    <div className="outerPadding">
      <div className="books">
        <div className="findBooks"><Link to="/findBooks">Find Books</Link></div>
        <button className="booksBtn"><Link to="/version">Version</Link></button>
      </div>
    </div>
  );
};

export default Books;
