import React,{useState} from 'react';
import {  Modal, Button,Badge } from "react-bootstrap";
const PopUpAddBtn = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
        <>
      <Button variant="primary" onClick={function(event){ handleShow(); props.handleClickCard()}}>
      <i className="fas fa-utensils"></i>
       Add <i className="far fa-plus-square"></i>
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add Recipe</Modal.Title>
        </Modal.Header>
        <Modal.Body>Click save & add Workout to your accnt!!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={function(event){ handleClose(); props.resetWorkoutList()}}>
            Close
          </Button>
            <Button variant="primary" onClick={function (event) { handleClose(); props.handleWorkoutSend();props.resetWorkoutList()}}>
            Save Workout
            <Badge variant="light">  </Badge>                        
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    );
}

export default PopUpAddBtn;