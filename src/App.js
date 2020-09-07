import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MyRoutes from './routes';
import theme from './theme';
import { ThemeProvider } from '@material-ui/core';
import NavBar from './components/NavBar/index';
import {Provider} from 'react-redux';
import store from './store';
import setAuthToken from './helper/utils/setAuthToken';
import { setCurrentUser, logoutUser } from './helper/actions/authActions';
import jwt_decode from 'jwt-decode';

function App() {
  if(localStorage.jwtToken){
    const token = localStorage.jwtToken;
    setAuthToken(token);

    const decoded = jwt_decode(token);
    store.dispatch(setCurrentUser(decoded));

    const currentTime = Date.now;
    if(decoded.exp < currentTime){
      store.dispatch(logoutUser());

      window.location.href="/login";
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
      <BrowserRouter>
        
          <NavBar />
          <MyRoutes />
        
      </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
