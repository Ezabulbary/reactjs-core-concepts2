import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    {name:'Laptop', price: 40000},
    {name:'Mobail', price: 14000},
    {name:'Watch', price: 400},
    {name:'Tablet', price: 4000},
    {name:'Fan', price: 2000},
    {name:'Air-Condition', price: 35000},
  ]
  return (
    <div className="App">
      {
        products.map(product => <Products name={product.name} price={product.price}></Products>)
      }
    </div>
  );
}

function Products(props){
  return(
    <div className="containar">
      <h3>Name: {props.name}</h3>
      <p>Price: {props.price}</p>
    </div>
  )
}

export default App;
