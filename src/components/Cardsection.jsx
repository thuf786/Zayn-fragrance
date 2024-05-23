import React from 'react'
import { Button, Card } from 'react-bootstrap'

function Cardsection(props) {
    
    return (
        <>
        
            <Card style={{ width: '18rem' }} className='mt-4 ms-3 me-2'>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title> <br />
        Price : <i class="fa-solid fa-indian-rupee-sign"></i> {props.Price} <br />
        review : <i class="fa-regular fa-star"></i>{props.Review} <br />
        <div className='mt-2'>
        <Button variant="primary" className='me-3'>Buy Now</Button>
        <Button variant='success' className='ms-3'>Add to Cart</Button> 
        </div>
      </Card.Body>
    </Card>
        </>
    )
}

export default Cardsection