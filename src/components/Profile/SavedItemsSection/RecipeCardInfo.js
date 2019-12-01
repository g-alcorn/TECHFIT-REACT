import React from 'react';
import { Row, Col, Button,  ButtonToolbar, Modal } from "react-bootstrap";


const RecipeCardInfo = props => {
  const [modalShow, setModalShow] = React.useState(false);

  const meal = {
    photo_url: props.image,
    recipe_title: props.title,
    recipe_description: props.instructions,
    prep_time: props.minutes,
    servings: props.servings,
    source_url:props.url
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
        <iframe style={{height: "75vh", width: "75vh"}} src={props.url} ></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  
  return (
      <Row className="border pt-4 pb-4 rounded">
        <Col lg={6}>
          <img
            style={{ height: "200px" }}
            className="img-fluid img-thumbnail"
            src={props.image}
            alt="fitness"
          />
        </Col>
        <Col lg={6}>
          <h5>{props.title}</h5>
          <p>
          {props.instruction}
          </p>
          <div className="d-flex flex-row justify-content-between">
            <span>
              <i className="far fa-clock"></i> {props.minutes}: minutes
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
    );
}

export default RecipeCardInfo;