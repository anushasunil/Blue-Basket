import { useEffect } from "react"
import { Link } from "react-router-dom"
import "../Auth.css"

export const SignUpPage = () => {
    useEffect(()=>{
        document.title = "Sign Up | BlueBasket"
    })
    return (
        <div className="main-wrapper signup-page-content display-justify-center display-align-center">
        <div className="image-container">
            <img src="/assets/ecomm-login.png" alt="header-img"/>
        </div>
        <div className="card-container">
            <div className="card for-login">
                <div className="content">
                    <h3>Sign Up</h3>
                    <ul>
                        <li>
                            <label forLabel="Email-Address" className="semi-bold">Email</label>
                            <div className="input-box display-flex-column">
                                <div className="input-icon-container">
                                    <input type="email" placeholder="anusha@neog.camp" className="flex-grow"/>
                                </div>
                            </div>
                        </li>
                        <li>
                            <label forLabel="Email-Address" className="semi-bold"> First Name</label>
                            <div className="input-box display-flex-column">
                                <div className="input-icon-container">
                                    <input type="email" placeholder="first name" className="flex-grow"/>
                                </div>
                            </div>
                        </li>
                        <li>
                            <label forLabel="Email-Address" className="semi-bold"> Last Name</label>
                            <div className="input-box display-flex-column">
                                <div className="input-icon-container">
                                    <input type="email" placeholder="last name" className="flex-grow"/>
                                </div>
                            </div>
                        </li>
                        <li>
                            <label forLabel="Password" className="semi-bold">Password</label>
                            <div className="input-box display-flex-column">
                                <div className="input-icon-container display-align-center">
                                    <input type="password" placeholder="password" className="flex-grow"/>
                                    <i className="fa-solid fa-eye inner-icon"></i>
                                </div>
                            </div>
                        </li>
                        <li>
                            <label forLabel="Password" className="semi-bold">Confirm Password</label>
                            <div className="input-box display-flex-column">
                                <div className="input-icon-container">
                                    <input type="password" placeholder="re-enter password" className="flex-grow"/>
                                    <i className="fa-solid fa-eye inner-icon"></i>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="actions display-align-center display-justify-center">
                        <div className="save-my-info display-align-center">
                            <input type="checkbox" name="remember-me" className="checkbox"/>
                            <p className="bold">I accept all Terms & Conditions</p>
                        </div>
                    </div>
                    <div className="action-btn display-flex-column">
                        <button className="solid-primary">
                            <p className="bold">Create New Account</p>
                        </button>
                        <button className="icon-with-text transparent display-align-center display-justify-center">
                            <p>
                               <Link to="/login">Already have an account</Link>
                            </p>
                            <i className="fa-solid fa-angle-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
