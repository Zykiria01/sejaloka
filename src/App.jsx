/* eslint-disable no-unused-vars */
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LandingPage from './pages/landingPage/Index';
import CityPage from './pages/citypage/Index';
import LoginPage from './pages/loginPage.jsx/Index';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='City' element={<CityPage/>}/>
        <Route path='Login' element={<LoginPage/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
