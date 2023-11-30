/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Logo2 from '../../assets/image/logo2.jpg';
import Logo5 from '../../assets/image/logo5.png';

export const AuthLayout = ({ title, children }) => {
  return (
    <>
      <div className='flex flex-col md:flex-row w-full mx-0 bg-white'>
        <div className='w-3/4 relative hidden lg:block'>
          <img className='object-cover h-screen' src={Logo2} alt='' />
          <div className='flex w-full items-center justify-center absolute top-[50%]'>
            <img className='w-80' src={Logo5} alt='' />
          </div>
        </div>

        <div className='flex flex-col gap-5 lg:p-10 sm:p-40 p-10 w-full h-screen lg:w-2/4 items-center justify-center'>
          {children}
        </div>
      </div>
    </>
  );
};
