import React from "react";
import './App.css';
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div class="background">
        <img class="profile_pic" src={user.picture} alt={user.name} />
        <p class= "email">{user.email}</p>
      </div>
    )
  );
};

export default Profile;