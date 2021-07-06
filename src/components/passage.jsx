import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";

const Passage = () => {
  const [chapterPassage, setPassage] = useState([]);
  const params = useParams();
  const { state } = useLocation();
  const { details, chapter } = state;
  const passage = `https://www.abibliadigital.com.br/api/verses/kjv/${details.abbrev.en}/${chapter}`;

  useEffect(() => {
    const getPassage = async () => {
      try {
        const res = await axios.get(passage);
        setPassage(res.data.verses);
      } catch (err) {
        return err
      }
    };
      
    getPassage();
  }, []);
  
  return (
    <div className="passageDiv">
    <div className="passageHeader">{details.abbrev.en} chapter {chapter}</div>
      <ul className="passage">
        {chapterPassage.map((chapter) => {
          return <li key={chapter.id}>{chapter.text}</li>;
        })}
      </ul>
    </div>
  );
};

export default Passage;
