import { useState } from "react"
import { Link } from "react-router-dom"
import "../Auth.css"
import { useSignUp } from "../../../contexts/signup-context"

const SignUpPage = () => {
    document.title = "Sign Up | BlueBasket"
    
    const { 
        signUpCred, 
        signUpDispatch, 
        setAcceptedTerms, 
        signUpHandler, 
        validationMessage, 
        setPasswordCheck
    } = useSignUp();
    const [inputType, setInputType] = useState("password");

    const inputTypeHandler = () => {
        (inputType === "password")?
            setInputType("text")
            : 
            setInputType("password");
    }

    return (
        <div className="main-wrapper signup-page-content display-justify-center display-align-center">
        <div className="image-container">
            <img src="/assets/ecomm-login.png" alt="header-img"/>
        </div>
        <form className="card-container" onSubmit={(e) => signUpHandler(e, signUpCred)}>
            <div className="card for-login">
                <div className="content">
                    <h3>Sign Up</h3>
                    <ul>
                        <li>
                            <label 
                                forlabel="Email-Address" 
                                className="semi-bold"
                            >
                                Email
                            </label>
                            <div className="input-box display-flex-column">
                                <div className="input-icon-container">
                                    <input 
                                        type="email" 
                                        placeholder="anusha@neog.camp" 
                                        className="flex-grow"
                                        onChange={(e)=>{
                                            if(e.target.value.length !== 0)
                                            signUpDispatch({type: "EMAIL", payload: e.target.value})
                                        }} 
                                    />
                                </div>
                            </div>
                        </li>
                        <li>
                            <label forlabel="First-Name" className="semi-bold"> First Name</label>
                            <div className="input-box display-flex-column">
                                <div className="input-icon-container">
                                    <input 
                                        type="text" 
                                        placeholder="first name" 
                                        className="flex-grow"
                                        onChange={(e)=>{
                                            if(e.target.value.length !== 0)
                                            signUpDispatch({type: "FIRSTNAME", payload: e.target.value})
                                        }} 
                                    />
                                </div>
                            </div>
                        </li>
                        <li>
                            <label forlabel="Last-Name" className="semi-bold"> Last Name</label>
                            <div className="input-box display-flex-column">
                                <div className="input-icon-container">
                                    <input 
                                        type="text" 
                                        placeholder="last name" 
                                        className="flex-grow"
                                        onChange={(e)=>{
                                            if(e.target.value.length !== 0)
                                            signUpDispatch({type: "LASTNAME", payload: e.target.value})
                                        }}

                                    />
                                </div>
                            </div>
                        </li>
                        <li>
                            <label forlabel="Password" className="semi-bold">Password</label>
                            <div className="input-box display-flex-column">
                                <div className="input-icon-container display-align-center">
                                    <input 
                                        type="password" 
                                        placeholder="password" 
                                        className="flex-grow"
                                        onChange={(e)=>{
                                            if(e.target.value.length !== 0)
                                            signUpDispatch({type: "PASSWORD", payload: e.target.value})
                                        }}
                                    />
                                    <i className="fa-solid fa-eye inner-icon" onClick={inputTypeHandler}></i>
                                </div>
                            </div>
                        </li>
                        <li>
                            <label forlabel="Password" className="semi-bold">Confirm Password</label>
                            <div className="input-box display-flex-column">
                                <div className="input-icon-container">
                                    <input 
                                        type="password" 
                                        placeholder="re-enter password" 
                                        className="flex-grow"
                                        onChange={(e)=>{
                                            (signUpCred.password !== e.target.value && signUpCred.password.length <= e.target.value.length)?
                                                setPasswordCheck(false)
                                                :
                                                setPasswordCheck(true)
                                        }}
                                    />
                                    <i className="fa-solid fa-eye inner-icon"  onClick={inputTypeHandler}></i>
                                </div>
                            </div>
                        </li>
                        <li><small className="validation-message bold">{validationMessage}</small></li>
                    </ul>
                    <div className="actions display-align-center display-justify-center">
                        <div className="save-my-info display-align-center">
                            <input 

                                type="checkbox" 
                                name="accepted terms" 
                                className="checkbox"
                                onChange={(e)=>{
                                    setAcceptedTerms(e.target.checked)
                                }}
                            />
                            <p className="bold">I accept all Terms & Conditions</p>
                        </div>
                    </div>
                    <div className="action-btn display-flex-column">
                        <button className="solid-primary" type="submit">
                            <p className="bold" >Create New Account</p>
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
        </form>
    </div>
    )
}


export {SignUpPage}