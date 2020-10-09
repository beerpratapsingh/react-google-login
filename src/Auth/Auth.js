import React, {useState, useEffect} from 'react';

//IMPORT COMPONENTS
import GoogleLogin from 'react-google-login';
// import { GoogleLogout } from 'react-google-login';
import { useHistory } from "react-router-dom";

import { CLIENT_ID, setIsLogedIn, getIsLogedIn, setUserInfo } from '../utils/Auth.Service';


const Auth = () => {
  // const CLIENT_ID = '242339457886-5rkssbi0n3qj8imu0do19krh7edh11b5.apps.googleusercontent.com';
  const [isLogedin, setisLogedin] = useState(undefined);
  const [accessToken, setAccessToken] = useState('');

  let history = useHistory();  

  useEffect(() => {
    setisLogedin(getIsLogedIn());    
    console.log('isLogedin', isLogedin);
  },[]);

  useEffect(() => {    
    console.log('isLogedin', isLogedin);
    if(isLogedin === true){
      history.push('/home');
    } else {
      console.log('Not Loged In');
    }
  },[isLogedin]);
  

  const handelLogin = (res) => {
    console.log('B', res);
    if(res.accessToken){
      setisLogedin(true);
      setAccessToken(res.accessToken);
      setIsLogedIn(true);
      setUserInfo(res);
      history.push("/home");      
    }
    console.log('Check Var on login', isLogedin);
    console.log('Check Var on login', accessToken);    
  }

  

  // const handelLogout = (res) => {
  //   setisLogedin(false);
  //   setAccessToken('');
  //   console.log('Check Var on logout', isLogedin);
  //   console.log('Check Var on logout', accessToken);
  // }

  const handleLoginFailure = (res) => {
    alert('Failed to log in');
  }

  // const handleLogoutFailure = (res) => {
  //   alert('Failed to log out');
  // }
  
  return (
    <>
      <h3>Welcome to Ninja</h3>
      <p>New insurance journal and audit system</p>

      <GoogleLogin
        clientId={CLIENT_ID}
        buttonText="Sign in with Google"
        onSuccess={handelLogin}
        onFailure={handleLoginFailure}
        cookiePolicy={"single_host_origin"}
        responseType="code,token"
      />

      {/* { isLogedin ?
        <GoogleLogout
          clientId={ CLIENT_ID }
          buttonText='Logout'
          onLogoutSuccess={ handelLogout }
          onFailure={ handleLogoutFailure }
        />
        : 
        <GoogleLogin
          clientId={ CLIENT_ID }
          buttonText='Sign in with Google'
          onSuccess={ handelLogin }
          onFailure={ handleLoginFailure }
          cookiePolicy={ 'single_host_origin' }
          responseType='code,token'
        />
      } */}

      {/* <GoogleLogin
        clientId="242339457886-5rkssbi0n3qj8imu0do19krh7edh11b5.apps.googleusercontent.com"
        buttonText="Sign in with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      /> */}

      {/* <GoogleLogout
        clientId="242339457886-5rkssbi0n3qj8imu0do19krh7edh11b5.apps.googleusercontent.com"
        buttonText="Logout"
        onLogoutSuccess={logout}
        onFailure={responseGoogle}
      >
      </GoogleLogout> */}
    </>
  );
}

export default Auth;