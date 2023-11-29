import Logo2 from '../../../assets/image/logo2.jpg';

const SectionRekomendasi = () => {
  return (
    <div className='bg-white'>
      <div className='font-semibold text-center text-5xl pt-6 text-amber-400'>
        <h1>Coba Jelajahi Kota Lainnya</h1>
      </div>
      <div className='text-center font-small text-black py-10 text-xl'>
        <p>
          Indonesia Memiliki Berbagai Tempat Sejarah Lokal Di Berbagai Kota Di
          Indonesia Yang Tentunya Bisa Kamu Kunjungi Bersama
          <p>Keluarga, Kerabat Atau Rekan Kamu</p>
        </p>
      </div>
      <div className='grid grid-cols-4 gap-4 mx-60 pb-6'>
        <div className='card'>
          <figure className='pt-10'>
            <img src={Logo2} alt='' className='rounded-xl' />
          </figure>
          <div className='card-body items-center text-center'>
            <h2 className='card-title pb-4 text-black'>
              Museum Geologi Bandung
            </h2>
          </div>
        </div>
        <div className='card'>
          <figure className='pt-10'>
            <img src={Logo2} alt='' className='rounded-xl' />
          </figure>
          <div className='card-body items-center text-center'>
            <h2 className='card-title pb-4 text-black'>
              Museum Geologi Bandung
            </h2>
          </div>
        </div>
        <div className='card'>
          <figure className='pt-10'>
            <img src={Logo2} alt='' className='rounded-xl' />
          </figure>
          <div className='card-body items-center text-center'>
            <h2 className='card-title pb-4 text-black'>
              Museum Geologi Bandung
            </h2>
          </div>
        </div>
        <div className='card'>
          <figure className='pt-10'>
            <img src={Logo2} alt='' className='rounded-xl' />
          </figure>
          <div className='card-body items-center text-center'>
            <h2 className='card-title pb-4 text-black'>
              Museum Geologi Bandung
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionRekomendasi;
