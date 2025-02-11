import React, { useState, useEffect } from 'react'
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';

function Event({item, changeAlert}) {

const [event, setEvent]= useState(item)
const [liked, setLiked] = useState(false);
const [showWelcome, setShowWelcome] = useState(true);

useEffect(() => {
  console.log("Composant monté");
  
  // Masquer le message après 3 secondes
  const timer = setTimeout(() => {
    setShowWelcome(false);
    console.log("Message de bienvenue caché");
  }, 3000);

  return () => {
    console.log("Composant démonté");
    clearTimeout(timer); // Nettoyage du timer
  };
}, []); // Exécuté une seule fois après le montage
const handleBook=()=>{
    changeAlert()
    setEvent((previousEvent)=>({
        ...previousEvent, ///... nestahdhou al state l9dim
    nbTickets: previousEvent.nbTickets -1,
    nbParticipants: previousEvent.nbParticipants +1,

    }
    ))

}
const toggleLike = () => {
  setLiked(!liked); // Change l'état entre Like et Dislike
};
  return (

    <Col>
    {showWelcome && (
        <Alert variant="success" className="text-center">
          Bienvenue à l'événement {event.name} !
        </Alert>
      )}
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={`/images/${event.nbTickets>0? event.img: "sold_out.png"}`} />
          <Card.Body>
            <Card.Title>{event.name}</Card.Title>
            <Card.Text>
              Number o tickets: {event.nbTickets}
            </Card.Text>
            <Card.Text>
              Number o Participants: {event.nbParticipants}
            </Card.Text>
            <Card.Text>
              Price: {event.price}
            </Card.Text>
            <Button variant="primary" disabled={event.nbTickets?false:true }  onClick={handleBook}>Book an event</Button>
            <Button variant={liked ? "danger" : "success"} onClick={toggleLike} className="ms-2">
            {liked ? "Dislike" : "Like"}
          </Button>
          </Card.Body>
        </Card>
        </Col>
    
  )
}

export default Event