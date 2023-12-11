import { Routes, Route} from 'react-router-dom';
import LandingPage from '../pages/landingPage/Index';
import CityPage from '../pages/citypage/Index';

import SignUpPage from '../pages/signUpPage/Index';
import AccountPage from '../pages/profile/accountPage';
import FavoritePage from '../pages/profile/favoritPage';
import UlasanPage from '../pages/profile/ulasanpage'
import TampilanPage from '../pages/profile/tampilanPage'
import { PrivateRoute } from './privateroutes';
import { ProtectedRoute } from './protectedroutes';
import { Unauthorized } from '../pages/authorized/Unauthorized';
import { Private } from './private';
import { LoginPage } from '../pages/loginPage/Index';


const routers = () => {
  return (

    <Routes>
      <Route path='/' element={<PrivateRoute/>}>
        <Route path='/landingPage' element={<LandingPage/>}/>
      </Route> 
      <Route path="/" element={<Private/>}>
        <Route path='/City' element={<CityPage/>}/>
        <Route path='/profile/account' element={<AccountPage/>}/>
        <Route path='/profile/favorite' element={<FavoritePage/>}/>
        <Route path='/profile/ulasan' element={<UlasanPage/>}/>
        <Route path='/profile/tampilan' element={<TampilanPage/>}/>
      </Route>
      <Route path="/" element={<ProtectedRoute/>}>
        <Route path='/Login' element={<LoginPage/>}/>
        <Route path='/SignUp' element={<SignUpPage/>}/>

      </Route>
        <Route path='/Unauthorized' element={<Unauthorized/>}/>
       

    </Routes>
   
  )
}

export default routers;

