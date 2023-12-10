import foodsJson from "../foods.json";
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";

import { useState } from "react";

function FoodList() {
    
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
        <div>
            <AddFoodForm addFood={addFood}/>
            {food.map(element => {
                return (
            <FoodBox deleteFood= {deleteFood} food={element} key={element.id}  />
      )
    })}
        </div>
    )
} 

export default FoodList;