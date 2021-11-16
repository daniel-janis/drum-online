import './Login';
import axios from 'axios'
import UserService from './UserService';

const AuthService = {
  auth: () => {
    if (!UserService.get().username) {
        var cookies = document.cookie.split("; ")
        var tokenCookie = cookies.find(f => f.startsWith('token='))
      if (tokenCookie) { 
          var token = tokenCookie.split("token=")[1]
        axios
          .post("http://localhost:3001/api/AuthenticateUser", {
            token
          })
          .then((res) => {
            if (res.data.token && res.data.user) {
              document.cookie = `token=${res.data.token}`
              UserService.set(res.data.user)
            } else {
                window.location.pathname = '/Login'
            }
          });
      } else {
        window.location.pathname = '/Login'
      }
    }
  },
  setToken: (resToken) => {
      document.cookie = `token=${resToken}`
  },
  logout: () => {
          UserService.set({});
          window.location.pathname = '/Login'
        }
};

export default AuthService;

/*
AuthService
- Check to see if there is a current user (on EVERY substantive page)

AuthService.auth()


- If there is NO user, check to see if there is a locally stored JWT
    - If NOT, redirect to the login page
    - If there is a JWT, validate it in the api (send JWT to authenticator, which decrypts, use the username to get the user, then send back that user and the new JWT, which gets stored locally)
    - optionally if JWT is expired, require new login (but I don't recommend this)
    - if you can't validate the JWT, send them to the login page
*/