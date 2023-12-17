import { AuthLayout } from '../../component/Layouts/AuthLayout';
import Logofb from '../../assets/image/logofb.png';
import Logog from '../../assets/image/logog.png';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { APIAuth } from '../../configs/authAPI';

export const LoginPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleEmail = (event) => {
    setUser({ ...user, email: event.target.value });
  };
  const handlePassword = (event) => {
    setUser({ ...user, password: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(user);

    try {
      await APIAuth.signInWithCredentials({
        email: user.email,
        password: user.password,
      });

      navigate('/');
      alert('login success');
    } catch (error) {
      console.log(error);
      alert('Username atau Password Salah');
    }
  };

  const signInWithGoogle = async () => {
    try {
      await APIAuth.signInWithGoogleOAuth();
      alert('login successful');
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  const signWithFacebook = async () => {
    try {
      await APIAuth.signInWithFacebookAuth();
      alert('login successful');
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthLayout>
      <h1 className='text-black font-bold font-poppins text-center text-2xl'>
        Selamat Datang Di Sejaloka!
      </h1>
      <p className='text-center font-poppins font-light text-xl text-black'>
        Masuk ke Akunmu
      </p>
      <div className='w-full'>
        <form
          onSubmit={handleSubmit}
          className='flex flex-col gap-4 items-center'
          action='submit'
        >
          <input
            className='border-2 w-3/4 p-2 rounded-xl shadow-lg bg-white'
            type='text'
            placeholder='Username atau alamat Email'
            value={user.email}
            onChange={handleEmail}
          />
          <input
            className='border-2 w-3/4 p-2 rounded-xl shadow-lg bg-white'
            type='password'
            placeholder='Password'
            value={user.password}
            onChange={handlePassword}
          />
          <button
            type='submit'
            className='w-[129px] h-[42px] bg-amber-400 hover:bg-amber-500 rounded-3xl mt-7 shadow-xl font-poppins font-semibold text-black'
          >
            Masuk
          </button>
        </form>
        <div className='flex flex-col '>
          <h1 className='text-center font-poppins font-medium mt-10 text-black'>
            Atau Masuk Dengan
          </h1>
          <div className='flex justify-center gap-4 mt-5'>
            <img
              onClick={signWithFacebook}
              className='w-10 h-10 cursor-pointer'
              src={Logofb}
              alt=''
            />
            <img
              onClick={signInWithGoogle}
              className='w-10 h-10 cursor-pointer'
              src={Logog}
              alt=''
            />
          </div>
          <h1 className='text-center font-poppins font-medium mt-10 text-black'>
            Belum punya akun?{' '}
            <span className='font-bold hover:underline'>
              <Link to='/SignUp'>Daftar Disini</Link>
            </span>
          </h1>
          <h1 className='text-center font-poppins font-medium mt-10 text-black hover:text-red-600 hover:underline'>
            <Link to='/'>Ke Beranda</Link>
          </h1>
        </div>
      </div>
    </AuthLayout>
  );
};
