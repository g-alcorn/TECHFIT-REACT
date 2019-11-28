import React,{Fragment} from 'react';
import { Row, Col, Button } from "react-bootstrap";

const WorkoutCardInfo = () => {
    return (
         <Fragment>
      <Row className="border pt-4 pb-4 rounded">
        <Col lg={6}>
          <img
            style={{ height: "200px" }}
            className="img-fluid img-thumbnail"
            src="https://images.unsplash.com/photo-1534436396297-8ef548863f2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
            alt="fitness"
          />
        </Col>
        <Col lg={6}>
          <h5>Stairs Workout</h5>
          <p>
          Ditch your gym equipment for an on-the-stairs circuit sesh that combines cardio and strength moves to zap flab from your glutes, quads, abs, and arms
          </p>
          <div className="d-flex flex-row justify-content-between">
            <span>
              <i className="far fa-clock"></i> : 10 minutes
            </span>
            
            <Button variant="info" size="sm">
              See More <i className="far fa-plus-square"></i>
            </Button>
          </div>
        </Col>
      </Row>
    </Fragment>
    );
}

export default WorkoutCardInfo;