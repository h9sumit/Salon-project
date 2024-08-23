// import logo from './logo.svg';
import './App.css';
import Header from './Home/Header';
import HeroPage from './Home/HeroPage';
import Navbar from './Home/Navbar';
import About from './About/App';
import Product from './Product/Product';
import Service from './ServicesPage/Services';


function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <HeroPage />
      <About/>
      <Service />
      <Product />
    
      {/* <About /> */}
    </div>
  );
}

export default App;
