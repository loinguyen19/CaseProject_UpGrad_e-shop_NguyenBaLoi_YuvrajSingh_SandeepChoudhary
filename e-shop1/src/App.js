import "./App.css";
import {Route, Routes, useLocation} from "react-router-dom";
import UserProductPage from "./components/UserProductPage/UserProductPage";
import NavBar from "./common/NavBar/NavBar";
import Filters from "./common/Filters/Filters";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import OrderDetailStepper from "./components/OrderDetailStepper/OrderDetailStepper";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import AdminProductPage from "./components/AdminProductPage/AdminProductPage";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import AddProductDialog from "./common/AddProductDialog/AddProductDialog";
import AddProduct from "./common/AddProduct/AddProduct";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <ToastContainer />
      <NavBar />
     {location.pathname !== '/order' ? <Filters /> : null}

      <Routes>
        <Route path="/" element={<UserProductPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<UserProductPage />} />
        <Route path="/products/admin" element={<AdminProductPage />} />
        <Route path="/productDetails" element={<ProductDetails />} />
        <Route path="/order" element={<OrderDetailStepper />} />
        <Route path="/addProduct" element={<AddProduct/>} />

      </Routes>
    </div>
  );
}

export default App;
