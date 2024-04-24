import 'bootstrap/dist/css/bootstrap.css'
import './Menu.css'
import Container from "react-bootstrap/Container"
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Edamame from './edamame.webp'
import {CardBody} from "react-bootstrap";
import {Tabs} from "react-bootstrap";
import {Tab} from "react-bootstrap";

function Menu() {
    return (
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
                              <Button className="buyButton">+</Button>
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
                              <Button className="buyButton">+</Button>
                          </div>
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
                              <Button className="buyButton">+</Button>
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
                              <Button className="buyButton">+</Button>
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
                              <Button className="buyButton">+</Button>
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
                              <Button className="buyButton">+</Button>
                          </div>
                      </CardBody>
                  </Card>
              </Tab>
          </Tabs>
      </Container>
    );
}

export default Menu;