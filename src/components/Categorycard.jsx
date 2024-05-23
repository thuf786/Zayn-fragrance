import React from 'react'
import { Card } from 'react-bootstrap'

function Categorycard(props) {
  return (
    <>
   <Card className='rounded m-4' style={{height:"300px" , width:"300px"}}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Text className='text-center fw-bold'>
            {props.title}
          </Card.Text>
        </Card.Body>
      </Card>
</>
  )
}

export default Categorycard