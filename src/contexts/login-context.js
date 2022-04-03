import {useContext, createContext, useReducer,useState} from "react";
import axios from "axios" 
import {useNavigate} from "react-router-dom"
import { useAxios } from "../utility/hooks/useAxios";
 
const LoginContext = createContext("");

const defaultCredentials = {
    email: "",
    password: ""
}

const setLoginCredentials = (loginCred, action) => {
    switch(action.type) {
        case "EMAIL" :
            return ({...loginCred, email : action.payload})
        case "PASSWORD" :
            return ({...loginCred, password : action.payload})
        default: return ({...loginCred})
    }
}

const LoginContextProvider = ({children}) => {
    
    const [validationMessage, setValidationMessage] = useState("");
    const navigate = useNavigate()
    const [loginCred, loginDispatch] = useReducer(setLoginCredentials,defaultCredentials);

    const loginHandler = async (e, credentials) => {
        e.preventDefault()

        try {
            const response = await axios.post("/api/auth/login", credentials);
            console.log(response.status, "got the response");
            if(response.status === 201)
                setValidationMessage("Incorrect Password, Please try again")
            else  {
                setValidationMessage("");
                navigate(-1);
                localStorage.setItem("token", response.data.encodedToken);
            }
        } catch (error) {
            console.log(error);
            if(credentials === defaultCredentials) 
                setValidationMessage("Please fill all the details");
            else
                setValidationMessage("Looks like you dont have an account, Create a New Account!")
        }
    };


    return (
        <LoginContext.Provider value={{loginCred, loginDispatch, loginHandler, validationMessage}}>
            {children}
        </LoginContext.Provider>
    )
}

const useLogin = () => useContext(LoginContext);

export {LoginContextProvider, useLogin}