import {
   Button,
   FormControl,
   IconButton,
   InputAdornment,
   InputLabel,
   OutlinedInput,
} from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import React, { useState } from 'react'

const Login = () => {
   const [showPassword, setShowPassword] = useState(false)

   const handleClickShowPassword = () => setShowPassword((show) => !show)

   // Ensures that default behaviour (such as unwanted side effects like focusing or selecting the button) does not occur when toggling visibilty btn
   const handleMouseUpOrDownPassword = (
      event: React.MouseEvent<HTMLButtonElement>
   ) => {
      event.preventDefault()
   }
   return (
      <div className="page-login">
         <div className="card-big login-card ">
            <div className="container-login-card">
               <h2>Login</h2>

               <FormControl
                  sx={{ marginBottom: '1em' }}
                  variant="outlined"
                  fullWidth
               >
                  <InputLabel>Enter your email address</InputLabel>
                  <OutlinedInput
                     id="email"
                     type="text"
                     label="Enter your email address"
                  />
               </FormControl>

               <FormControl
                  sx={{ marginBottom: '1em' }}
                  variant="outlined"
                  fullWidth
               >
                  <InputLabel>Enter your password</InputLabel>
                  <OutlinedInput
                     id="password"
                     type={showPassword ? 'text' : 'password'}
                     endAdornment={
                        <InputAdornment position="end">
                           <IconButton
                              aria-label={
                                 showPassword
                                    ? 'hide the password'
                                    : 'display the password'
                              }
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseUpOrDownPassword}
                              onMouseUp={handleMouseUpOrDownPassword}
                              edge="end"
                           >
                              {showPassword ? (
                                 <VisibilityOff />
                              ) : (
                                 <Visibility />
                              )}
                           </IconButton>
                        </InputAdornment>
                     }
                     label="Enter your password"
                  />
               </FormControl>

               <Button
                  variant="contained"
                  style={{ width: '100%', marginBottom: '1em' }}
                  title="Login"
               >
                  Login
               </Button>
            </div>
         </div>
      </div>
   )
}
export default Login
