import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const HomeScreen = () => {
  return (
    <>
      <Row>
        <Col md={3}>
          <Card>
            <Card.Header>Backlog</Card.Header>
            <Card.Body className='border'>
              <Card.Title>SR-1923484</Card.Title>
              <Card.Text>CheckOut Screen is not Working</Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Title>SR-1923484</Card.Title>
              <Card.Text>CheckOut Screen is not Working</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
        <Card>
            <Card.Header>Selected for Dev</Card.Header>
            <Card.Body className='border'>
              <Card.Title>SR-1923484</Card.Title>
              <Card.Text>CheckOut Screen is not Working</Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Title>SR-1923484</Card.Title>
              <Card.Text>CheckOut Screen is not Working</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>In Progress</Col> 
        <Col md={3}>Done</Col> 
      </Row>
    </>
  )
}

export default HomeScreen