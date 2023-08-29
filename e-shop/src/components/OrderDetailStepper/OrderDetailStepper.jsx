import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import NewAddressForm from "../../common/NewAddressForm/NewAddressForm";
import {Alert, Snackbar} from "@mui/material";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import "./OrderDetailStepper.css";
import {useSelector} from "react-redux";
const steps = ["Items", "Select Address", "Confirm Order"];

export default function OrderDetailStepper() {
  const selectedProduct = useSelector(
    (state) => state.products.selectedProduct
  );

  const [activeStep, setActiveStep] = React.useState(1);
  const [skipped, setSkipped] = React.useState(new Set());
  const [selectedAddress, setSelectedAddress] = React.useState("empty");
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (selectedProduct === undefined || selectedProduct === null) {
      navigate("/");
    }
  }, [selectedProduct]);

  const notify = () => {
    toast.info("Please Select an Address", {
      position: "top-right",
      autoClose: 15000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0,
      progressStyle: {background: "white"},
      theme: "colored",
      style: {background: "red", color: "white"},
    });
  };

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleSelectAddress = (value) => {
    console.log(value);
    setSelectedAddress(value);
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (selectedAddress !== "empty") {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped(newSkipped);
    } else {
      notify();
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const confirmOrder = () => {
    navigate("/");
    toast.info("Order placed successfully", {
      position: "top-right",
      autoClose: 15000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0,
      progressStyle: {background: "white"},
      theme: "colored",
      style: {background: "green", color: "white"},
    });
  };

  return (
    <Box className="stepper-container">
      <Stepper activeStep={activeStep} className="stepper-items">
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{mt: 2, mb: 1}}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{display: "flex", flexDirection: "row", pt: 2}}>
            <Box sx={{flex: "1 1 auto"}} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {activeStep === 1 ? (
            <NewAddressForm handleSelectAddress={handleSelectAddress} />
          ) : activeStep === 2 ? (
            <Button className="confirmButton" onClick={confirmOrder}>
              Confirmer
            </Button>
          ) : null}
          <Box></Box>
          <Box sx={{display: "flex", flexDirection: "row", pt: 2}}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{mr: 1}}
            >
              Back
            </Button>
            <Box sx={{flex: "1 1 auto"}} />
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>

          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error" sx={{width: "100%"}}>
              Please Select an Address
            </Alert>
          </Snackbar>
        </React.Fragment>
      )}
    </Box>
  );
}
