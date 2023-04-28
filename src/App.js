import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Homescreen from './screens/Homescreen'
import Cartscreen from './screens/Cartscreen';
import Loginscreen from './screens/Loginscreen'


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>
        <Routes>
          <Route path="/" element={<Homescreen/>}/>
          <Route path="/cart" element={<Cartscreen/>}/>
          <Route path="/login" element={<Loginscreen/>}/>
          </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
