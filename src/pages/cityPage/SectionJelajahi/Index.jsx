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
        <div className='card'>
          <figure className='px-10 pt-10'>
            <img src={Logo2} alt='' className='rounded-xl' />
          </figure>
          <div className='card-body items-center text-center'>
            <h2 className='card-title pb-4 text-black'>Museum Geologi Bandung</h2>
            <div className='card-actions'>
              <button className='btn bg-amber-400 border-0 text-black hover:text-white'>Selengkapnya</button>
            </div>
          </div>
        </div>
        <div className='card'>
          <figure className='px-10 pt-10'>
            <img src={Logo2} alt='' className='rounded-xl' />
          </figure>
          <div className='card-body items-center text-center'>
            <h2 className='card-title pb-4 text-black'>Museum Geologi Bandung</h2>
            <div className='card-actions'>
              <button className='btn bg-amber-400 border-0 text-black hover:text-white'>Selengkapnya</button>
            </div>
          </div>
        </div>
        <div className='card'>
          <figure className='px-10 pt-10'>
            <img src={Logo2} alt='' className='rounded-xl' />
          </figure>
          <div className='card-body items-center text-center'>
            <h2 className='card-title pb-4 text-black'>Museum Geologi Bandung</h2>
            <div className='card-actions'>
              <button className='btn bg-amber-400 border-0 text-black hover:text-white'>Selengkapnya</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionJelajahi;
