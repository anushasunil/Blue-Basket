import { useState } from "react";
import "../Auth.css";
import { Link } from "react-router-dom";
import {useLogin} from "../../../contexts/login-context"

export function LoginPage() {
   
    document.title = "Login | BlueBasket"

    const [inputType, setInputType] = useState("password")
    const { 
        loginCred, 
        loginDispatch , 
        loginHandler, 
        validationMessage
    } = useLogin();

    const inputTypeHandler = () => {
        (inputType === "password")?
            setInputType("text")
            : 
            setInputType("password");
    }

    return (
        <div className="login-page-content">
             <div className="main-wrapper display-justify-center display-align-center">
                <div className="image-container">
                    <img src="/assets/ecomm-login.png" alt="header-img"/>
                </div>
            <form 
                className="login card-container" 
                onSubmit={(e) => {loginHandler(e, loginCred)}}>
                <div className="card for-login">
                    <div className="content">
                        <h3>Log In</h3>
                        <ul>
                            <li>
                                <label forlabel="Email-Address" className="semi-bold">
                                    Email Address
                                </label>
                                <div className="input-box display-flex-column">
                                    <div className="input-icon-container">
                                        <input 
                                        type="email" 
                                        placeholder="anusha@neog.camp" 
                                        className="flex-grow"
                                        onChange={(e)=>{
                                            if(e.target.value.length !== 0)
                                            loginDispatch({type: "EMAIL", payload: e.target.value})
                                        }}  
                                        />
                                    </div>
                                </div>
                            </li>
                            <li>
                                <label 
                                    forlabel="Password" 
                                    className="semi-bold"
                                >
                                        Password
                                </label>
                                <div className="input-box display-flex-column">
                                    <div className="input-icon-container">
                                        <input 
                                            type={inputType} 
                                            placeholder="password" 
                                            className="flex-grow"
                                            onChange={(e)=>{
                                                if(e.target.value.length !== 0)
                                                loginDispatch({type: "PASSWORD", payload: e.target.value})
                                            }}  
                                        />
                                        <i 
                                            className="fa-solid fa-eye inner-icon clickable-image"
                                            onClick={inputTypeHandler}
                                        ></i>
                                    </div>
                                </div>
                            </li>
                            <li>
                                {validationMessage && (<small className="validation-message bold">{validationMessage}</small>)} 
                            </li>
                        </ul>
                        <div className="actions display-align-center display-justify-space-between">
                            <div className="save-my-info display-align-center">
                                <input 
                                    type="checkbox" 
                                    name="remember-me" 
                                    className="checkbox"
                                />
                                <p className="bold">Save my Info</p>
                            </div>
                            <span>
                                <p className="bold clickable-image">Forgot your Password?</p>
                            </span>
                        </div>
                        <div className="action-btn display-flex-column">
                            <button 
                                className="solid-primary" 
                                type="submit"
                            >
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
            </form>
        </div>
        </div>
    )
}