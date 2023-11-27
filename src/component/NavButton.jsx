/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


const NavButton = ({href, children, title}) => {
    return (
      <li className="hover:text-white hover:bg-orange-700 px-6 py-2 rounded-full font-poppins font-semibold text-slate-700"><a href={href}>{children}</a></li>
    )
  }
  
  export default NavButton;