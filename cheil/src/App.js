import './App.css';
import { Component } from 'react';

import Hero from './components/Hero';

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
          <Hero />
        </header>
      </div>
    );
  }

}


export default App;
