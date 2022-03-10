import { useState } from 'react'
import ShowInfo from './components/ShowInfo'

function App() {
  const [count, setCout] = useState(0);
  const [myName, setMyName] = useState("Thế Anh");
  const [status, setStatus] = useState("false");

  const [products, setProducts] = useState([
    {id: 1, name: "Product A"},
    {id: 2, name: "Product B" },
    {id: 3, name: "Product C" },
  ]);

  return (
    <div>
      Count: {count} <button onClick={() => setCout(count + 1)}>Click</button>
      <hr/>
      {myName} <button onClick={() => setMyName("NTA")}>Change Name</button>
      <hr />
      <button onClick={() => setStatus(!status)}>Toggled</button>
      <hr />
      {status ? products.map((item, index) => <div key={index}>{item.name}</div>) : ""}
      <ShowInfo name="Thế Anh 1"/>
      <ShowInfo name="Thế Anh 2" />
      <ShowInfo name="Thế Anh 3" />
    </div>
  )
}

export default App;
