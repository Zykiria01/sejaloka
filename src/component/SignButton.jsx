/* eslint-disable react/prop-types */


const SignButton = ({href}) => {
    return (
        <div className="hover:text-white hover:bg-orange-700 px-6 py-2 rounded-full font-poppins font-semibold text-slate-700" ><a href={href}>Sign In</a></div>
      )
    }  

export default SignButton