import React,{useState} from 'react';
import {  Modal, Button,Badge } from "react-bootstrap";
const PopUpAddBtn = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
        <>
      <Button variant="primary" onClick={handleShow}>
      <i class="fas fa-utensils"></i>
       Add <i className="far fa-plus-square"></i>
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add Recipe</Modal.Title>
        </Modal.Header>
        <Modal.Body>Click save & add recipe to your accnt!!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Recipe
            <Badge variant="light"> {counter} </Badge>                        
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    );
}

export default PopUpAddBtn;
