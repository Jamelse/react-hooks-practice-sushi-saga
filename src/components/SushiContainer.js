import React from "react";
import MoreButton from "./MoreButton";
import Sushi from './Sushi'

function SushiContainer({sushi, onMoreClick, onSushiEat}) {
  
   return (
    <div className="belt">
      {sushi.map((sush) => {
        return (<Sushi sushi={sush} onSushiEat={onSushiEat}/>
      )}) }
      <MoreButton onMoreClick={onMoreClick}/>
    </div>
  );
}

export default SushiContainer;
