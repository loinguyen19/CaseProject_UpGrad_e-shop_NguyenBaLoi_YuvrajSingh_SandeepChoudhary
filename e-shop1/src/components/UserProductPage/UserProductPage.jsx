import {Grid} from "@mui/material";
import {useEffect, useState} from "react";
import ProductCard from "../../common/ProductCard/ProductCard";
import shoes1 from "../../assets/images/shoes1.jpg";
import shoes2 from "../../assets/images/shoes2.jpg";
import airpods from "../../assets/images/airpods.jpg";
import bose from "../../assets/images/bose.jpg";
import iphoneX from "../../assets/images/iphoneX.jpg";
import jeans from "../../assets/images/jeans.jpg";
import {useSelector} from "react-redux";
import ProductSortFilter from "../../common/ProductSortFilter/ProductSortFilter";
const staticData = [
  {
    img: shoes1,
    name: "Nike 1",
    desc: "A high-quality product with great features.",
    price: 99.99,
    category: "APPAREL",
    uploadDate: "2023-08-14",
  },
  {
    img: shoes2,
    name: "Nike 2",
    desc: "An elegant and stylish accessory for any occasion.",
    price: 49.95,
    category: "APPAREL",
    uploadDate: "2023-08-12",
  },
  {
    img: airpods,
    name: "Airpods",
    desc: "A versatile tool that makes your tasks easier.",
    price: 29.5,
    category: "ELECTRONICS",
    uploadDate: "2023-08-10",
  },
  {
    img: bose,
    name: "Bose Headset",
    desc: "A delicious treat that brings joy to your taste buds.",
    price: 5.99,
    category: "ELECTRONICS",
    uploadDate: "2023-08-09",
  },
  {
    img: iphoneX,
    name: "Iphone X",
    desc: "A captivating book that takes you on an adventure.",
    price: 12.95,
    category: "ELECTRONICS",
    uploadDate: "2023-08-08",
  },
  {
    img: jeans,
    name: "Levis Jeans",
    desc: "A comfortable and trendy piece of clothing.",
    price: 39.99,
    category: "APPAREL",
    uploadDate: "2023-08-07",
  },
];

const UserProductPage = () => {
  const [productList, setProductList] = useState(staticData);
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
      setProductList(staticData);
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
      setProductList(staticData);
      filterAllProducts();
    }
  }, [dropDownListFilterValue]);

  useEffect(() => {
    if (searchBarFilterValue !== "") {
      filterAllProducts();
    } else {
      setProductList(staticData);
      filterAllProducts();
    }
  }, [searchBarFilterValue]);

  useEffect(() => {
    if (
      searchBarFilterValue === "" &&
      dropDownListFilterValue === "Default" &&
      categoryToggleFilterValue === "ALL"
    ) {
      setProductList(staticData);
    }
  }, [
    searchBarFilterValue,
    dropDownListFilterValue,
    categoryToggleFilterValue,
  ]);

  const filterAllProducts = () => {
    let filteredArr = [...staticData];
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
    return staticData.filter(
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
        setProductList(staticData);
        break;
    }
  };
  return (
    <div>
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
                  setProductList={setProductList}
                  product={product}
                  key={index}
                />
              </Grid>
            ))
          : "No Item Found"}
      </Grid>
    </div>
  );
};

export default UserProductPage;
