import { useState } from "react";


function AddFoodForm ({addFood}) {
    
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState(0);
    const [servings, setServings] = useState(0);

    const handleNameInput = e => setName(e.target.value);
    const handleImageInput = e => setImage(e.target.value);
    const handleCaloriesInput = e => setCalories(e.target.value);
    const handleServingsInput = e => setServings(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newFood = {"id": toString(Math.random()), "name": name, "image": image, "calories": calories, "servings": servings}
        addFood(newFood);

        
   
    }
    //test
    
    return (

        <div> 
            <form onSubmit={handleSubmit}>
                <label> Name</label>
                <input type="text" name="name" value={name} onChange={handleNameInput}/>

                <label> Image</label>
                <input type="text" name="image" value={image} onChange={handleImageInput}/>

                <label> Calories</label>
                <input type="number" name="calories" value={calories} onChange={handleCaloriesInput}/>

                <label> Servings</label>
                <input type="number" name="servings" value={servings} onChange={handleServingsInput}/>

                <button type="submit">Add new Food</button>
            </form>
        </div>

    )
}

export default AddFoodForm;