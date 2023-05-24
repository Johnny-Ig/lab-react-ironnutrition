import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AddFoodForm(props) {
  const [nameInput, setNameInput] = useState('');
  const [imageInput, setImageInput] = useState('');
  const [caloriesInput, setCaloriesInput] = useState(0);
  const [servingsInput, setServingsInput] = useState(0);

  const handleNameChange = (event) => {
    let value = event.target.value;

    setNameInput(value);
  };

  const handleImageChange = (event) => {
    let value = event.target.value;

    setImageInput(value);
  };

  const handleCaloriesChange = (event) => {
    let value = event.target.value;

    setCaloriesInput(value);
  };

  const handleServingsChange = (event) => {
    let value = event.target.value;

    setServingsInput(value);
  };

  const formSubmit = (event) => {
    event.preventDefault();

    const newProduct = {
      name: nameInput,
      image: imageInput,
      calories: caloriesInput,
      servings: servingsInput,
    };
    props.AddFoodForm(newProduct);

    setNameInput('');
    imageInput('');
    caloriesInput(0);
    servingsInput(0);
  };
  return (
    <div className="addForm">
      <h2>Añade comida</h2>
      <Form onSubmit={formSubmit}>
        <Form.Group>
          <Form.Label htmlFor="name">Name</Form.Label>
          <Form.Control
            value={nameInput}
            onChange={handleNameChange}
            type="text"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="image">Image</Form.Label>
          <Form.Control
            value={imageInput}
            onChange={handleImageChange}
            type="text"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="calories">Calories</Form.Label>
          <Form.Control
            value={caloriesInput}
            onChange={handleCaloriesChange}
            type="number"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="servings">Servings</Form.Label>
          <Form.Control
            value={servingsInput}
            onChange={handleServingsChange}
            type="number"
          />
        </Form.Group>
        <Form.Group>
          <Button variant="warning" type="submit" className="botonAdd">
            Add Food
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}

export default AddFoodForm;
