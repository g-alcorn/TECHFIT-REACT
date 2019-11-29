import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
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

  return (
    <div>
      <Row
        className={
          active
            ? " card alert alert-light border pt-4 pb-4 rounded"
            : " card alert alert-success border pt-4 pb-4 rounded"
        }
        style={{ marginTop: "10px", marginRight: "15px" }}
      >
        <Col
          lg={6}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <img
            style={{ height: "200px" }}
            className="img-fluid img-thumbnail"
            src={props.image}
            alt="food"
          />
        </Col>
        <Col lg={6}>
          <h5>{props.title}</h5>
          <p>{props.instructions}</p>
          <div className="d-flex flex-row justify-content-between">
            <span>
              <i className="far fa-clock"></i> : {props.minutes} minutes
            </span>
            <span>
              <i className="fas fa-users"></i> : {props.servings} servings
            </span>
            <Button
              onClick={handleClickCard}
              variant="info"
              size="sm"
              type="submit"
              disabled ={!active}
            >
              Add <i className="far fa-plus-square"></i>
            </Button>
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
