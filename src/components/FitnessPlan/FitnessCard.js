import React, { useState } from 'react';
import { Row, Col, Button,  ButtonToolbar, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ModalCard from '../FitnessPlan/ModalAddWorkout'
const FitnessCard = props => {
  
  const [modalShow, setModalShow] = React.useState(false);
  
  let [active, setActive] = useState(true);
  const handleClickCard = e => {
    setActive(!active);
    const workout = {
      id: props.id,
      name: props.name,
      difficulty: props.difficulty,
      workout_description: props.workout_description,
      image_url: props.image_url,
      video_url: props.video_url
    };
    props.addSelectedWorkout(workout);
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
          Your Workouts presented by TechFit
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
        <div style={{overflow: "hidden", position: "relative", padding: "20px"}}> 
          <iframe  className="fluid" style={{minHeight: "75vh", minWidth: "75vh"}} src={props.video_url} allowFullScreen></iframe>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }


  return (
      <Row className="border pt-4 pb-4 rounded" style={{marginTop: "10px", width: "800px", display: "flex", justifyContent: "space-evenly" }}>
        <Col lg={6}>
          <img
            style={{ height: "200px", border: "none" }}
            className="img-fluid img-thumbnail"
            src={props.image_url}
            alt="fitness"
          />
        </Col>
        <Col lg={6}>
          <h5>{props.id}. {props.name}</h5>
          <p>
            {props.workout_description}
          </p>
          <div className="d-flex flex-row justify-content-between">
            <span>
            level of difficulty: {props.difficulty} 
            </span>
            <ButtonToolbar>

            <Button variant="info" size="sm" onClick={() => setModalShow(true)}>
      Demo Video <i className="far fa-plus-square"></i>
      </Button>
      <MyVerticallyCenteredModal
              {...props}
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </ButtonToolbar>

          < ModalCard handleWorkoutSend={props.handleWorkoutSend} resetWorkoutList={props.resetWorkoutList} handleClickCard={handleClickCard} />
          </div>
        </Col>
      </Row>
  );
}

export default FitnessCard;
