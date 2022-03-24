import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css"



export function Footer() {
    return (
        <footer className=" display-justify-space-around display-align-center">
        <div className="brand-info">
            <h6>BlueBasket</h6>
            <p>Copyright © 2022</p>
            <p>All rights reserved</p>
            <div className="social-links display-justify-center display-align-center">
                    <FaGithub className="links"/>
                    <FaInstagram className="links"/>
                    <FaFacebook className="links"/>
            </div>
        </div>
        <div className="sitemap display-flex-column">
            <li>
               <Link to="/" className="links">Home</Link>
            </li>
            <li>
             <Link to="/404-page-not-found" className="links">About Us</Link>
            </li>
            <li>
            <Link to="/404-page-not-found" className="links">Products</Link>
            </li>
        </div>
        <div className="contact-you">
            <p>Subscribe</p>
            <div className="input-box">
                <div className="input-icon-container">
                    <input type="email" placeholder="email" className="flex-grow"/>
                    <button className="solid-secondary"> Join</button>
                </div>
            </div>
        </div>
    </footer>
    )
}