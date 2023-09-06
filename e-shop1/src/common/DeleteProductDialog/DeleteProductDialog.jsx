import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import {useDispatch, useSelector} from "react-redux";
import { openDeleteDialog, updateProductsList } from "../redux/ProductReducer";

export default function DeleteProductDialog() {
  const dispatch = useDispatch();
  const deleteDialogOpen = useSelector(
    (state) => state.products.deleteDialogOpen
  );
  const selectedProduct = useSelector(
    (state) => state.products.selectedProduct
  );

  const productsList = useSelector((state) => state.products.productsList);

  const handleClickOpen = () => {
    dispatch(openDeleteDialog(true));
  };

  const handleClose = () => {
    dispatch(openDeleteDialog(false));
  };

  const handleConfirmDelete = () => {
    const updateArr = productsList.filter((product) =>  product.id !== selectedProduct.id)
    dispatch(updateProductsList(updateArr))
    dispatch(openDeleteDialog(false));
  };
  return (
    <div>
      <Dialog
        open={deleteDialogOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {selectedProduct?.name}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this product ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleConfirmDelete} >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
