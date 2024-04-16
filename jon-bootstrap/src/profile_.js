import { useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import pfp from './profile.png';
import Offcanvas from "react-bootstrap/Offcanvas";
import OffcanvasBody from "react-bootstrap/OffcanvasBody";
import ShoppingCartList from "./ShoppingCartList";

function ProfilePic() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
            <Button style={{background: "transparent", border: "none"}} onClick={handleShow}>
                <img src={pfp} style={{width:"4rem"}} />
            </Button>

            <Offcanvas show={show} onHide={handleClose}  placement="end" >

                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Log In</Offcanvas.Title>
                </Offcanvas.Header>

                <OffcanvasBody>
                    <Form>
                        <Form.Group controlId="formBasicUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter username" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <div style={{ marginTop: "1rem" }}> {/* add space before submit button */}
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        </div>
                    </Form>
                </OffcanvasBody>
            </Offcanvas>
        </>
    );
}

export default ProfilePic;