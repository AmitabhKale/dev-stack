import React from 'react'
import { Col, Row } from 'react-bootstrap'

const HomeScreen = () => {
  return (
    <>
      <Row>
        <Col md={3}>BackLog</Col>
        <Col md={3}>Selected for Dev</Col>
        <Col md={3}>In Progress</Col> 
        <Col md={3}>Done</Col> 
      </Row>
    </>
  )
}

export default HomeScreen