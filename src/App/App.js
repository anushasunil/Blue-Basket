import { Routes, Route } from "react-router-dom";
import {Home, MockbeeHome, MockmanComponent, Nav, Cart, Wishlist, LoginPage,SignUpPage, ErrorPage, Footer, ProductListing} from "../../src/pages"

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/mockbee" element={<MockbeeHome/>}/>
        <Route path="/mockman" element={<MockmanComponent/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/mycart" element={<Cart/>}/>
        <Route path="/mywishlist" element={<Wishlist/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/sign-up" element={<SignUpPage/>}/>
        <Route path="*" element={<ErrorPage/>}/>
        <Route path="/products" element={<ProductListing/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
