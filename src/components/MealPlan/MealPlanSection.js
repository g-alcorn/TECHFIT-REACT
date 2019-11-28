import React, { useState } from "react";
import axios from "axios";
import { Row, Col, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "../MealPlan/MealCard";
import { SET_MEAL_LIST } from "../../reducers/appReducer";
require('dotenv').config();
const API_KEY = process.env.REACT_APP_API_KEY
const API_URL = `https://api.spoonacular.com/recipes/findByIngredients`;

const rowStyle = { minHeight: "60vh" };

const MealPlanSection = ({ user, dispatch, mealList }) => {
  // console.log('Dispatch',dispatch)

  const [loadingRecipe, setLoadingRecipe] = useState(true);
  const [selectedMeals, setSelectedMeals] = useState([]);
  const addSelectedMeal = meal => {
    setSelectedMeals([...selectedMeals, meal]);
  };

  const [query, setQuery] = useState("");

  const getInfo = () => {
    console.log("getInfo");
    axios
      .get(`${API_URL}?apiKey=${API_KEY}&ingredients=${query}`)
      .then(response => {
        const promises = [];
        for (let recipe of response.data) {
          promises.push(
            axios.get(
              `https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=${API_KEY}`
            )
          );
        }

        console.log("success");
        console.log(response);

        return Promise.all(promises);
      })
      .then(response => {
        console.log("promise", response);
        dispatch({ type: SET_MEAL_LIST, mealList: response });
        setLoadingRecipe(false);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const handleSubmit = event => {
    event.preventDefault();
    getInfo();
    resetForm();
  };

  // const handleKeyPress = event => {
  //   if (event.key === "Enter") {
  //     console.log("enter press here! ");
  //   }
  // };
  const resetForm = () => {
    setQuery("");
  };

  return (
    <Row style={rowStyle} className=" p-4">
      <Col
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
        lg={6}
        className=""
      >
        <header>
          <h1>Meal Plan Search</h1>
        </header>

        <Form style={{ minWidth: "600px" }} onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Type Ingredients*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingredients"
              value={query}
              name="query"
              onChange={event => setQuery(event.target.value)}
            />
            {!loadingRecipe}
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            style={{
              width: "100%",
              marginTop: "50px",
              filter: "grayscale(100%)"
            }}
          >
            Search
          </Button>
          <Form.Text className="text-muted"></Form.Text>
        </Form>
      </Col>
      <Col
        lg={6}
        className=" d-flex flex-column "
        style={{ overflowY: "scroll", maxHeight: "1000px" }}
      >
        <h1 className="text-center">Meals List Display</h1>
        <div>
          {mealList &&
            mealList.map((r, i) => (
              <Card
                addSelectedMeal={addSelectedMeal}
                key={i}
                image={r.data.image}
                title={r.data.title}
                instructions={r.data.instructions}
                minutes={r.data.readyInMinutes}
                servings={r.data.servings}
                url={r.data.sourceUrl}
              />
            ))}
        </div>
      </Col>
    </Row>
  );
};

export default MealPlanSection;
