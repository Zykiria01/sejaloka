import { TiThMenu } from "react-icons/ti"; 
import NavButton from './NavButton';
import SignButton from './SignButton';
import Logo1 from '../assets/image/logo1.png';
import { Link } from 'react-router-dom';
import { authService } from '../configs/auth/auth';
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);
  
  return (
    <nav className={`flex flex-col md:flex-row items-start justify-between right-0 left-0 absolute md:items-center p-6 bg-opacity-50 bg-slate-100 h-auto gap-7`}>
      <div className='flex justify-between w-full md:w-max gap-3 items-center font-poppins font-bold'>
        <img className='w-40 h-7 md:w-40 md:h-10 items-center' src={Logo1} alt='' />
        <div className="md:hidden">
          <TiThMenu onClick={() => setisOpen(!isOpen)}/>
        </div>
      </div>

      <div className={`${isOpen ? 'flex ':'hidden'} md:flex`}>
        <ul className='flex flex-col md:flex-row gap-3 md:gap-10 text-lg'>
          <NavButton href='/'>Beranda</NavButton>
          <NavButton href='#Pengalaman'>Pengalaman</NavButton>
          <NavButton href='#Destinasi'>Destinasi</NavButton>
        </ul>
      </div>
      <div className={`${isOpen ? 'flex z-10':'hidden'} md:flex`}>
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
      
    </nav>
  );
};

export default Navbar;
