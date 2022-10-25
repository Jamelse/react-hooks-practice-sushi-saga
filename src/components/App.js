import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";


function App() {
  const[sushi, setSushi] = useState([])
  const [sushiIndexes, setSushiIndexes] = useState(0)
  const [money, setMoney] = useState(100)
 
useEffect(() => {
    fetch('http://localhost:3001/sushis')
    .then(r => r.json())
    .then((data) => setSushi(data))
  }, [])

  function isEaten(id, price, eaten){
   if (!eaten && money >= price){
    setSushi(sushi.map(sush => sush.id === id ? {...sush, eaten: true} : sush))
    setMoney(money - price)
   }
  }

 function moreSushiClickHandler(){
    setSushiIndexes((sushiIndexes + 4) % sushi.length)
  }

 return (
    <div className="app">
      <SushiContainer 
      sushi={sushi.slice(sushiIndexes, sushiIndexes + 4)} 
      onMoreClick={moreSushiClickHandler}
      onSushiEat={isEaten}/>
     
      <Table money={money} 
      plates={sushi.filter(sush => sush.eaten)}/>
    </div>
  );
}

export default App;
