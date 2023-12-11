import { useState } from 'react';
import { AuthLayout } from '../../component/Layouts/AuthLayout';
import { Link, useNavigate } from 'react-router-dom';
import { APIAuth } from '../../configs/authAPI';

const signUpPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    nama : "",
    email : "",
    password : "",
  });

  const handleName = (event) => {
    setUser({...user, nama: event.target.value});
  }
  const handleEmail = (event) => {
    setUser({...user, email: event.target.value});
  }
  const handlePassword = (event) => {
    setUser({...user, password: event.target.value});
  }

  const handlesignUp = async (event) => {
    event.preventDefault();
    console.log(user);

    try {
      await APIAuth.signUpWithCredentials({
        nama: user.nama,
        email: user.email,
        password: user.password,
      });
    
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <AuthLayout>
      <h1 className='text-black font-bold font-poppins text-center text-2xl'>
        Selamat Datang di Sejaloka!
      </h1>
      <p className='text-center font-poppins text-black text-xl'>
        Daftarkan Akunmu
      </p>
      <div className='w-full'>
        <form onSubmit={handlesignUp} className='flex flex-col gap-2' action='submit'>
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
            onChange={handleName}
            value={user.nama}
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
            onChange={handleEmail}
            value={user.email}
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
            onChange={handlePassword}
            value={user.password}
          />
          <div className='flex justify-center'>
            <button
              type='submit'
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
              <Link to='/login'>Masuk Disini</Link>
            </span>
          </h1>
        </div>
      </div>
    </AuthLayout>
  );
};

export default signUpPage;
