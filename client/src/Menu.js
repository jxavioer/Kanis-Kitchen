import 'bootstrap/dist/css/bootstrap.css';
import './Menu.css';
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Edamame from './edamame.webp';
import {CardBody} from "react-bootstrap";
import {Tabs} from "react-bootstrap";
import {Tab} from "react-bootstrap";
import ShoppingCartList from "./ShoppingCartList";
import {useState} from "react";

function Menu() {

    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    return (
      <Container style={{display: "flex"}}>
          <Container>
              <Tabs variant="underline"
                  defaultActiveKey="appetizers"
                  id="menu-categories"
                  className="mb-3">
                  <Tab eventKey="appetizers" title="Appetizers">
                      <Card style={{width: '16rem', border: "2px solid black", display: "inline-block"}}>
                          <Card.Img src={Edamame}/>
                          <CardBody>
                              <div style={{display: "flex"}}>
                                  <Container>
                                      <Card.Title>Edamame</Card.Title>
                                      <Card.Subtitle>$100</Card.Subtitle>
                                      <Card.Text>Edamame</Card.Text>
                                  </Container>
                                  <Button className="pink-button" onClick={() => addToCart({ name: "Edamame", price: 100 })}>Add to Cart</Button>
                              </div>
                          </CardBody>
                      </Card>
                      <Card style={{width: '16rem', border: "2px solid black", display: "inline-block"}}>
                          <Card.Img src={Edamame}/>
                          <CardBody>
                              <div style={{display: "flex"}}>
                                  <Container>
                                      <Card.Title>Edamame 2</Card.Title>
                                      <Card.Subtitle>$101</Card.Subtitle>
                                      <Card.Text>Edamame 2</Card.Text>
                                  </Container>
                                  <Button className="pink-button" onClick={() => addToCart({ name: "Edamame 2", price: 101 })}>Add to Cart</Button>                          </div>
                          </CardBody>
                      </Card>
                  </Tab>
                  <Tab eventKey="entrees" title="Entrees">
                      <Card style={{width: '16rem', border: "2px solid black"}}>
                          <Card.Img src={Edamame}/>
                          <CardBody>
                              <div style={{display: "flex"}}>
                                  <Container>
                                      <Card.Title>Steak Hibachi</Card.Title>
                                      <Card.Subtitle>$100</Card.Subtitle>
                                      <Card.Text>Steak Hibachi</Card.Text>
                                  </Container>
                                  <Button className="pink-button"
                                          onClick={() => addToCart({name: "Steak Hibachi", price: 100})}>Add to
                                      Cart</Button>
                              </div>
                          </CardBody>
                      </Card>
                  </Tab>
                  <Tab eventKey="sushi" title="Sushi">
                      <Card style={{width: '16rem', border: "2px solid black"}}>
                          <Card.Img variant="Top" src={Edamame}/>
                          <CardBody>
                              <div style={{display: "flex"}}>
                                  <Container>
                                      <Card.Title>Rick Roll</Card.Title>
                                      <Card.Subtitle>$100</Card.Subtitle>
                                      <Card.Text>Rick Roll</Card.Text>
                                  </Container>
                                  <Button className="pink-button" onClick={() => addToCart({ name: "Rick Roll", price: 100 })}>Add to Cart</Button>
                              </div>
                          </CardBody>
                      </Card>
                  </Tab>
                  <Tab eventKey="beverages" title="Beverages">
                      <Card style={{width: '16rem', border: "2px solid black"}}>
                          <Card.Img src={Edamame}/>
                          <CardBody>
                              <div style={{display: "flex"}}>
                                  <Container>
                                      <Card.Title>Boba</Card.Title>
                                      <Card.Subtitle>$100</Card.Subtitle>
                                      <Card.Text>Boba</Card.Text>
                                  </Container>
                                  <Button className="pink-button" onClick={() => addToCart({ name: "Boba", price: 100 })}>Add to Cart</Button>
                              </div>
                          </CardBody>
                      </Card>
                  </Tab>
                  <Tab eventKey="desserts" title="Desserts">
                      <Card style={{width: '16rem', border: "2px solid black"}}>
                          <Card.Img src={Edamame}/>
                          <CardBody>
                              <div style={{display: "flex"}}>
                                  <Container>
                                      <Card.Title>Mochi</Card.Title>
                                      <Card.Subtitle>$100</Card.Subtitle>
                                      <Card.Text>Mochi</Card.Text>
                                  </Container>
                                  <Button className="pink-button" onClick={() => addToCart({ name: "Mochi", price: 100 })}>Add to Cart</Button>
                              </div>
                          </CardBody>
                      </Card>
                  </Tab>
              </Tabs>
          </Container>
          <Container>
              <h2>Shopping Cart</h2>
            <ShoppingCartList cartItems={cartItems}/>
          </Container>
      </Container>
    );
}

export default Menu;