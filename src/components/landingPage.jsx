import pic from "../img/bible.jpg";
import {Link} from "react-router-dom";

const LandingPage = () => {
    return (
        <div className="landingPage" style={{background: `url(${pic})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundBlendMode: "lighten"}}>
            <button className="landingPageBtn"><Link to="/books">Read</Link></button>
        </div>
    )
}

export default LandingPage;