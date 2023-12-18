import NavButton from './NavButton';
import SignButton from './SignButton';
import Logo1 from '../assets/image/logo1.png';
import { Link } from 'react-router-dom';
import { authService } from '../configs/auth/auth';

const Navbar = () => {
  return (
    <nav className='flex justify-between right-0 left-0 absolute items-center p-6 bg-opacity-50 bg-slate-100 h-20 '>
      <div className='gap-3 items-center font-poppins font-bold'>
        <img className='w-20 h-7 md:w-30 md:h-10 items-center' src={Logo1} alt='' />
      </div>
      <div className=''>
        <div className='flex'>
          <ul className='flex gap-10 text-lg'>
            <NavButton href='/landingPage'>Beranda</NavButton>
            <NavButton href='#Pengalaman'>Pengalaman</NavButton>
            <NavButton href='#Destinasi'>Destinasi</NavButton>
        </ul>
        {authService.isAuthorized() ? (
          <Link to='/profile/account'>
            <SignButton title={'Akun Saya'} />
          </Link>
        ) : (
          <Link to='/Login'>
            <SignButton title={'Sign In'} />
          </Link>
        )}
        </div>
      </div>
      
    </nav>
  );
};

export default Navbar;
