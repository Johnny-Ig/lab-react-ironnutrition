
import { useState } from 'react';
import './App.css';
import foods from "./foods.json";
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {

  const [ foodList, setFoodList ] = useState(foods)
  const [filteredFood, setFilteredFood] = useState(foods);

  
  const nuevoProduct = (newProduct) => {
    
    
    setFoodList([...foodList, newProduct])
    setFilteredFood([...foodList, newProduct])
  }
  const clone = JSON.parse(JSON.stringify(foodList))
  return (
    <div className="App">
   
    <h2>LISTA DE PRODUCTOS</h2>

    <div className='cardContainer'>
    {clone.map((eachProduct, index)=>{
      return(
        <FoodBox key={index} food={eachProduct} /> 
      )
    })}
    </div>
     <AddFoodForm nuevoProduct={nuevoProduct} />

    </div>
  );
}

export default App;
