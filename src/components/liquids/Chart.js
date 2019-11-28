import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import LiquidBar from './LiquidBar';
import LiquidPie from './LiquidPie';

export default function Chart(props) {
  return (
    <section className="liquid--chart">
      
      <Container>
        <Row>
        <Col>
          <LiquidBar />
        </Col>
        
        <Col>
          <LiquidPie />
        </Col>
        </Row>
      </Container>
    </section>

  )
}