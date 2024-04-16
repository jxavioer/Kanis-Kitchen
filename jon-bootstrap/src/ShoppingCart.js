import { useState } from 'react';
import Button from "react-bootstrap/Button";
import Cart from './cart.webp';
import Offcanvas from "react-bootstrap/Offcanvas";
import OffcanvasBody from "react-bootstrap/OffcanvasBody";
import ShoppingCartList from "./ShoppingCartList";

function ShoppingCart() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
            <Button style={{background: "transparent", border: "none"}} onClick={handleShow}>
                <img src={Cart} style={{width:"4rem"}} />
                </Button>

                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
                    </Offcanvas.Header>
                    <OffcanvasBody>
                        <ShoppingCartList />
                    </OffcanvasBody>
                </Offcanvas>
        </>
    );
}

export default ShoppingCart;