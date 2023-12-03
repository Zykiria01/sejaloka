/* eslint-disable no-unused-vars */
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LandingPage from './pages/landingPage/Index';
import CityPage from './pages/citypage/Index';
import LoginPage from './pages/loginPage/Index';
import SignUpPage from './pages/signUpPage/Index';
import AccountPage from './pages/profile/accountPage';
import FavoritePage from './pages/profile/favoritPage';
import UlasanPage from './pages/profile/ulasanpage'
import TampilanPage from './pages/profile/tampilanPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/City' element={<CityPage/>}/>
        <Route path='/Login' element={<LoginPage/>}/>
        <Route path='/SignUp' element={<SignUpPage/>}/>
        <Route path='/profile/account' element={<AccountPage/>}/>
        <Route path='/profile/favorite' element={<FavoritePage/>}/>
        <Route path='/profile/ulasan' element={<UlasanPage/>}/>
        <Route path='/profile/tampilan' element={<TampilanPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
