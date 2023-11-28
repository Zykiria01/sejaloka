import Logo2 from '../../../assets/image/logo2.jpg';

const SectionJelajahi = () => {
  return (
    <div className='bg-white'>
      <div className='font-semibold text-center text-5xl pt-6 text-amber-400'>
        <h1>Destinasi Tur Menarik</h1>
      </div>
      <div className='text-center font-small text-black pt-6 text-xl'>
        <p>
          Jelajahi Beragam Destinasi Wisata Populer Dengan Paket Tur Pilihan Ini
        </p>
      </div>
      <div className='grid grid-cols-3 gap-8 py-6 mx-60'>
        <img src={Logo2}></img>
        <img src={Logo2}></img>
        <img src={Logo2}></img>
      </div>
    </div>
  );
};

export default SectionJelajahi;
