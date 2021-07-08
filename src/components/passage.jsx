import { useState, useEffect,useCallback } from "react";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";

const Passage = () => {
  const [chapterPassage, setPassage] = useState([]);
  const params = useParams();
  const { name, chapter } = params;
  const { state } = useLocation();
  const { abbrev } = state;

  const getPassage = useCallback(async () => {
    try {
      const passage = `https://www.abibliadigital.com.br/api/verses/kjv/${abbrev.en}/${chapter}`;

      const res = await axios.get(passage);
      setPassage(res.data.verses);
    } catch (err) {
      console.log(err);
    }
  },[chapter, abbrev]);

  useEffect(() => {
    getPassage();
  }, [getPassage]);
  return (
    <div
      className="passageDiv"
      style={{ backgroundColor: "rgb(255, 234, 208)" }}
    >
      <div className="passageHeader">{`${name} chapter ${chapter}`}</div>
      <ul className="passage">
        {chapterPassage.map((chapter) => {
          return <li key={chapter.id}>{chapter.text}</li>;
        })}
      </ul>
    </div>
  );
};

export default Passage;
