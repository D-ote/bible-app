import "./App.css";
import LandingPage from "./components/landingPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Books from "./components/books";
import FindBooks from "./components/findBooks";
import Version from "./components/version";
import Passage from "./components/passage";

function App() {
  return (
    <Router>
      <Route path="/" exact component = {LandingPage} />
      <Route path="/books" exact component = {Books} />
      <Route path="/findBooks" exact component = {FindBooks} />
      <Route path="/version" exact component = {Version} />
      <Route path="/passage/:abrev/:chapter" exact component = {Passage} />
    </Router>
  );
}

export default App;