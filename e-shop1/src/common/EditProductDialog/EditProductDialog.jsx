import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {useDispatch, useSelector} from "react-redux";
import {openUpdateDialog, updateProductsList} from "../redux/ProductReducer";
import {
  Autocomplete,
  FormControl,
  InputAdornment,
  OutlinedInput,
  TextField,
} from "@mui/material";
import "./EditProductDialog.css";
import {formatDate} from "../../assets/scripts/formatDate";
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

export default function EditProductDialog() {
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.products.productsList);
  const [currentCategoryList, setCurrentCategoryList] = React.useState([]);
  const updateDialogOpen = useSelector(
    (state) => state.products.updateDialogOpen
  );
  const selectedProduct = useSelector(
    (state) => state.products.selectedProduct
  );
  const [updatedProduct, setUpdatedProduct] = React.useState(null);

  React.useEffect(() => {
    if (selectedProduct) {
      setUpdatedProduct(selectedProduct);
    }
  }, [selectedProduct]);

  React.useEffect(() => {
    if (productsList) {
      const categorylist = [
        ...new Set(productsList.map((product) => product.category)),
      ];
      setCurrentCategoryList(categorylist);
    }
  }, [productsList]);

  const handleClose = () => {
    dispatch(openUpdateDialog(false));
  };

  const handleConfirmEditProduct = () => {
    let newProductList = [...productsList];
    const updatedListItems = newProductList.map((product) => {
      if (product.id === updatedProduct.id) {
        console.log("FOUND IT ");
        return {...product, ...updatedProduct};
      } else {
        // No changes
        return product;
      }
    });
    dispatch(updateProductsList(updatedListItems));
    dispatch(openUpdateDialog(false));
  };
  const handleDateChange = (value) => {
    const date = new Date(value["$d"]);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const finalDate = `${year}-${month}-${day}`;
    setUpdatedProduct({...updatedProduct, uploadDate: finalDate});
  };
  const handleFormFieldUpdate = (fiedName) => (event) => {
    setUpdatedProduct({...updatedProduct, [fiedName]: event.target.value});
  };
  return (
    <div>
      <Dialog
        open={updateDialogOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Edit Product Detail</DialogTitle>
        <DialogContent className="add-product-form">
          <div>
            <TextField
              id="outlined-basic"
              label="Product Name"
              variant="outlined"
              value={updatedProduct?.name}
              onChange={handleFormFieldUpdate("name")}
            />
          </div>
          <div>
            <TextField
              id="outlined-basic"
              label="Product Desc"
              variant="outlined"
              value={updatedProduct?.desc}
              onChange={handleFormFieldUpdate("desc")}
            />
          </div>
          <div>
            <FormControl variant="outlined">
              <OutlinedInput
                placeholder="Product Price"
                id="outlined-adornment-weight"
                value={updatedProduct?.price}
                onChange={handleFormFieldUpdate("price")}
                type="number"
                endAdornment={<InputAdornment position="end">₹</InputAdornment>}
                aria-describedby="outlined-weight-helper-text"
              />
            </FormControl>
          </div>
          <div>
            <Autocomplete
              id="free-solo-demo"
              freeSolo
              value={updatedProduct?.category}
              onSelect={handleFormFieldUpdate("category")}
              options={currentCategoryList.map((option) => option)}
              renderInput={(params) => (
                <TextField {...params} label="Product Category" />
              )}
            />
          </div>
          <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Controlled picker"
                value={dayjs(updatedProduct?.uploadDate)}
                onChange={(newValue) => handleDateChange(newValue)}
              />
            </LocalizationProvider>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleConfirmEditProduct}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
