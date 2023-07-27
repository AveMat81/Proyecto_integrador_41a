import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const Nav = ({onSearch}) => {
    return(
        <nav>
            <SearchBar onSearch={onSearch} />

            <Link to="/about">
               <button>ABOUT</button>
            </Link>

            <Link to="home">
            <button>HOME</button>
            </Link>            
        </nav>
    )
};

export default Nav;