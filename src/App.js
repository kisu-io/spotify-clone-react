import './App.css';
import Navbar from './components/Navbar.js';
import Section1 from './components/Section1.js';
import Section2 from './components/Section2.js';
import Section3 from './components/Section3.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </div>
  );
}

export default App;
