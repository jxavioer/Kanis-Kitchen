import React, {useState} from "react";
import ProfileInfo from "./ProfileInfo";
import LoginButton from "./AuthLoginButton";
import Offcanvas from "react-bootstrap/Offcanvas";
import OffcanvasBody from "react-bootstrap/OffcanvasBody";
import Container from "react-bootstrap/Container";
import ProfilePic from "./profile.png";
import Button from "react-bootstrap/Button";

function ProfileButton({ isAuthenticated }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        !isAuthenticated ?
        <LoginButton/> :
            <Container>
                <Button style={{background: "transparent", border: "none"}} onClick={handleShow}>
                    <img src={ProfilePic} style={{width:"4rem"}} />
                </Button>

                <Offcanvas show={show} onHide={handleClose} placement="end">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Profile</Offcanvas.Title>
                    </Offcanvas.Header>
                    <OffcanvasBody>
                        <ProfileInfo/>
                    </OffcanvasBody>
                </Offcanvas>
            </Container>
    );
}

export default ProfileButton;