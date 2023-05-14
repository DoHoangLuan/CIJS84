import './App.css';
import Card from './Components/Card';
import { Data } from './data/data';

function App() {
  return (
    Data.map((item) => (
      <Card key={item.id} tittle={item.title} image={item.image} description={item.decription} />
    ))
  )
}

export default App;
