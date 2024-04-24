//Code provided by Auth0

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import pfp from "./profile.png";
import Button from "react-bootstrap/Button";

const LogoutButton = () => {
    const { logout } = useAuth0();

    return (
        <Button style={{background: "lightcoral", border: "none"}}
                onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Log Out
        </Button>
    );
};

export default LogoutButton;

