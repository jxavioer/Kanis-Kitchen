import React from 'react';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import { useAuth0 } from "@auth0/auth0-react";
import Profile from './components/Profile';
import "./components/App.css"

function App(){

  const{user,isAuthenticated,isLoading, getAccessTokenSilently} = useAuth0();
  if (isLoading) {
    return <h2>Loading ...</h2>;
  }



  return(
    <div class = "background">
      {!isAuthenticated &&(
        <div class = "background">
        <LoginButton/>
        </div>
        
      )}
      {isAuthenticated &&(
        <div class = "background">
        <LogoutButton/>
        <Profile/>
        
        </div>
        
      )}
      

    </div>
  );
}

export default App