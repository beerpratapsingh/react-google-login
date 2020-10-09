import React from 'react';
import { GoogleLogout } from 'react-google-login';
import { useHistory } from "react-router-dom";
import { CLIENT_ID, setIsLogedIn } from '../utils/Auth.Service';

const Logout = () => {
  // const CLIENT_ID = '242339457886-5rkssbi0n3qj8imu0do19krh7edh11b5.apps.googleusercontent.com';
  let history = useHistory();
  const handelLogout = (res) => {
    console.log('Logout');
    setIsLogedIn(false);
    history.push("/login");
  }

  const handleLoginFailure = (res) => {
    alert('Failed to log in');
  }

  const handleLogoutFailure = (res) => {
    alert('Failed to log out');
  }

  return(
    <>
      <GoogleLogout
          clientId={ CLIENT_ID }
          buttonText='Logout'
          onLogoutSuccess={ handelLogout }
          onFailure={ handleLogoutFailure }
        />
    </>
  )
}

export default Logout;