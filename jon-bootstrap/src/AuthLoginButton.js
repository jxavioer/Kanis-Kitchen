//Code provided by Auth0

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import pfp from "./profile.png";
import Button from "react-bootstrap/Button";

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return (
    <Button style={{background: "transparent", border: "none"}}
            onClick={() => loginWithRedirect()}>
        <img src={pfp} style={{width:"4rem"}} />
    </Button>
    );
};

export default LoginButton;