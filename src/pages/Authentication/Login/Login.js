import { useEffect } from "react";
import "../Auth.css";
import { Link } from "react-router-dom";


export function LoginPage() {
    useEffect(()=>{
        document.title = "Login | BlueBasket"
    })

    return (
        <div className="login-page-content">
             <div className="main-wrapper display-justify-center display-align-center">
                <div className="image-container">
                    <img src="/assets/ecomm-login.png" alt="header-img"/>
                </div>
            <div className="card-container">
                <div className="card for-login">
                    <div className="content">
                        <h3>Log In</h3>
                        <ul>
                            <li>
                                <label for="Email-Address" className="semi-bold">
                                    Email Address
                                </label>
                                <div className="input-box display-flex-column">
                                    <div className="input-icon-container">
                                        <input 
                                        type="email" 
                                        placeholder="anusha@neog.camp" 
                                        className="flex-grow"
                                        />
                                    </div>
                                </div>
                            </li>
                            <li>
                                <label for="Password" className="semi-bold">Password</label>
                                <div className="input-box display-flex-column">
                                    <div className="input-icon-container">
                                        <input type="password" placeholder="password" className="flex-grow"/>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div className="actions display-align-center display-justify-space-between">
                            <div className="save-my-info display-align-center">
                                <input type="checkbox" name="remember-me" className="checkbox"/>
                                <p className="bold">Save my Info</p>
                            </div>
                            <span>
                                <p className="bold clickable-image">Forgot your Password?</p>
                            </span>
                        </div>
                        <div className="action-btn display-flex-column">
                            <button className="solid-primary">
                                <p className="bold">LOG IN</p>
                            </button>
                            <button className="icon-with-text transparent display-align-center display-justify-center">
                                <p>
                                   <Link to="/sign-up">Create a New Account</Link>
                                </p>
                                <i className="fa-solid fa-angle-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}