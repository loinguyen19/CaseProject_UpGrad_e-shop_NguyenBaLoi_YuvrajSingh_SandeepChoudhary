import * as React from "react";
import Button from "@mui/material/Button";
 
import {useDispatch, useSelector} from "react-redux";
import {
  openAddProductDialog,
  updateProductsList,
} from "../redux/ProductReducer";
import {
  Autocomplete,
  FormControl,
  InputAdornment,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
// import "./AddProductDialog.css";
import {fetchImage} from "../../assets/scripts/fetchImage";
import {formatDate} from "../../assets/scripts/formatDate";

export default function AddProduct() {
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.products.productsList);

  const [newProduct, setNewProduct] = React.useState({
    id: Math.max(...productsList.map((o) => o.id)) + 1,
    name: "",
    category: "",
    price: "",
    img: fetchImage("defaultImage"),
    uploadDate: formatDate(new Date()),
    desc: "",
    manufacturer:""
  });

  const [currentCategoryList, setCurrentCategoryList] = React.useState([]);

  const addProductDialogOpen = useSelector(
    (state) => state.products.addProductDialogOpen
  );
  React.useEffect(() => {
    if (productsList) {
      const categorylist = [
        ...new Set(productsList.map((product) => product.category)),
      ];
      setCurrentCategoryList(categorylist);
    }
  }, [productsList]);

  const handleClickOpen = () => {
    dispatch(openAddProductDialog(true));
  };

  const handleClose = () => {
    dispatch(openAddProductDialog(false));
  };

  const handleConfirmAddNewProduct = () => {
    let newProductList = [...productsList];
    newProductList.push(newProduct);
    dispatch(updateProductsList(newProductList));
    dispatch(openAddProductDialog(false));
  };

  const handleFormFieldUpdate = (fiedName) => (event) => {
    setNewProduct({...newProduct, [fiedName]: event.target.value});
  };
  return (
    <div>
     <Typography as="h1">Add Product</Typography>
     <br/>
          <div>
            <TextField
              id="outlined-basic"
              label="Product Name"
              variant="outlined"
              value={newProduct.name}
              onChange={handleFormFieldUpdate("name")}
            />
          </div>
          <br/>
          <div>
            <TextField
              id="outlined-basic"
              label="Product Desc"
              variant="outlined"
              value={newProduct.desc}
              onChange={handleFormFieldUpdate("desc")}
            />
          </div>
          <br/>
          <div>
          <TextField
              id="outlined-basic"
              label="Manufacturer"
              variant="outlined"
              value={newProduct.manufacturer}
              onChange={handleFormFieldUpdate("name")}
            />
          </div>
          <br/>
          <div>
            <FormControl variant="outlined">
              <OutlinedInput
                placeholder="Product Price"
                id="outlined-adornment-weight"
                value={newProduct.price}
                onChange={handleFormFieldUpdate("price")}
                type="number"
                endAdornment={<InputAdornment position="end">₹</InputAdornment>}
                aria-describedby="outlined-weight-helper-text"
              />
            </FormControl>
          </div>
          <br/>
          <div>
          <FormControl variant="outlined">
          <Autocomplete
              id="free-solo-demo"
              freeSolo
              value={newProduct.category}
              onSelect={handleFormFieldUpdate("category")}
              options={currentCategoryList.map((option) => option)}
              renderInput={(params) => (
                <TextField {...params} label="Product Category" />
              )}
            />
            </FormControl>
            
          </div>
         
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleConfirmAddNewProduct}>Add</Button>
         
    </div>
  );
}
