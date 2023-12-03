import { Link } from "react-router-dom";

const ProfileLayout = ({children}) => {
  return (
    <div className='flex items-start justify-center  min-h-screen p-10 gap-5 pt-40'>
      <div className='w-1/4 p-6 border-4 rounded-lg'>
        <ul className='space-y-5'>
          <li>
            <Link to='/profile/account' className=' hover:underline font-semibold'>
              Akun Saya
            </Link>
          </li>
          <li>
            <Link to='/profile/favorite' className=' hover:underline font-semibold'>
              To Go List Saya
            </Link>
          </li>
          <li>
            <Link to='/profile/ulasan' className=' hover:underline font-semibold'>
              Ulasan Saya
            </Link>
          </li>
          <li>
            <Link to='/profile/tampilan' className=' hover:underline font-semibold'>
              Tampilan
            </Link>
          </li>
          <li>
            <button className="font-bold text-red-600 pt-5">Keluar</button>
          </li>
        </ul>
      </div>
      <div className='flex flex-col border-4 w-2/4 items-center justify-center h-auto p-2 rounded-lg'>
        {children}
      </div>
    </div>
  );
};

export default ProfileLayout;
