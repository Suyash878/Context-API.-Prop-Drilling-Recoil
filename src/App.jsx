import {useState} from "react" 
import { countContext } from "./context";

function App() {

  const [count,setCount] = useState(0);

  return (
    <div>
    <countContext.Provider value = {count}>
      <Count count = {count}/>
    </countContext.Provider>
    </div>
  )
}

function Buttons({setCount})
{ 
  const count = useContext(countContext);
  return (
    <div>
      <button onClick = {()=> 
        {
          setCount(count+1);
        }
      }>Increment</button>
      <button onClick = {()=> 
        {
          setCount(count-1);      
        }
      }>Decrement</button>
    </div>
  )
}

function CountRenderer()
{ 
  const count = useContext(countContext);
  return <div>
    {count}
  </div>
}

function Count({count})
{
  return (
    <div>
    <Buttons count = {count} setCount = {setCount}/>
    <countRenderer></countRenderer>    
    </div>
  )
}

export default App