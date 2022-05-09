import React, { useRef, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import auth from '../../firebase.init'
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import GoogleLogin from '../Login/GoogleLogin/GoogleLogin';
import Loading from '../../Shared/Loading/Loading';
import PageTitles from '../../Shared/PageTitles/PageTitles';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification:true});
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);
      const [accept,setAccept]=useState(false);

  const emailRef = useRef('')
  const passRef = useRef('')
  const nameRef = useRef('')

  const navigate = useNavigate()

  const handleRegister =async (e) => {
    e.preventDefault()
    const email = emailRef.current.value
    const pass = passRef.current.value
    const displayName = nameRef.current.value
    await  createUserWithEmailAndPassword(email,pass);
    await updateProfile({ displayName });
    alert('Updated profile');
    navigate('/home');
  }
  if(loading || updating){
    return <Loading></Loading>
  }

  const navigateLogin = () => {
    navigate('/login')
  }

  return (
    <div>
      <PageTitles title="Register"></PageTitles>
      <div className="text-center mt-5">
        <h3 className="mb-5">Please Register</h3>
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
              <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicText">
                  <Form.Control
                    ref={nameRef}
                    required
                    type="Text"
                    placeholder="Enter Your Name"
                  />
                </Form.Group>
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
                <Form.Group  className="mb-3" name="terms" controlId="formBasicCheckbox">
                  <Form.Check  className={`${accept ? '' : 'text-danger'}`} onClick={()=>setAccept(!accept)} type="checkbox" label="Accept out terms and conditon" />
                </Form.Group>
                <Button disabled={!accept} variant="dark" type="submit">
                  Register
                </Button>
              </Form>
              <small className="mt-3">
                Already have an account?{' '}
                <span className="reg-span" onClick={navigateLogin}>
                  Please Login
                </span>
              </small>
            </div>
            <GoogleLogin></GoogleLogin>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
