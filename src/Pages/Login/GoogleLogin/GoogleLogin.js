import React from 'react'
import './GoogleLogin.css'
import google from '../../../img/google/google.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import auth from '../../../firebase.init'
import { useNavigate } from 'react-router-dom'
import Loading from '../../../Shared/Loading/Loading'

const GoogleLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)

  const navigate = useNavigate()
  if(loading){
    return <Loading></Loading>
  }
  let errorMessage;
  if (error) {
     
    errorMessage = <div>
        <p><b className='text-danger'>Error:</b> {error.message}</p>
      </div>
 
  }
  if (user) {
    navigate('/home')
  }

  return (
    <div>
      <div className="d-flex">
        <div className="left-right-or bg-light mt-3"></div>
        <p className="px-2">or</p>
        <div className="left-right-or bg-light mt-3"></div>
      </div>
     
      <div>
        <button
          onClick={() => signInWithGoogle()}
          className="text-white border-0 bg-dark px-4 rounded py-2 mb-2"
        >
          {' '}
          Login With Google <img className="px-1" src={google} alt="" />
        </button>
        {errorMessage}
      </div>
    </div>
  )
}

export default GoogleLogin
