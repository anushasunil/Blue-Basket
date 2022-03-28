import { createContext, useContext, useReducer } from "react";
import { useAxios } from "../utility/hooks/useAxios";
import {products} from "../backend/db/products"

const ProductContext = createContext();

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


const getRatingBadge = rating => {
    switch(rating) {
      case 1: 
      return (
      <div class="rating-container  badge display-align-center verybad">
        <p class="ratings-value">{rating}</p>
        <i class="fa-solid fa-star"></i>
      </div>
      );
      case 2: 
      return (
      <div class="rating-container  badge display-align-center bad">
        <p class="ratings-value">{rating}</p>
        <i class="fa-solid fa-star"></i>
      </div>
      );
      case 3: 
      return (
      <div class="rating-container  badge display-align-center okay">
        <p class="ratings-value">{rating}</p>
        <i class="fa-solid fa-star"></i>
      </div>
      );
      case 4: 
      return (
      <div class="rating-container  badge display-align-center good">
        <p class="ratings-value">{rating}</p>
        <i class="fa-solid fa-star"></i>
      </div>
      );
      case 5: 
      return (
      <div class="rating-container  badge display-align-center verygood">
        <p class="ratings-value">{rating}</p>
        <i class="fa-solid fa-star"></i>
      </div>
      );

      default: console.error("RATING SETTER BROKEN");
    }
}


const getUpdatedProductList = (state, productsList) => {

 let temp = [...productsList];

  for(const i in state) {
    switch(i) {
      case "sortBy" :
        if(state[i] === "HIGH_TO_LOW")
          temp = temp.sort((a, b) => b.newPrice - a.newPrice);
        else if(state[i] === "LOW_TO_HIGH")
          temp = temp.sort((a, b) => a.newPrice - b.newPrice);
        break;
      case "material" :

        let filtersToBeApplied = [];
        for (const j in state.material) {
          if(state.material[j]) 
            filtersToBeApplied = filtersToBeApplied.concat([j]);
        }
        if(filtersToBeApplied.length !== 0) 
          temp = temp.filter(product => filtersToBeApplied.includes(product.material));
        break;
      case "price" :
        temp = temp.filter(product => product.newPrice <= state[i])
        break;
      case "rating" :
        switch(state[i]) {
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
      case "price" :
        temp = temp.filter(product => product.newPrice <= state[i])
        break;
      default : return temp
    }
  }
  return temp
}


const filterOutContents = (state, action) => {
  switch(action.type) {
    case "sortBy" :
      return {...state, sortBy : action.payload}
    case "material" :
      switch(action.payload) {
        case "cotton" :
          return {...state, material: {...state.material, cotton : action.value}};
        case "rayon" :
          return {...state, material: {...state.material, rayon : action.value}};
        case "synthetic" :
          return {...state, material: {...state.material, synthetic : action.value}};
        case "wool" :
          return {...state, material: {...state.material, wool : action.value}}
      }
    case "price": 
      return {...state, price: action.payload}
    case "rating":
      return {...state, rating: action.payload}
    default: return state = {...defaultFilter} 
  }
};

const ProductListingProvider = ({ children }) => {

  const [state, dispatch] = useReducer(filterOutContents,
   defaultFilter);

  const {loading , responseData, error} = useAxios("/api/products");

  let productArray = []

  if(!(loading || error)) 
      productArray = [...responseData.products]

  let filteredList = getUpdatedProductList(state, productArray)

  return (
    <ProductContext.Provider value={{ state, dispatch, filteredList , defaultFilter, getRatingBadge}}>
      {children}
    </ProductContext.Provider>
  );
};

const useProduct = () => useContext(ProductContext);

export { ProductListingProvider, useProduct };
