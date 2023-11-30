import NavButton from "./NavButton";
import SignButton from "./SignButton";
import Logo1 from "../assets/image/logo1.png"
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="flex justify-between right-0 left-0 absolute items-center p-6 bg-slate-200 bg-opacity-50">
        <div className="flex gap-3 items-center font-poppins font-bold">
            <img className="w-30 h-10 items-center"src={Logo1} alt="" />
        </div>
        <ul className="flex gap-10 text-lg">
            <NavButton href="/" >Beranda</NavButton>
            <NavButton href="/#Pengalaman">Pengalaman</NavButton>
            <NavButton href="/#Destinasi">Destinasi</NavButton>
        </ul>
        <Link to="/Login"> <SignButton/></Link>

    </nav>
  )
}

export default Navbar;