import LogoWhite from '../assets/image/Sejaloka-Logogram-Only-White.png';
import Logofb from '../assets/image/logofb.png';
import Logotw from '../assets/image/logotw.png';
import Logoyt from '../assets/image/logoyt.png';
import Logoig from '../assets/image/logoig.png';

const Footer = () => {
  return (
    <footer className='flex gap-5 p-10 bg-stone-800 text-black min-[400px]:flex-col lg:flex-row'>
      <nav className='flex max-[800px]:items-center max-[800px]:justify-center '>
        <img className='flex justify-center w-40 mx-10' src={LogoWhite} />
      </nav>
      <nav>
        <div className='footer-title text-white pr-80'>Company</div>
        <div className='text-white flex flex-col gap-3'>
          <a className='link link-hover'>Home</a>
          <a className='link link-hover'>Experience</a>
          <a className='link link-hover'>Jobs</a>
          <a className='link link-hover'>Reviews</a>
        </div>
      </nav>
      <nav>
        <div className='footer-title text-white flex max-[800px]:text-center max-[800px]:justify-center'>
          Follow Us
        </div>
        <div className='flex justify-center gap-4 mt-5'>
          <img className='w-16 h-16' src={Logofb} alt='' />
          <img className='w-16 h-16' src={Logoyt} alt='' />
          <img className='w-16 h-16' src={Logoig} alt='' />
          <img className='w-16 h-16' src={Logotw} alt='' />
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
