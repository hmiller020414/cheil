import './App.css';
import { Component } from 'react';

import ProductData from './services/Data';

class App extends Component {

  async componentDidMount() {
    const products = await ProductData.index()
    console.log(products)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          
        </header>
      </div>
    );
  }
  
}


export default App;
