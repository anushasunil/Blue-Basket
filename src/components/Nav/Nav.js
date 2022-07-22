import "./Nav.css";
import { FaRegHeart, FaShoppingBasket, FaSearch, FaHome} from 'react-icons/fa'
import { Link } from "react-router-dom";

export function Nav() {
    return (
        <nav id="nav" className="display-align-center display-justify-space-evenly">
            
            <h3>
                <Link to="/" className="brand-name">BlueBasket</Link>
            </h3>
            <div className="input-box ">
                <div className="input-icon-container display-align-center ">
                    <FaSearch className="inner-icon clickable-image"/>
                    <input type="text" placeholder="Search" className="flex-grow"/>
                    <button className="solid-secondary">Search</button>
                </div>
            </div>
            <div className="actions display-align-center">
                <Link to="/login">
                    <button className="outline-secondary">
                        <p>LOG OUT</p>
                    </button>
                </Link>
                <div class="avatar-badge-container">
                   <Link to="/mywishlist">
                        <FaRegHeart className="icon clickable-image"/>
                   </Link>
                </div>
                <div class="avatar-badge-container">
                   <Link to="/mycart">
                       <FaShoppingBasket className="icon clickable-image"/>
                    </Link>
                </div>
                <div class="avatar-badge-container">
                   <Link to="/">
                       <FaHome className="icon clickable-image"/>
                    </Link>
                </div>
            </div>

        </nav>
    )
}