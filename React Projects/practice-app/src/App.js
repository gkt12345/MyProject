import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './Store/Components/NavbarComponent';
import { Container } from 'react-bootstrap';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Cancel from './Store/Pages/Cancel';
import Store from './Store/Pages/Store';
import Success from './Store/Pages/Success';


function App() {
  return (<>
    <Container>
      <NavbarComponent></NavbarComponent>  
    <BrowserRouter>
        <Routes>
          <Route index element={<Store />} />
          <Route path='success' element={<Success />} />
          <Route path='cancel' element={<Cancel />} />
        </Routes>
    </BrowserRouter>
    </Container>   
</>);
}

export default App;



// for installing pacages
// npm install bootstrap react-bootstrap react-router-dom 