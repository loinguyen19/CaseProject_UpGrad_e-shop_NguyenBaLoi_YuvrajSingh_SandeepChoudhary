import {
  Box,
  Button,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import "./NewAddressForm.css";
import React from "react";
const NewAddressForm = ({handleSelectAddress}) => {
  const [myAddresses, setMyAddresses] = React.useState([
    "Address 1",
    "Address 2",
  ]);
  const [selectedAddress, setSelectedAddress] = React.useState("empty");
  const [newAddressForm, setNewAddressForm] = React.useState({
    name: "",
    contactNumber: "",
    street: "",
    city: "",
    state: "",
    landmark: "",
    zipCode: "",
  });
  const handleAddressSelectChange = (event) => {
    setSelectedAddress(event.target.value);
    handleSelectAddress(event.target.value);
  };

  const handleFormFieldUpdate = (fiedName) => (event) => {
    setNewAddressForm({...newAddressForm, [fiedName]: event.target.value});
  };

  const saveAddress = (event) => {
    let addressString = "";
    for (const key in newAddressForm) {
      if (newAddressForm.hasOwnProperty(key)) {
        const value = newAddressForm[key];
        addressString += value + ", ";
      }
    }
    addressString = addressString.slice(0, -2);
    if (addressString === ", , , , , , ") {
      alert("The form is empty");
    } else {
      const result = myAddresses.find((item) => item === addressString);
      if (result === undefined) {
        setMyAddresses([addressString, ...myAddresses]);
        emptyFormField();
      } else {
        alert("Address Already exists !");
      }
    }
  };

  const emptyFormField = () => {
    setNewAddressForm({
      name: "",
      contactNumber: "",
      street: "",
      city: "",
      state: "",
      landmark: "",
      zipCode: "",
    });
  };

  return (
    <>
      <Box>
        <InputLabel id="demo-simple-select-label">Select Address</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedAddress}
          sx={{width: "45%"}}
          onChange={handleAddressSelectChange}
        >
          <MenuItem disabled value="empty" selected>
            <em style={{display: "flex"}}>Select ...</em>
          </MenuItem>

          {myAddresses.map((label, index) => {
            return (
              <MenuItem key={index} value={label}>
                {" "}
                {label}{" "}
              </MenuItem>
            );
          })}
        </Select>
      </Box>
      <Box>
        Add Address
        <Box className="address-form">
          <div>
            <TextField
              id="outlined-basic"
              label="Name *"
              variant="outlined"
              placeholder="Name *"
              onChange={handleFormFieldUpdate("name")}
              value={newAddressForm.name}
            />
          </div>
          <div>
            <TextField
              id="outlined-basic"
              label="Contact Number *"
              variant="outlined"
              placeholder="Contact Number *"
              onChange={handleFormFieldUpdate("contactNumber")}
              value={newAddressForm.contactNumber}
            />
          </div>
          <div>
            <TextField
              id="outlined-basic"
              label="Street *"
              variant="outlined"
              placeholder="Street *"
              onChange={handleFormFieldUpdate("street")}
              value={newAddressForm.street}
            />
          </div>
          <div>
            <TextField
              id="outlined-basic"
              label="City *"
              variant="outlined"
              placeholder="City *"
              onChange={handleFormFieldUpdate("city")}
              value={newAddressForm.city}
            />
          </div>
          <div>
            <TextField
              id="outlined-basic"
              label="State *"
              variant="outlined"
              placeholder="State *"
              onChange={handleFormFieldUpdate("state")}
              value={newAddressForm.state}
            />
          </div>
          <div>
            <TextField
              id="outlined-basic"
              label="Landmark *"
              variant="outlined"
              placeholder="Landmark *"
              onChange={handleFormFieldUpdate("landmark")}
              value={newAddressForm.landmark}
            />
          </div>
          <div>
            <TextField
              id="outlined-basic"
              label="Zip Code *"
              variant="outlined"
              placeholder="Zip Code *"
              onChange={handleFormFieldUpdate("zipCode")}
              value={newAddressForm.zipCode}
            />
          </div>

          <Button className="saveAddressBtn" onClick={saveAddress}>Save Address</Button>
        </Box>
      </Box>
    </>
  );
};

export default NewAddressForm;
