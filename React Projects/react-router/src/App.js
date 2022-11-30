import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Menu from './Component/Menu';
import About from './Component/About';
import Contact from './Component/Contact';
import Error from './Component/Error';


function App() {
  return (<>
  <BrowserRouter>
  <Menu />
  <Routes>
    <Route exact path="/" element={<About />} />
    <Route exact path="/contact" element={<Contact />} />
    <Route exact path="/error" element={<Error />} />
  </Routes>
  </BrowserRouter>    
    </> );
}

export default App;
