import React, { useState, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import { Row, Col, Button, Form } from "react-bootstrap";

import axios from 'axios'

export default (props) => {
 
  const [login, setLogin] = useState(false);
  const [form, setValues] = useState({
    email: "",
    password: ""
  });
  const [msg, setMsg] = useState("");
  const resetForm = () => {
    setValues({
      email: "",
      password: ""
    });
  };


  const handleFieldChange = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = e => {
    e.preventDefault();
    const postData = {
      email: form.email,
      password: form.password
    };
    const axiosConfig = {
      headers: {
        
        "Content-Type": "application/json;charset=UTF-8",
        //"Access-Control-Allow-Origin": "*"
      }
    };
    axios
      .post("/api/users/login", postData, axiosConfig)
     
     .then(res => {
       
        setMsg(res.data.message);
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
          resetForm();
          setLogin(true);
         
        } else {
          localStorage.setItem("token", null);
        }
        // console.log("response from server>>>", res.data);
      })
      .catch(err => {
        // setMsg(err);
        console.log("AXIOS ERROR:", err);
      });
  };
  return (
    <Fragment>
      {login && <Redirect to="/" />}
      {!login && (
        <Row
          style={{ marginTop: "200px", marginBottom: "200px" }}
          className="p-4  d-flex justify-content-center "
        >
          <Col style={{ maxWidth: "600px" }} lg={12}>
            <Form onSubmit={handleLogin} style={{ minWidth: "600px" }}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  value={form.email}
                  name="email"
                  onChange={handleFieldChange}
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  value={form.password}
                  name="password"
                  onChange={handleFieldChange}
                  type="password"
                  placeholder="Password"
                />
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
                Login
              </Button>
             {msg && <p className='text-danger pt-2' >{msg}</p>}
              <Form.Text className="text-muted mt-4">
                <span> Don't have an account? </span>
                <Link to="/register">Register!</Link>.
              </Form.Text>
            </Form>
          </Col>
        </Row>
      )}
    </Fragment>
  );
};
