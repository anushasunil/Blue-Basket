import {useContext, createContext, useReducer,useState} from "react";
import axios from "axios" 
import {useNavigate} from "react-router-dom"
import { v4 as uuid } from "uuid";
import { formatDate } from "../backend/utils/authUtils";
 
const SignUpContext = createContext("");

const defaultSignUpCredentials = {
    _id: uuid(),
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    createdAt: formatDate(),
    updatedAt: formatDate()
}

const setSignUpCredentials = (signUpCred, action) => {
    switch(action.type) {
        case "EMAIL" :
            return ({...signUpCred, email : action.payload})
        case "PASSWORD" :
            return ({...signUpCred, password : action.payload})
        case "FIRSTNAME" :
            return ({...signUpCred, firstName : action.payload})
        case "LASTNAME" :
            return ({...signUpCred, lastName : action.payload})
        
        default: return ({...signUpCred})
    }
}

const SignUpContextProvider = ({children}) => {
    
    const [acceptedTerms , setAcceptedTerms] = useState(false);
    const navigate = useNavigate()
    const [signUpCred, signUpDispatch] = useReducer(setSignUpCredentials,defaultSignUpCredentials);

    const signUpHandler = async (e, credentials) => {
        e.preventDefault()
        try {
            if(acceptedTerms)
            {
                const response = await axios.post("/api/auth/signup", credentials);
                console.log(response.status, "got the response");
                navigate("/login");
            }
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <SignUpContext.Provider value={{signUpCred, signUpDispatch, signUpHandler, setAcceptedTerms}}>
            {children}
        </SignUpContext.Provider>
    )
}

const useSignUp = () => useContext(SignUpContext);

export {SignUpContextProvider, useSignUp}