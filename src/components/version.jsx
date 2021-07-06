import axios from "axios";
import { BsChevronLeft } from "react-icons/bs"
import { useState, useEffect } from "react";

const Version = () => {
    const [ version, setVersion ] = useState([]);

  const displayVerison = () => {
    const version = "https://www.abibliadigital.com.br/api/versions"

    axios.get(version).then((res) => { 
        
        setVersion(res.data) })
  }

  useEffect(() => {
    displayVerison()
  }, [])
  
    return (
        <div className="version"><div className="versionHeader"><BsChevronLeft className="backIcon" /> VERSIONS</div>
            <ul className="versionList">
                { version.map((version) => 
                    <li key={version.verses}>{version.version}</li>
                ) }
            </ul>
        </div>
    )
}

export default Version;