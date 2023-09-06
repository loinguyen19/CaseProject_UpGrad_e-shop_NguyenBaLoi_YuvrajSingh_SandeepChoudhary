import {Box, Button, Chip, TextField} from "@mui/material";
import "./ProductDetails.css";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import { fetchImage } from "../../assets/scripts/fetchImage";

const ProductDetails = () => {
  const [productImage, setProductImage] = useState("");
  const [quantity, setQuantity] = useState(0);
  const navigate = useNavigate();
  const selectedProduct = useSelector(
    (state) => state.products.selectedProduct
  );

  useEffect(() => {
    if (selectedProduct) {
      const img = fetchImage(selectedProduct.name);
      setProductImage(img);
    } else {
      navigate("/");
    }
  }, [selectedProduct]);

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };
  const handleBuyPressed =  () => {
    navigate("/order")
  }
  return (
    <Box sx={{flexGrow: 1}} className="product-details">
      <Box>
        <img src={productImage} alt="" width={350} />
      </Box>
      <Box className="product-details-container">
        <div className="product-title-container">
          <div className="product-title">{selectedProduct?.name}</div>
          <div>
            <Chip
              className="product-quantity-chip"
              label={`Available Quantity : 148`}
            />
          </div>
        </div>
        <div className="product-category">
          Category : {selectedProduct?.category}
        </div>
        <div className="product-desc">{selectedProduct?.desc}</div>
        <div className="product-price">₹ {selectedProduct?.price}</div>
        <div className="product-quantity">
          <TextField
            id="outlined-basic"
            value={quantity}
            onChange={handleQuantityChange}
            label="Enter Quantity *"
            variant="outlined"
            type="number"
          />
        </div>
        <div className="place-order-btn-container">
          <Button className="place-order-btn"  variant="contained" onClick={handleBuyPressed}>Buy</Button>
        </div>
      </Box>
    </Box>
  );
};

export default ProductDetails;
