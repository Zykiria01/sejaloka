import { AuthLayout } from "../../component/Layouts/AuthLayout";
import { Link } from "react-router-dom";


const signUpPage = () => {
  return (
    <AuthLayout>
        <h1 className="text-black font-bold font-poppins text-center">
        Selamat Datang di Sejaloka!
        </h1>
        <p className="text-center font-poppins">Daftarkan Akunmu</p>
        <div className="w-full">
            <form className="flex flex-col gap-2" action="submit">
                <label className="text-left font-bold pl-7" htmlFor="">Nama</label>
                <input className='border-2 w-full p-2 rounded-2xl shadow-lg pl-7' type="text" 
                placeholder="Nama Kamu"/>
                <label className="text-left font-bold pl-7" htmlFor="">Email</label>
                <input className='border-2 w-full p-2 rounded-2xl shadow-lg pl-7' type="text" 
                placeholder="email@example.com"/>
                <label className="text-left font-bold pl-7" htmlFor="">Domisili</label>
                <input className='border-2 w-full p-2 rounded-2xl shadow-lg pl-7' type="text" 
                placeholder="Tempat Kamu Tinggal Saat ini"/>
                <label className="text-left font-bold pl-7" htmlFor="">Password</label>
                <input className='border-2 w-full p-2 rounded-2xl shadow-lg pl-7' type="text" 
                placeholder="Password Kamu"/>
                <div className="flex justify-center">
                    <button type="button" className="w-[129px] h-[42px] bg-amber-400 hover:bg-amber-500 rounded-2xl mt-20 shadow-xl font-poppins font-semibold">Daftar</button>
                </div>

            </form>
            <div className="flex flex-col ">
                <h1 className="text-center font-poppins font-medium mt-10">Sudah Punya Akun? <span className="font-bold"><Link to="/Login">Masuk Disini</Link></span></h1>
            </div>
        </div>


    </AuthLayout>
  )
}

export default signUpPage;