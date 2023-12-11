import { AuthLayout } from '../../component/Layouts/AuthLayout';
import { Link } from 'react-router-dom';

const signUpPage = () => {
  return (
    <AuthLayout>
      <h1 className='text-black font-bold font-poppins text-center text-2xl'>
        Selamat Datang di Sejaloka!
      </h1>
      <p className='text-center font-poppins text-black text-xl'>
        Daftarkan Akunmu
      </p>
      <div className='w-full'>
        <form className='flex flex-col gap-2' action='submit'>
          <label
            className='text-left font-bold pl-1 text-black text-lg'
            htmlFor=''
          >
            Nama
          </label>
          <input
            className='border-2 w-full p-2 rounded-xl shadow-lg pl-7 bg-white'
            type='text'
            placeholder='Nama Kamu'
          />
          <label
            className='text-left font-bold pl-1 text-black text-lg'
            htmlFor=''
          >
            Email
          </label>
          <input
            className='border-2 w-full p-2 rounded-xl shadow-lg pl-7 bg-white'
            type='text'
            placeholder='email@example.com'
          />
          <label
            className='text-left font-bold pl-1 text-black text-lg'
            htmlFor=''
          >
            Password
          </label>
          <input
            className='border-2 w-full p-2 rounded-xl shadow-lg pl-7 bg-white'
            type='password'
            placeholder='Password Kamu'
          />
          <div className='flex justify-center'>
            <button
              type='button'
              className='w-[129px] h-[42px] bg-amber-400 hover:bg-amber-500 rounded-3xl mt-7 shadow-xl font-poppins font-semibold text-black'
            >
              Daftar
            </button>
          </div>
        </form>
        <div className='flex flex-col '>
          <h1 className='text-center font-poppins font-medium mt-10 text-black'>
            Sudah Punya Akun?{' '}
            <span className='font-bold hover:underline'>
              <Link to='/Login'>Masuk Disini</Link>
            </span>
          </h1>
        </div>
      </div>
    </AuthLayout>
  );
};

export default signUpPage;
