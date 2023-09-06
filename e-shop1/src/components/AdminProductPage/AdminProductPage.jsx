import {Grid} from "@mui/material";
import {useEffect, useState} from "react";
import ProductCard from "../../common/ProductCard/ProductCard";
import {useSelector} from "react-redux";
import ProductSortFilter from "../../common/ProductSortFilter/ProductSortFilter";
import "./AdminProductPage.css";
import DeleteProductDialog from "../../common/DeleteProductDialog/DeleteProductDialog";
import AddProductDialog from "../../common/AddProductDialog/AddProductDialog";
import EditProductDialog from "../../common/EditProductDialog/EditProductDialog";
const AdminProductPage = () => {
  const productsList = useSelector((state) => state.products.productsList);

  const [productList, setProductList] = useState(productsList);

  const categoryToggleFilterValue = useSelector(
    (state) => state.filters.categoryToggleFilterValue
  );

  const dropDownListFilterValue = useSelector(
    (state) => state.filters.dropDownListFilterValue
  );

  const searchBarFilterValue = useSelector(
    (state) => state.filters.searchBarFilterValue
  );

  useEffect(() => {
    if (
      categoryToggleFilterValue &&
      categoryToggleFilterValue !== "" &&
      categoryToggleFilterValue !== "ALL"
    ) {
      filterAllProducts();
    } else {
      setProductList(productsList);
      filterAllProducts();
    }
  }, [categoryToggleFilterValue]);

  useEffect(() => {
    if (
      dropDownListFilterValue &&
      dropDownListFilterValue !== "" &&
      dropDownListFilterValue !== "Default"
    ) {
      filterAllProducts();
    } else {
      setProductList(productsList);
      filterAllProducts();
    }
  }, [dropDownListFilterValue]);

  useEffect(() => {
    if (searchBarFilterValue !== "") {
      filterAllProducts();
    } else {
      setProductList(productsList);
      filterAllProducts();
    }
  }, [searchBarFilterValue]);

  useEffect(() => {
    if (
      searchBarFilterValue === "" &&
      dropDownListFilterValue === "Default" &&
      categoryToggleFilterValue === "ALL"
    ) {
      setProductList(productsList);
    }
  }, [
    searchBarFilterValue,
    dropDownListFilterValue,
    categoryToggleFilterValue,
  ]);

  const filterAllProducts = () => {
    let filteredArr = [...productsList];
    if (categoryToggleFilterValue !== "ALL") {
      filteredArr = filterProductByCategory();
    }
    if (dropDownListFilterValue !== "") {
      sortProduct(filteredArr);
    }

    if (searchBarFilterValue !== "") {
      filteredArr = filteredArr.filter((product) =>
        product.name.includes(searchBarFilterValue)
      );
    }
    setProductList(filteredArr);
  };

  const filterProductByCategory = () => {
    return productsList.filter(
      (product) => product.category === categoryToggleFilterValue
    );
  };
  const sortProduct = (filteredArr) => {
    switch (dropDownListFilterValue) {
      case "HighToLow":
        filteredArr.sort((a, b) => b.price - a.price);
        break;
      case "LowToHigh":
        filteredArr.sort((a, b) => a.price - b.price);
        break;
      case "Newest":
        filteredArr.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      default:
        setProductList(productsList);
        break;
    }
  };

  return (
    <div className="product-list-container">
      <div>
        <ProductSortFilter />
      </div>
      <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
        {productList.length !== 0
          ? productList.map((product, index) => (
              <Grid
                xs={2}
                sm={4}
                md={4}
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "40px",
                }}
              >
                <ProductCard
                  isAdmin={true}
                  setProductList={setProductList}
                  product={product}
                  key={index}
                />
              </Grid>
            ))
          : "No Item Found"}
      </Grid>

      <DeleteProductDialog />
      <AddProductDialog />
      <EditProductDialog />
    </div>
  );
};

export default AdminProductPage;
