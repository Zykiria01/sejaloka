import ProfileLayout from "../../layout/profilelayout";

const AkunSaya = () => {
  return (
    <ProfileLayout>
      <div className="flex flex-col items-center justify-center w-full gap-4 p-10">
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
        
    </ProfileLayout>
  );
};

export default AkunSaya;
