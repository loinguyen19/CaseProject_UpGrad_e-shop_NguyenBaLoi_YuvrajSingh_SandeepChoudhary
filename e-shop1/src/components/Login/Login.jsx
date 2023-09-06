import { Button, FormGroup, TextField, Typography, Box } from '@mui/material'
import Link from '@mui/material/Link';
import LockIcon from '@mui/icons-material/Lock';

import React from 'react'

const Login = () => {
  return (
    <div>
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
          sx={{display: {xs: "none", sm: "block"}}}
        >
          Sign in
        </Typography>
        <br />
        <FormGroup>
             <TextField id="outlined-basic"   label="Email Address" variant="outlined" />
             <br />
        <TextField id="outlined-basic" label="Password" variant="outlined" />
<br />
        <Button variant="contained" href="/">SIGN IN</Button>
        <br/> 
        <Typography gutterBottom variant="body2" component="div">
            
            <Link href="/signup">Don't have an account? Sign Up</Link>

          </Typography>
        </FormGroup>
       </Box>
    </div>
  )
}

export default Login