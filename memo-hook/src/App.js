import './App.css';
import {useState,useMemo} from 'react';

function App() {
  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)
  const doubleNumber = useMemo(() => {
    return slowFunction(number)
  },[number])
  const themeStles = {
    backgroundColor:dark?"black":"white",
    color:dark?"white":'black'
  }
  return (
    <div className='App'>
      <input type="number" value={number} onChange={e=>setNumber(parseInt(e.target.value))} />
      <button onClick={()=>setDark(prevDark=>!prevDark)}>Change Theme</button>
      <div style={themeStles}>{doubleNumber}</div>
      </div>
  );
}
function slowFunction(num){
  console.log("calling slow function");
  setTimeout(20000)
  return num * 2
}

export default App;
