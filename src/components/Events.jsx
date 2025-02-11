import React, { useState } from 'react'
import {Alert, Button, Container, Row} from 'react-bootstrap'

import eventsJson from '../data/events.json'
import Event from './Event'
function Events() {

const [showAlert, setShowAlert]= useState(false)
const changeAlert=()=>{
    setShowAlert(true)
    setTimeout(()=>{
        setShowAlert(false)
    },2000)
}
  return (
    <>
    <Container>
    <Row>
    {eventsJson.map((event,index)=>(
        <Event item={event} key={index} changeAlert={changeAlert} />
    ))}
    </Row>

    {showAlert && <Alert variant="success">
      <Alert.Heading>You have booked an event</Alert.Heading>
     
    </Alert>}


    </Container>
    </>
  )
}
export default Events