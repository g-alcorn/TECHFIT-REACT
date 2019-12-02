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
        <Modal.Body>Click save & add recipe to your account!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={function(event){ handleClose(); props.resetMealList()}}>
            Close
          </Button>
            <Button variant="primary" onClick={function (event) { handleClose(); props.handleRecipeSend();props.resetMealList()}}>
            Save Recipe
            <Badge variant="light">  </Badge>                        
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    );
}

export default PopUpAddBtn;
