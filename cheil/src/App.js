import './App.css';

import Hero from './components/Hero';
import ProductGallery from './components/ProductGallery'

const App = () => {

    return (
      <div className="App">
        <header className="App-header">
          <Hero />
          <ProductGallery />
        </header>
      </div>
    );

}


export default App;
