import { v4 as uuid } from "uuid";
import { formatDate } from "../backend/utils/authUtils";

// Product Listing utility functions


const getRatingBadge = rating => {
    switch(rating) {
      case 1: 
      return (
      <div className="rating-container  badge display-align-center verybad">
        <p className="ratings-value">{rating}</p>
        <i className="fa-solid fa-star"></i>
      </div>
      );
      case 2: 
      return (
      <div className="rating-container  badge display-align-center bad">
        <p className="ratings-value">{rating}</p>
        <i className="fa-solid fa-star"></i>
      </div>
      );
      case 3: 
      return (
      <div className="rating-container  badge display-align-center okay">
        <p className="ratings-value">{rating}</p>
        <i className="fa-solid fa-star"></i>
      </div>
      );
      case 4: 
      return (
      <div className="rating-container  badge display-align-center good">
        <p className="ratings-value">{rating}</p>
        <i className="fa-solid fa-star"></i>
      </div>
      );
      case 5: 
      return (
      <div className="rating-container  badge display-align-center verygood">
        <p className="ratings-value">{rating}</p>
        <i className="fa-solid fa-star"></i>
      </div>
      );

      default: console.error("RATING SETTER BROKEN");
    }
}


const getUpdatedProductList = (productState, productsList) => {

    let temp = [...productsList];
   
     for(const i in productState) {
       switch(i) {
         case "SORT_BY" :
           if(productState[i] === "HIGH_TO_LOW")
             temp = temp.sort((a, b) => b.newPrice - a.newPrice);
           else if(productState[i] === "LOW_TO_HIGH")
             temp = temp.sort((a, b) => a.newPrice - b.newPrice);
           break;
         case "MATERIAL" :
           let filtersToBeApplied = [];
           for (const j in productState.material) {
             if(productState.material[j]) 
               filtersToBeApplied = filtersToBeApplied.concat([j]);
           }
           if(filtersToBeApplied.length !== 0) 
             temp = temp.filter(product => filtersToBeApplied.includes(product.material));
           break;
         case "PRICE" :
           temp = temp.filter(product => product.newPrice <= productState[i])
           break;
         case "RATING" :
           switch(productState[i]) {
             case "1": 
               temp = temp.filter(product => product.ratings >= 1);
               break;
             case "2": 
               temp = temp.filter(product => product.ratings >= 2);
               break;
             case "3": 
               temp = temp.filter(product => product.ratings >= 3);
               break;
             case "4": 
               temp = temp.filter(product => product.ratings >= 4);
               break;
           }
          break;
         default : return temp
       }
     }
     return temp
}

   
const filterOutContents = (productState, action) => {
    switch(action.type) {
      case "SORT_BY" :
        return {...productState, sortBy : action.payload}
      case "MATERIAL" :
        switch(action.payload) {
          case "COTTON" :
            return {...productState, material: {...productState.material, cotton : action.value}};
          case "RAYON" :
            return {...productState, material: {...productState.material, rayon : action.value}};
          case "SYNTHETIC" :
            return {...productState, material: {...productState.material, synthetic : action.value}};
          case "WOOL" :
            return {...productState, material: {...productState.material, wool : action.value}}
        }
        break;
      case "PRICE": 
        return {...productState, price: action.payload}
      case "RATING":
        return {...productState, rating: action.payload}
      default: return productState = {...defaultFilter} 
    }
}

const defaultFilter =  {
    rating: "",
    material : 
    {
      cotton: false,
      rayon: false,
      synthetic: false,
      wool: false
    },
    sortBy : "",
    price: Number.MAX_SAFE_INTEGER
}

// auth

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

// signup 

const defaultSignUpCredentials = {
  _id: uuid(),
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  createdAt: formatDate(),
  updatedAt: formatDate()
}

const defaultSignUpStatus = {
  passwordMatchCheck: "",
  allFieldsFilled: "",
  acceptedTerms: ""
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


 
export {getRatingBadge, getUpdatedProductList, filterOutContents, defaultFilter, defaultCredentials, setLoginCredentials, defaultSignUpCredentials, defaultSignUpStatus, setSignUpCredentials}
