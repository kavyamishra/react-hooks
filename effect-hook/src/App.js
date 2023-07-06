import './App.css';
import {useState, useEffect} from 'react'

function App() {
  const [resource, setResource] = useState("posts")
  useEffect(()=>{
    console.log(resource)
    console.log("Resource changed")
  },[resource])


  return (
    <div className="App">
      <button onClick={()=>setResource("posts")}>Posts</button>
      <button onClick={()=>setResource("comments")}>Comments</button>
      <button onClick={()=>setResource("videos")}>Videos</button>
      
    </div>
  );
}

export default App;
