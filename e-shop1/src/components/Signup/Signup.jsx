import { Box, Button, FormGroup, Icon, TextField, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import React from "react";
import LockIcon from '@mui/icons-material/Lock';

const SignUp = () => {
  return (
    <div className="signup">
      <Box sx={{
        width: 500,
        height: 500,
        margin: "auto"
      }}>
     <LockIcon />
      <Typography
        variant="h5"
        noWrap
        component="div"
        sx={{ display: { xs: "none", sm: "block" } }}
      >
        <Box>

         Sign up  
        </Box>
      </Typography>
      <br />
      <FormGroup>
        <TextField id="outlined-basic" label="First Name" variant="outlined" />
        <br />
        <TextField id="outlined-basic" label="Last Name" variant="outlined" />
        <br />
        <TextField
          id="outlined-basic"
          label="Email Address"
          variant="outlined"
        />
        <br />
        <TextField id="outlined-basic" label="Password" variant="outlined" />
        <br />
        <TextField
          id="outlined-basic"
          label="Confirm Password"
          variant="outlined"
        />
        <br />
        <TextField
          id="outlined-basic"
          label="Contact Number"
          variant="outlined"
        />
        <br />

        <Button variant="contained">SIGN UP</Button>
        <br />
        <Typography gutterBottom variant="body2" component="div">
          <Link href="/login">Already have an account? Sign In</Link>
        </Typography>
      </FormGroup>
      </Box>
    </div>
  );
};

export default SignUp;
