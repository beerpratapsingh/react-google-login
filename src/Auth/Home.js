import React, {useState, useEffect} from 'react';

// import Loog from '../../public/images/turtlemint_ninja-logo.svg';
import Logout from './Logout';
import { setIsLogedIn, getIsLogedIn } from '../utils/Auth.Service';
import { useHistory } from "react-router-dom";
import { getUserInfo } from '../utils/Auth.Service';

const Home = () => {
  const [isLogedin, updateIsLogedin] = useState(getIsLogedIn());
  const history = useHistory();
  // useEffect(() => {
  //   updateIsLogedin();
  //   console.log('isLogedin', isLogedin);
  // }, []);

  const getUserDetails = getUserInfo();

  console.log('getUserDetails', getUserDetails.profileObj);

  useEffect(() => {
    console.log('isLogedin', isLogedin);
    if (!isLogedin) {
      history.push('/login');
    } else {
      console.log('Loged In');
    }
  }, [isLogedin]);
  return(
    <>
      <a href="#">
        {/* <img src={Logo} /> */}
      </a>
      <h1>Welcome {getUserDetails.profileObj.name}</h1>
      <Logout />
    </>
  )
}

export default Home;