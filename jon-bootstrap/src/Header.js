import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import ShoppingCart from "./ShoppingCart";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.css';
import Kani from './kani.png';
import Profile from './profile.png';
import Cart from './cart.webp';
import ProfilePic from "./profile_.js";
import {useState} from "react";


function Header() {

    const [showAbout, setShowAbout] = useState(false);

    const toggleAbout = () => {
        setShowAbout(!showAbout);
    };


    return (
        <Navbar expand="lg" className="bg-danger" variant="light">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src={Kani}
                        width="200"
                        height="100"
                        alt="Kani's Kitchen Logo"/>
                    Kani's Kitchen
                </Navbar.Brand>




                <div style={{display: "flex"}}>
                    <ShoppingCart />
                    <img
                        //        src={Profile}
                        //        width="50"
                        //        height="50"
                    />
                    <ProfilePic />
                    <Button variant="light" onClick={toggleAbout} style={{ marginLeft: '20px' }}>
                        About Us
                    </Button>
                </div>


                {showAbout && (
                    <div style={{ marginTop: '20px' }}>
                        <h3>About Us</h3>
                        <p>
                            Welcome to Kani's Kitchen! Meet our team: Jonathan Xavioer, Kacy Warkentien,
                            Sanika Kurahatti, and Bratt Morejon. Our mission is simple: we want to expedite
                            the Sushi process for you!

                        </p>
                    </div>
                )}


            </Container>
        </Navbar>
    );
}


export default Header;