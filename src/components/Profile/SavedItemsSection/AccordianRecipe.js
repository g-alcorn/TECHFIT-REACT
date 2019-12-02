import React, { useState} from 'react'
import { Row, Col, Button, Accordion, Card, Modal, ButtonToolbar } from "react-bootstrap";


const AccordianRecipe = props => {

  const [modalShow, setModalShow] = React.useState(false);
  
  const meal = {
    photo_url: props.photo_url,
    recipe_title: props.recipe_title,
    recipe_description: props.recipe_description,
    prep_time: props.prep_time,
    servings: props.servings,
    source_url:props.source_url
  };

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" className="text-center">
          Your Recipe presented by TechFit
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
        <div style={{overflow: "hidden", position: "relative", padding: "20px"}}> 
        <iframe fluid={true} style={{height: "75vh", width: "75vh"}} src={props.source_url} ></iframe>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }



  return (

    <Accordion >
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{ color: "black" }}>
              {props.recipe_title}
          </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>

            <Row className="border pt-4 pb-4 rounded">
        <Col lg={6}>
          <img
            style={{ height: "200px" }}
            className="img-fluid img-thumbnail"
            src={props.photo_url}
            alt="fitness"
          />
        </Col>
        <Col lg={6}>
          <h5>{props.recipe_title}</h5>
          <p>
          {props.recipe_description}
          </p>
          <div className="d-flex flex-row justify-content-between">
            <span>
              <i className="far fa-clock"></i> {props.prep_time}: minutes
            </span>
            <span>
              <i className="far fa-clock"></i> {props.servings}: servings
            </span>
            <ButtonToolbar>
            <Button variant="info" size="sm" onClick={() => setModalShow(true)}>
      See Full Recipe <i className="far fa-plus-square"></i>
      </Button>
      <MyVerticallyCenteredModal
              {...props}
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </ButtonToolbar>
            
          </div>
        </Col>
      </Row>

            </Card.Body>
          </Accordion.Collapse>
        </Card>
    </Accordion>
  )
}

export default AccordianRecipe;
