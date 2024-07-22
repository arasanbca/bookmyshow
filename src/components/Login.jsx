import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

export default function Login() {

  const clientId = "560857520890-j4b9mehofqeudth9kvhf89a0c93hul0a.apps.googleusercontent.com";
  const [showLoginButton, setShowLoginButton] = useState(true);
  const [showLogoutButton, setShowLogoutButton] = useState(false);

  const onLoginSuccess = (res) => {
    console.log('Login Success', res);
    setShowLoginButton(false);
    setShowLogoutButton(true);
  }

  const onFailureSuccess = (res) => {
    console.log('Login Failed', res);
  }

  const onSignoutSuccess = () => {
    alert("You have beeen SignedOut Succefully");
    setShowLoginButton(true);
    setShowLogoutButton(false);
  }

  return (
    <div className='g-sign'>
      {showLoginButton ?
        <GoogleLogin
          clientId={clientId}
          buttonText="Login"
          onSuccess={onLoginSuccess}
          onFailure={onFailureSuccess}
          cookiePolicy={'single_host_origin'}
        /> : null
      }
      {showLogoutButton ?
        <GoogleLogout
          clientId={clientId}
          buttonText="Logout"
          onLogoutSuccess={onSignoutSuccess}
        >
        </GoogleLogout> : null
      }
    </div>
  )
}
