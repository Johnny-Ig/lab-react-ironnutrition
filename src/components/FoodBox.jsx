

import Card from 'react-bootstrap/Card';

function FoodBox(props) {
  console.log(props);

  return (
    <Card style={{ width: '250px' }} className='cardBox'>
    <Card.Img src={props.food.image} alt="comida" width={'180px'} />
    <Card.Body>
      <Card.Title>{props.food.name}</Card.Title>
      <Card.Text>Calories: {props.food.calories}</Card.Text>
      <Card.Text>Servings: {props.food.servings}</Card.Text>

    
    </Card.Body>
  </Card>
);
}

export default FoodBox