import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const MenuCard = ({burgsrc, title, price, itemNum,handler}) => {
  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={burgsrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text> itme Num : 
         {itemNum}
        </Card.Text>
        <Card.Text>
        ₹ {price}
        </Card.Text>
        <Button variant="primary" onClick={()=> handler(itemNum)}>Buy Now</Button>
      </Card.Body>
    </Card>
    </>
  )
}

export default MenuCard