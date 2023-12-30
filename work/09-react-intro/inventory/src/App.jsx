import './app.css'
import Reorder from "./Reorder";
import { useState } from "react";
function App() {
    const [count, setCount] = useState(5);
  
    const handleIncrement = () => {
      setCount(count + 1);
    };
  
    const handleDecrement = () => {
      if (count > 0) {
        setCount(count - 1);
      }
    };
    const reorderCount = () => {
        setCount(5);
      }
  
    return (
      <div className="app">
        <p>A count for an inventory: {count}</p>
        <div class="btn-container"> 
        <div className="counter-div">
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement} disabled={!count}>-</button>
        </div>
        <div className="reorder">
        {count === 0 ? <Reorder onReorder={reorderCount} /> : <></>}
        </div>
        </div>
      </div>
    );
  }
  
  export default App;

  
  
  
  
  