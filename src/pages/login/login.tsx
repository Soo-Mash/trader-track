/* eslint-disable react-hooks/exhaustive-deps */
import {
   Button,
   FormControl,
   FormHelperText,
   IconButton,
   InputAdornment,
   InputLabel,
   OutlinedInput,
   Snackbar,
} from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import React, { useEffect, useState } from 'react'

type ValidationRule = {
   required?: boolean
   requiredMessage?: string
}

type LoginField = 'email' | 'password'

const mockLoginCredentials = {
   email: 'sigavjones@gmail.com',
   password: 'Trader101!',
}

// very simple validation rules - to be improved later
const loginValidationRules: {
   email: ValidationRule
   password: ValidationRule
} = {
   email: {
      required: true,
      requiredMessage: 'This field is required',
   },
   password: {
      required: true,
      requiredMessage: 'This field is required',
   },
}

const loginFormInitialValues = {
   email: '',
   password: '',
}

const Login = () => {
   const [submitAttempted, setSubmitAttempted] = useState<boolean>(false)
   const [showPassword, setShowPassword] = useState<boolean>(false)
   const [errorSnackBarOpen, setErrorSnackBarOpen] = useState<boolean>(false)
   const [loginFormValues, setLoginFormValues] = useState<{
      email: string
      password: string
   }>(loginFormInitialValues)
   const [loginFormErrors, setLoginFormErrors] = useState<
      Partial<Record<LoginField, string>>
   >({})

   const handleClickShowPassword = () => setShowPassword((show) => !show)

   const handleShowErrorSnackBar = () => setErrorSnackBarOpen(true)
   const handleDismissErrorSnackBar = () => setErrorSnackBarOpen(false)

   // Ensures that default behaviour (such as unwanted side effects like focusing or selecting the button) does not occur when toggling visibilty btn
   const handleMouseUpOrDownHIdeShowPassword = (
      event: React.MouseEvent<HTMLButtonElement>
   ) => {
      event.preventDefault()
   }

   // Simple form validation function - to be improved later
   const validateForm = () => {
      const errors = { ...loginFormErrors }
      // email field validation
      if (loginValidationRules.email.required && !loginFormValues.email)
         errors.email = loginValidationRules.email.requiredMessage
      else delete errors.email
      // password field validation
      if (loginValidationRules.password.required && !loginFormValues.password)
         errors.password = loginValidationRules.password.requiredMessage
      else delete errors.password
      setLoginFormErrors(errors)
   }

   const setFormValue = (fieldId: LoginField, value: string) => {
      setLoginFormValues({ ...loginFormValues, [fieldId]: value })
   }

   const checkloginCredentials = () => {
      console.log('Checking credentials...')
      return (
         loginFormValues.email === mockLoginCredentials.email &&
         loginFormValues.password === mockLoginCredentials.password
      )
   }

   const submitLoginForm = () => {
      setSubmitAttempted(true)
      if (!loginFormErrors.email && !loginFormErrors.password) {
         const credentialsValid = checkloginCredentials()
         if (credentialsValid) {
            // TODO: navigate to dashboard page
         } else {
            handleShowErrorSnackBar()
         }
      }
   }

   useEffect(() => {
      validateForm()
   }, [loginFormValues])

   return (
      <div className="page-login">
         <div className="card-big login-card ">
            <div className="container-login-card">
               <h2>Login</h2>
               <FormControl
                  sx={{ marginBottom: '1em' }}
                  variant="outlined"
                  fullWidth
                  error={!!loginFormErrors.email && !!submitAttempted}
               >
                  <InputLabel>Enter your email address</InputLabel>
                  <OutlinedInput
                     id="email"
                     type="text"
                     label="Enter your email address"
                     value={loginFormValues.email}
                     onChange={(e) => setFormValue('email', e.target.value)}
                  />
                  {loginFormErrors.email && submitAttempted && (
                     <FormHelperText error>
                        {loginFormErrors.email}
                     </FormHelperText>
                  )}
               </FormControl>

               <FormControl
                  sx={{ marginBottom: '1em' }}
                  variant="outlined"
                  fullWidth
                  error={!!loginFormErrors.password && !!submitAttempted}
               >
                  <InputLabel>Enter your password</InputLabel>
                  <OutlinedInput
                     id="password"
                     type={showPassword ? 'text' : 'password'}
                     value={loginFormValues.password}
                     onChange={(e) => setFormValue('password', e.target.value)}
                     endAdornment={
                        <InputAdornment position="end">
                           <IconButton
                              aria-label={
                                 showPassword
                                    ? 'hide the password'
                                    : 'display the password'
                              }
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseUpOrDownHIdeShowPassword}
                              onMouseUp={handleMouseUpOrDownHIdeShowPassword}
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
                  {loginFormErrors.password && submitAttempted && (
                     <FormHelperText error>
                        {loginFormErrors.password}
                     </FormHelperText>
                  )}
               </FormControl>

               <Button
                  variant="contained"
                  style={{ width: '100%', marginBottom: '1em' }}
                  title="Login"
                  type="submit"
                  onClick={submitLoginForm}
               >
                  Login
               </Button>
            </div>
         </div>
         {/* TODO: Basic unstyled error toaster - to be improved later */}
         <Snackbar
            key="login-error-snackbar"
            message="Incorrect email or password"
            open={errorSnackBarOpen}
            onClose={handleDismissErrorSnackBar}
            autoHideDuration={3000}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
         />
      </div>
   )
}
export default Login
