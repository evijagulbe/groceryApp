import image from './shopping.jpg';
import imageTwo from './man.jpg';
import './App.css';
import { GroceryList } from './GroceryList';

function App() {
  return (
    <div className='App'>

      <div className='container'>
        <img src={ image } alt="Shopping bag" width="200px"/>
      </div>

      <div className='container'>
        <h1>Grocery list</h1>
      </div>

      <GroceryList />

      <div className='container'> 
        <img src={ imageTwo } alt="Man" width="200px"/>
      </div>

    </div>
  );
}

export default App;
