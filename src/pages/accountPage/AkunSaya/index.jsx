const AkunSaya = () => {
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='w-3/4 bg-gray-300 p-6 rounded-lg mx-60'>
        <ul className='space-y-2'>
          <li>
            <a href='' className=' hover:underline font-semibold'>
              Akun Saya
            </a>
          </li>
          <li>
            <a href='' className=' hover:underline font-semibold'>
              To Go List Saya
            </a>
          </li>
          <li>
            <a href='' className=' hover:underline font-semibold'>
              Ulasan Saya
            </a>
          </li>
          <li>
            <a href='' className=' hover:underline font-semibold'>
              Tampilan
            </a>
          </li>
        </ul>
      </div>
      <div className='flex flex-col bg-gray-400 w-1/3 items-center justify-center p-10 rounded-lg mx-40'>
        <div className='btn btn-ghost btn-circle avatar'>
          <div className='w-16 h-16 rounded-full'>
            <img
              src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
              alt='Avatar'
            />
          </div>
        </div>
        <div className='text-black mt-5'>
          <h1 className='text-xl font-bold'>Dicoding</h1>
        </div>
        <form className='text-black'>
            <tr>
                <td>Nama</td>
                <td className='px-8'>:</td>
                <td>Dicoding Indonesia</td>
            </tr>
            <tr>
                <td>Deskripsi</td>
                <td className='px-8'>:</td>
                <td>Saya suka berkeliling</td>
            </tr>
            <tr>
                <td>Lokasi</td>
                <td className='px-8'>:</td>
                <td>Bandung</td>
            </tr>
            <tr>
                <td>Email</td>
                <td className='px-8'>:</td>
                <td>123@gmail.com</td>
            </tr>
        </form>
      </div>
    </div>
  );
};

export default AkunSaya;
