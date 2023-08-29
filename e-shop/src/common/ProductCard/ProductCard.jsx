import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./ProductCard.css";
import {useDispatch} from "react-redux";
import {openDeleteDialog, openUpdateDialog, selectProduct} from "../redux/ProductReducer";
import {useNavigate} from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
export default function ProductCard({product, setProductList, isAdmin}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSelectProduct = () => {
    dispatch(selectProduct(product));
    navigate("/productDetails");
  };

  const handleOpenDeleteDialog = () => {
    dispatch(selectProduct(product));
    dispatch(openDeleteDialog(true));
  };

  const handleOpenEditDialog = () => {
    dispatch(selectProduct(product));
    dispatch(openUpdateDialog(true));
  };
  return (
    <Card sx={{width: "300px"}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="250"
        image={`${product.img}`}
      />
      <CardContent>
        <div className="card-title-container">
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>

          <Typography gutterBottom variant="h5" component="div">
            ₹ {product.price}
          </Typography>
        </div>

        <Typography variant="body2" color="text.secondary">
          {product.desc}
        </Typography>
      </CardContent>
      <CardActions className="card-actions">
        <Button
          className="buy-button"
          variant="contained"
          size="small"
          onClick={handleSelectProduct}
        >
          Buy
        </Button>
        {isAdmin ? (
          <div>
            <EditIcon sx={{cursor: "pointer"}}   onClick={handleOpenEditDialog} />
            <DeleteIcon
              sx={{marginLeft: "15px", cursor: "pointer"}}
              onClick={handleOpenDeleteDialog}
            />
          </div>
        ) : null}
      </CardActions>
    </Card>
  );
}
