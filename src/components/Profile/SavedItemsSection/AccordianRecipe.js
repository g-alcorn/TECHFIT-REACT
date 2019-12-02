import React, { useState} from 'react'
import { Row, Col, Button, Accordion, Card, Modal, ButtonToolbar } from "react-bootstrap";
import axios from 'axios'
import {  SET_DELETE_USERMEALS_LIST } from "../../../reducers/appReducer";


const AccordianRecipe = (props, user, dispatch) => {



  const handleDelete = (itemId) => {
    console.log("item", itemId)
  axios({
    method: "delete", 
    url: `/api/user-meals/${user.userId}`,
    data: {id: itemId} })
    .then (response => {
      console.log(response)
    // props.dispatch({type: SET_DELETE_USERMEALS_LIST, id: itemId })
    } )
  }

  const [modalShow, setModalShow] = React.useState(false);
  
  const meal = {
    id: props.id,
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
            <Row>
              <Col lg={6}>
            <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{ color: "black" }}>
              {props.recipe_title}
              </Accordion.Toggle>
              </Col>
              <Col lg={6}>
              <Button 
              className="btn btn-danger"
              onClick={()=> handleDelete(props.id)}>
                Delete
                </Button>
              </Col>
              
          
          </Row>
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
