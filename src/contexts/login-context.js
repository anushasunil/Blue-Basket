import {useContext, createContext, useReducer,useState} from "react";
import axios from "axios" 
import { useNavigate} from "react-router-dom"
import { defaultCredentials, setLoginCredentials } from "../utility/utils";
 
const LoginContext = createContext("");

const LoginContextProvider = ({children}) => {
    
    const [validationMessage, setValidationMessage] = useState("");
    const [inputType, setInputType] = useState("password");
    const navigate = useNavigate()
    const [loginCred, loginDispatch] = useReducer(setLoginCredentials,defaultCredentials);

    const loginHandler = async (e, credentials) => {
        e.preventDefault();

        try {
            const {data:{encodedToken}, status} = await axios.post("/api/auth/login", credentials);
            if(status === 201)
                setValidationMessage("Incorrect Password, Please try again");
            else  {
                setValidationMessage("");
                navigate(-1);
                localStorage.setItem("token", encodedToken);
            }
        } catch (error) {
            console.err(error);
            if(credentials === defaultCredentials) 
                setValidationMessage("Please fill all the details");
            else {
                navigate("/sign-up");
            }
                
        }
    };


    return (
        <LoginContext.Provider value={{
            loginCred, 
            loginDispatch, 
            loginHandler, 
            validationMessage, 
            inputType, 
            setInputType
        }}>
            {children}
        </LoginContext.Provider>
    )
}

const useLogin = () => useContext(LoginContext);

export {LoginContextProvider, useLogin}