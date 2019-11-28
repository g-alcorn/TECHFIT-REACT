import React from 'react';
import { Row, Col, Button,  ButtonToolbar, Modal } from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <RecipeCardInfo /> 
        {/* This is where the Recipe will go */}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const RecipeCardInfo = () => {
  const [modalShow, setModalShow] = React.useState(false);
    return (
      <Row className='border pt-4 pb-4 rounded' >
      <Col lg={6}>
      <img
      style={{height:'200px'}}
      className='img-fluid img-thumbnail'
      src="https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80" alt="food" />
      </Col>
        <Col lg={6}>
        <h5>Roasted Chicken</h5>
      <p>Delcious oven roasted chicken that is easy to make, and will leave you feeling full and satisfied.</p>
        <div className='d-flex flex-row justify-content-between'>
        <span><i className="far fa-clock"></i> : 10 minutes</span>
        <span><i className="fas fa-users"></i> : 5 persons</span>
        <ButtonToolbar>
            <Button variant="info" size="sm" onClick={() => setModalShow(true)}>
      Recipe <i className="far fa-plus-square"></i>
      </Button>
      <MyVerticallyCenteredModal
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