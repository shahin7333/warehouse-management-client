import React from 'react'
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth'
import { Navigate, useLocation } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import auth from '../../firebase.init'
import Loading from '../Loading/Loading'

const RequireAuth = ({ children }) => {
    const [sendEmailVerification, sending] = useSendEmailVerification(auth);
  const [user, loading, error] = useAuthState(auth)
  const location = useLocation()
  if (loading) {
    return <Loading></Loading>
  }

  if (user?.providerData[0]?.providerId==='password' && !user.emailVerified) {
    return (
      <div className='text-center mt-5'>
        <p>Your email isn't verified!</p>
        <p>
          <small>Please, verified your email.</small>
        </p>
        <button className='bg-dark rounded text-white border-0 px-4 py-2'
        onClick={async () => {
          await sendEmailVerification();
          toast('Sent email');
        }}
      >
        Send Verification
      </button>
      <ToastContainer></ToastContainer>
      </div>
    )
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }
  return children
}

export default RequireAuth
