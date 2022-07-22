import {useContext, createContext, useReducer,useState} from "react";
import axios from "axios" 
import {useNavigate} from "react-router-dom"
import { defaultSignUpCredentials, defaultSignUpStatus } from "../utility/utils";
import { setSignUpCredentials } from "../utility/utils";
 
const SignUpContext = createContext("");



const SignUpContextProvider = ({children}) => {
    
    const [acceptedTerms , setAcceptedTerms] = useState(false);
    const navigate = useNavigate()
    const [signUpCred, signUpDispatch] = useReducer(setSignUpCredentials,defaultSignUpCredentials);
    const [validationMessage, setValidationMessage] = useState("");
    const [passwordCheck, setPasswordCheck] = useState(true)


    const signUpHandler = async (e, credentials) => {
        e.preventDefault()
        try {

            const emptyFields = Object.keys(credentials).filter(creds => credentials[creds] === "")
            
            if(emptyFields.length === 0) {
                setValidationMessage("")
                if( passwordCheck) {
                    if(acceptedTerms)
                    {
                        const response = await axios.post("/api/auth/signup", credentials);
                        navigate("/");
                        setValidationMessage("")
                    }
                    else {
                        setValidationMessage("Please accept our terms and conditions.");
                    }
                }
                else {
                    setValidationMessage("Password does not match");
                }
            }
            else {
                setValidationMessage("Please fill all the fields.");
            }

        } catch (error) {
            console.error(error);
        }
    };


    return (
        <SignUpContext.Provider 
            value={{
                signUpCred, 
                signUpDispatch, 
                signUpHandler, 
                setAcceptedTerms,
                setValidationMessage,
                validationMessage,
                passwordCheck,
                setPasswordCheck
                }}
        >
            {children}
        </SignUpContext.Provider>
    )
}

const useSignUp = () => useContext(SignUpContext);

export {SignUpContextProvider, useSignUp}