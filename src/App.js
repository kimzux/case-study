import Hero from './components/Hero';
import Navbar from './components/Navbar'
import Ourmission from './components/Ourmission';
import Product from './components/Product';


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Ourmission/>
      <Product/>
    </div>
  );
}

export default App;
