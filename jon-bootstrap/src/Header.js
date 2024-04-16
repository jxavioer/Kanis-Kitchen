import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import Kani from './kani.png';
import Profile from './profile.png';

function Header() {
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
                <img
                    src={Profile}
                    width="50"
                    height="50"
                    />
                </Container>
        </Navbar>
    );
}

export default Header;