import Card from "./components/Card.jsx";
import { data } from "./mockdata"

function App() {
  return (
    <div className="container">
      {data.map((item) =>
        <Card img={item.image} tittle={item.title} description={item.description.slice(0, 10)} price={item.price} />
      )}


    </div>)
}

export default App;