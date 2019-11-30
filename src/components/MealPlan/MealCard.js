import React, { useState } from "react";
import { Row, Col , Modal, Button,Badge } from "react-bootstrap";

const MealCard = props => {
  
  let [active, setActive] = useState(true);
  const handleClickCard = e => {
    setActive(!active);
    const meal = {
      photo_url: props.image,
      recipe_title: props.title,
      recipe_description: props.instructions,
      prep_time: props.minutes,
      servings: props.servings,
      source_url:props.url
    };
    props.addSelectedMeal(meal);
  };
  //modal
  const [show, setShow] = useState(false);

  const handleClose = () => {
    props.handleRecipeSend();
    setShow(false);
  };
  const handleShow = () => {
    handleClickCard();
    setShow(true);
  };
  //------

  return (
    <div>
     {/*  <Row  >
        <Col lg={6} className='bg-dark' >
        hello
        </Col>
        <Col lg={6} className='bg-danger' >
        hello
        </Col>
      </Row> */}
      <Row
        className={
          active
            ? " card alert alert-light border  rounded"
            : " card alert alert-success border rounded"
        }
       
      >
        <Col
          sm={6}
          className='bg-warning w-100'
        >
          <img
            style={{ height: "200px" }}
            className="img-fluid img-thumbnail"
            src={props.image}
            alt="food"
          />
        </Col>
        <Col sm={6} className='bg-info w-100' >
          <h5>{props.title}</h5>
          <p>{props.instructions}</p>
          <div className="d-flex flex-row justify-content-between">
            <span>
              <i className="far fa-clock"></i> : {props.minutes} minutes
            </span>
            <span>
              <i className="fas fa-users"></i> : {props.servings} servings
            </span>
           {/* modal */}
            <>
              <Button variant="primary" onClick={handleShow}>
                <i className="fas fa-utensils"></i>
                Add <i className="far fa-plus-square"></i>
              </Button>

              <Modal  show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                  <Modal.Title>Add Recipe</Modal.Title>
                </Modal.Header>
                <Modal.Body>Add {props.counter} meal(s)</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Save Recipe
                   
                  </Button>
                </Modal.Footer>
              </Modal>
            </>
{/* modal */}
            {/* <Button
              onClick={handleClickCard}
              variant="info"
              size="sm"
              type="submit"
              disabled ={!active}
            >
              Add <i className="far fa-plus-square"></i>
            </Button> */}
          </div>
          <a
            href={props.url}
            rel="noopener noreferrer"
            target="_blank"
            style={{ fontWeight: "bold", color: "black" }}
          >
            Click to see full recipe
          </a>
        </Col>
      </Row>
      
    </div>
  );
};

export default MealCard;
