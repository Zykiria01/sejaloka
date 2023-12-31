/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { authService } from '../../../configs/auth/auth';

const ProfileLayout = ({ children }) => {
  return (
    <div className='flex flex-col items-start justify-center min-h-screen p-10 gap-5 pt-40 bg-white md:flex md:flex-row'>
      <div className='w-full sm:w-1/4 p-6 border-4 rounded-lg sm:flex-row'>
        <ul className='space-y-5 sm:flex sm:flex-col sm:items-start'>
          <li>
            <Link
              to='/profile/account'
              className='font-semibold hover:text-black'
            >
              Akun Saya
            </Link>
          </li>
          <li>
            <Link
              to='/profile/favorite'
              className='font-semibold hover:text-black'
            >
              To Go List Saya
            </Link>
          </li>
          <li>
            <Link
              to='/profile/ulasan'
              className='font-semibold hover:text-black'
            >
              Ulasan Saya
            </Link>
          </li>
          <li>
            <Link
              to='/profile/tampilan'
              className='font-semibold hover:text-black'
            >
              Tampilan
            </Link>
          </li>
          <li>
            <button
              onClick={() => authService.logOut()}
              className='font-bold text-red-600 pt-5'
            >
              Keluar
            </button>
          </li>
        </ul>
      </div>
      <div className='flex flex-col border-4 w-full sm:w-2/4 items-center justify-center h-auto p-2 rounded-lg'>
        {children}
      </div>
    </div>
  );
};

export default ProfileLayout;
