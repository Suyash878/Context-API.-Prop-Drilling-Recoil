import {useContext} from "react" 
import { countContext } from "./context";
import { useRecoilState, useRecoilValue, RecoilRoot } from "recoil";
import { countAtom } from "./store/atoms/count";

function App() {


  // Anything that uses a useRecoil.. needs to be wrapped inside a RecoilRoot.

  return (
    <div>
      
    <RecoilRoot>
    <Count />
    <IsEven></IsEven>
    </RecoilRoot>
    </div>
  )
}

function Count()
{
  return (
    <div>
    <CountRenderer></CountRenderer>
    <Buttons />    
    </div>
  )
}

function CountRenderer()
{ 
  const count = useRecoilValue(countAtom);
  return <div>
    <b>
    {count}
    </b>
  </div>
}

function IsEven()
{
  const count = useRecoilValue(countAtom);

  if(!(count&1))
    {
      return (
        <div>It is even</div>

      )
    }
  }

function Buttons()
{ 
  const [count,setCount] = useRecoilState(countAtom);
  return (
    <div>
      <button onClick = {()=> 
        {
          setCount(count=>count+1);
        }
      }>Increase</button>
      <button onClick = {()=> 
        {
          setCount(count=>count-1);      
        }
      }>Decrease</button>
    </div>
  )
}

export default App