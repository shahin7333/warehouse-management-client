import React, { useRef } from 'react'
import { Button, Form } from 'react-bootstrap'
import axios from 'axios';
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from 'react-firebase-hooks/auth'
import { useLocation, useNavigate } from 'react-router-dom'
import auth from '../../firebase.init'
import Loading from '../../Shared/Loading/Loading'
import GoogleLogin from './GoogleLogin/GoogleLogin'
import './Login.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageTitles from '../../Shared/PageTitles/PageTitles'

const Login = () => {
  const emailRef = useRef('')
  const passRef = useRef('')
  const navigate = useNavigate()
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth)

  const location = useLocation()
  let from = location.state?.from?.pathname || '/'

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth)

  const handleSubmit = (e) => {
    e.preventDefault()
    const email = emailRef.current.value
    const pass = passRef.current.value
   signInWithEmailAndPassword(email, pass)
    
  }
  const navigateRegister = (e) => {
    navigate('/register')
  }
  if(loading || sending){
    return <Loading></Loading>
  }
  let errorMessage
  if (error) {
    errorMessage = (
      <div>
        <p>
          <b className="text-danger">Error:</b> {error.message}
        </p>
      </div>
    )
  }
  const passReset = async () => {
    const email = emailRef.current.value
    if(email){
        await sendPasswordResetEmail(email)
    toast('Sent email')
    }
    else{
        toast('Please check your email address')
    }
  }
  if (user) {
    navigate(from, { replace: true })
  }

  return (
    <div className="text-center mt-5">
        <PageTitles title="Login"></PageTitles>
      <h3 className="mb-5">Please Login</h3>
      <div className="container w-50 mx-auto">
        <div className="row g-5">
          <div className="col-md-4 col-sm-12 col-lg-6">
            <img
              className="img-fluid rounded-start"
              style={{ width: '800px' }}
              src="https://i.ibb.co/1Q08sR9/login.png"
              alt=""
            />
          </div>
          <div className="col-md-8 col-sm-12 col-lg-6">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  ref={emailRef}
                  required
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  ref={passRef}
                  required
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>

              <Button className="mb-2" variant="dark" type="submit">
                Login
              </Button>
            </Form>
            {errorMessage}
            <small className="mt-3">
              Don't have an account?{' '}
              <span className="reg-span" onClick={navigateRegister}>
                Please Register
              </span>
            </small>
            <br />
            <small className="mt-3">
              Forget password?{' '}
              <span className="reg-span" onClick={passReset}>
                Reset Password
              </span>
            </small>
          </div>
         
          <GoogleLogin></GoogleLogin>
          <ToastContainer />
        </div>
      </div>
    </div>
  )
}

export default Login
