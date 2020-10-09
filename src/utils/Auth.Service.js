export const CLIENT_ID = '242339457886-5rkssbi0n3qj8imu0do19krh7edh11b5.apps.googleusercontent.com';

export function isLogedin(value) {
   
}

export function setIsLogedIn(value) {
  localStorage.setItem('isLogedin', JSON.stringify(value));
}

export function getIsLogedIn() {
  return JSON.parse(localStorage.getItem('isLogedin'));
}

export function setUserInfo(details) {
  localStorage.setItem('userInfo', JSON.stringify(details));  
}

export function getUserInfo() {
  return JSON.parse(localStorage.getItem('userInfo'));
}

