import React from "react";

function Food(dish){
  return(
    <h1>{dish.name} + {dish.picture}</h1>
  )
}

const foodilke = [{id :1, name : "a", picture:"A", rating : 1.1}, {id :2, name : "b", picture:"B", rating : 1.1},{id :3, name : "c", picture:"C", rating : 1.1}];

function renderFood(dish){
  return <Food key={dish.name} name={dish.name} picture={dish.picture} />;
}

function App() {
  return (
    <div className="App">
      HELLO
        {foodilke.map(renderFood)}
    </div>
    
  );
}

export default App;
