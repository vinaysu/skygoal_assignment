
import './App.css';
import Navbar from './Navbar';
import Home from './Home'
import UnderHome from './UnderHome';
import OurDestinations from './OurDestinations';
import Discount from './Discount';
import BookNow from './BookNow';
import Footer from './Footer';
function App() {
  return (
    <div className="App">

     <Navbar />
     <Home/>
     <UnderHome/>
     <OurDestinations />
     <Discount />
     <BookNow />
     <Footer/>
    
    </div>
  );
}

export default App;
