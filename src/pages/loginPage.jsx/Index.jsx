import { AuthLayout } from "../../component/Layouts/AuthLayout";
import Logofb from "../../assets/image/Logofb.png"
import Logotw from "../../assets/image/Logotw.png"
import Logog from "../../assets/image/Logog.png"
import { Link } from "react-router-dom";


const loginPage = () => {
  return (
    <AuthLayout>
        <h1 className="text-black font-bold font-poppins text-center">
        Selamat Datang di Sejaloka!
        </h1>
        <p className="text-center font-poppins">Masuk ke Akunmu</p>
        <div className="w-full">
            <form className="flex flex-col gap-4 items-center" action="submit">
                <input className='border-2 w-full p-2 rounded-lg shadow-lg' type="text" 
                placeholder="Username atau alamat Email"/>
                <input className='border-2 w-full p-2 rounded-lg shadow-lg ' type="text" 
                placeholder="Password"/>
                <button type="button" className="w-[129px] h-[42px] bg-amber-400 hover:bg-amber-500 rounded-lg mt-20 shadow-xl font-poppins font-semibold">Masuk</button>
            </form>
            <div className="flex flex-col ">
                <h1 className="text-center font-poppins font-medium mt-10">Atau Masuk Dengan</h1>
                <div className="flex justify-center gap-4 mt-5">
                    <img className="w-10 h-10" src={Logofb}  alt="" />
                    <img className="w-10 h-10" src={Logog} alt="" />
                    <img className="w-10 h-10" src={Logotw} alt="" />
                </div>
                <h1 className="text-center font-poppins font-medium mt-10">Belum punya akun? <span className="font-bold"><Link to="/SignUp">Daftar Disini</Link></span></h1>
            </div>
        </div>


    </AuthLayout>
  )
}

export default loginPage;