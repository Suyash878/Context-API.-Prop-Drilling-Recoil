import {useContext,useState} from "react" 
import { countContext } from "./context";

function App() {

  const [count,setCount] = useState(0);

  return (
    <div>
    <countContext.Provider value = {count}>
      <Count setCount = {setCount}/>
    </countContext.Provider>
    </div>
  )
}

function Count({setCount})
{
  return (
    <div>
    <CountRenderer></CountRenderer>
    <Buttons setCount = {setCount}/>    
    </div>
  )
}

function CountRenderer()
{ 
  const count = useContext(countContext);
  return <div>
    <b>
    {count}
    </b>
  </div>
}

function Buttons({setCount})
{ 
  const count = useContext(countContext);
  return (
    <div>
      <button onClick = {()=> 
        {
          setCount(count=>count+1);
        }
      }>Increment</button>
      <button onClick = {()=> 
        {
          setCount(count=>count-1);      
        }
      }>Decrement</button>
    </div>
  )
}

export default App
