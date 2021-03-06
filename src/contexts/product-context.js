import { createContext, useContext, useReducer } from "react";
import { useAxios } from "../utility/hooks/useAxios";
import { getRatingBadge, getUpdatedProductList, defaultFilter, filterOutContents} from "../utility/utils";

const ProductContext = createContext();

const ProductListingProvider = ({ children }) => {

  const [productState, productDispatch] = useReducer(filterOutContents,
   defaultFilter);

  const {loading , responseData, error} = useAxios("/api/products");

  let productArray = []

  if(!(loading || error)) 
      productArray = [...responseData.products]

  let filteredList = getUpdatedProductList(productState, productArray)

  return (
    <ProductContext.Provider value={{ productState, productDispatch, filteredList , defaultFilter, getRatingBadge}}>
      {children}
    </ProductContext.Provider>
  );
};

const useProduct = () => useContext(ProductContext);

export { ProductListingProvider, useProduct };
