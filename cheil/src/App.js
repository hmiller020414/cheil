import './App.scss';

import Hero from './components/Hero/Hero';
import ProductGallery from './components/ProductGallery/ProductGallery'

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
