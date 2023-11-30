import { AuthLayout } from '../../component/Layouts/AuthLayout';
import Logofb from '../../assets/image/Logofb.png';
import Logotw from '../../assets/image/Logotw.png';
import Logog from '../../assets/image/Logog.png';
import { Link } from 'react-router-dom';

const loginPage = () => {
  return (
    <AuthLayout>
      <h1 className='text-black font-bold font-poppins text-center text-2xl'>
        Selamat Datang Di Sejaloka!
      </h1>
      <p className='text-center font-poppins font-light text-xl text-black'>
        Masuk ke Akunmu
      </p>
      <div className='w-full'>
        <form className='flex flex-col gap-4 items-center' action='submit'>
          <input
            className='border-2 w-3/4 p-2 rounded-xl shadow-lg bg-white'
            type='text'
            placeholder='Username atau alamat Email'
          />
          <input
            className='border-2 w-3/4 p-2 rounded-xl shadow-lg bg-white'
            type='text'
            placeholder='Password'
          />
          <button
            type='button'
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
            <img className='w-10 h-10' src={Logofb} alt='' />
            <img className='w-10 h-10' src={Logog} alt='' />
            <img className='w-10 h-10' src={Logotw} alt='' />
          </div>
          <h1 className='text-center font-poppins font-medium mt-10 text-black'>
            Belum punya akun?{' '}
            <span className='font-bold hover:underline'>
              <Link to='/SignUp'>Daftar Disini</Link>
            </span>
          </h1>
        </div>
      </div>
    </AuthLayout>
  );
};

export default loginPage;
