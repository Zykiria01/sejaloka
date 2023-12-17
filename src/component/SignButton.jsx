/* eslint-disable react/prop-types */

const SignButton = ({ title }) => {
  return (
    <div className='hover:text-white hover:bg-orange-700 px-6 py-2 rounded-full font-poppins font-semibold text-slate-700 text-lg transition-colors duration-300'>
      <p>{title}</p>
    </div>
  );
};

export default SignButton;
