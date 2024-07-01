import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [random, setRandom ] = useState(true)
  const [smooth, setSmooth] = useState(false)

  useEffect(() => {
    let interval_ID1;
    let interval_ID2;
    if (random) {
       interval_ID1 =  setInterval(() => {
          let hue = Math.random()*360;
          let saturation = Math.random()*100;
          let lightness = Math.random()*100;
          document.body.style.backgroundColor =  `hsl(${hue}, ${saturation}%, ${lightness}%)`  
      }, 1000);
    }

    if (smooth) {
       let hue = 0
       interval_ID2 =  setInterval(() => { 
           hue=  hue<360 ? hue+1: 0
          document.body.style.backgroundColor =  `hsl(${hue}, ${50}%, ${70}%)`
      }, 30);
    }

    return () => {
      clearInterval(interval_ID1);
      clearInterval(interval_ID2);
    };
  }, [random , smooth])
  
  
  return (
    <>
      <div className="buttons">
        <button onClick={()=>{setRandom(true);  setSmooth(false);}} className={random?"active": "" } >Random Color Generation</button>
        <button onClick={()=>{setSmooth(true);  setRandom(false);}} className={smooth?"active": "" } >Smooth Color Generation</button>
      </div>
    </>
  );
}

export default App;
