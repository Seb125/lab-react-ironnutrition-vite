import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

import { useState } from "react";

function App() {

  const[food, setFood] = useState(foodsJson);

  const deleteFood = (id) => {
    const updatedFood = food.filter(food => {
      return food.id !== id;
    });

    setFood(updatedFood);
  }

  const addFood = (newFood) => {
    setFood([...food, newFood]);
  } 

  return (
    <div className="App">
    <AddFoodForm addFood={addFood}/>
    {food.map(element => {
      return (
        <FoodBox deleteFood= {deleteFood} food={element} key={element.id}  />
      )
    })}
      
    </div>
  );
}

export default App;
