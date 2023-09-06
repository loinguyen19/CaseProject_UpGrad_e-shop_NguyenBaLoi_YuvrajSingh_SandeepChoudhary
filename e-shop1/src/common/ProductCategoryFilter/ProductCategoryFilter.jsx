import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import {Typography} from "@mui/material";
import './ProductCategoryFilter.css'
import { useDispatch } from "react-redux";
import { selectCategoryFilter } from "../redux/FilterReducer";
export default function ProductCategoryFilter() {
  const [alignment, setAlignment] = React.useState("ALL");
  const dispatch = useDispatch()

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
    dispatch(selectCategoryFilter(newAlignment))
  };

  return (
    <ToggleButtonGroup
    className="toggle-btn-container"
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      <ToggleButton value="ALL" aria-label="left aligned">
        <Typography
          variant="body1"
          noWrap
          component="div"
          sx={{display: {xs: "none", sm: "block"}}}
        >
          ALL
        </Typography>
      </ToggleButton>
      <ToggleButton value="APPAREL" aria-label="centered">
        <Typography
          variant="body1"
          noWrap
          component="div"
          sx={{display: {xs: "none", sm: "block"}}}
        >
          APPAREL
        </Typography>
      </ToggleButton>
      <ToggleButton value="ELECTRONICS" aria-label="right aligned">
        <Typography
          variant="body1"
          noWrap
          component="div"
          sx={{display: {xs: "none", sm: "block"}}}
        >
          ELECTRONICS
        </Typography>
      </ToggleButton>
      <ToggleButton value="PERSONAL CARE" aria-label="justified">
        <Typography
          variant="body1"
          noWrap
          component="div"
          sx={{display: {xs: "none", sm: "block"}}}
        >
          PERSONAL CARE
        </Typography>
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
