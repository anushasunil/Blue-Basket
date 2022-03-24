import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "../pages/Home/Home";
import {MockbeeHome} from "../pages/mockApi/MockbeeHome/MockbeeHome"
import { MockmanComponent } from "../pages/mockApi/Mockman/MockmanComponent";
import { Nav } from "../components/Nav/Nav";
import { Cart } from "../pages/Cart/Cart";
import { Wishlist } from "../pages/Wishlist/Wishlist";
import { Auth } from "../pages/Authentication/Auth";
import { ErrorPage } from "../pages/Error/ErrorPage";


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
        <Route path="/auth" element={<Auth/>}/>
        <Route path="/404-page-not-found" element={<ErrorPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
