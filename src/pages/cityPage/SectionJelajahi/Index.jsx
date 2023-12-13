import Logo2 from '../../../assets/image/logo2.jpg';

const CardJelajahi = [
  {
    src: Logo2,
    title: 'Museum Geologi Bandung',
  },
  {
    src: Logo2,
    title: 'Museum Geologi Bandung',
  },
  {
    src: Logo2,
    title: 'Museum Geologi Bandung',
  },
];

const SectionJelajahi = () => {
  return (
    <div className='bg-white'>
      <div className='font-semibold text-center lg:text-5xl pt-6 text-amber-400 md:text-2xl'>
        <h1>Destinasi Tur Menarik</h1>
      </div>
      <div className='text-center font-small text-black pt-6 lg:text-xl md:text-sm'>
        <p>
          Jelajahi Beragam Destinasi Wisata Populer Dengan Paket Tur Pilihan Ini
        </p>
      </div>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-6 mx-32 items-center justify-center'>
        {CardJelajahi.map((item, index) => (
          <div
            className='card'
            key={index}
            data-aos='fade-up'
            data-aos-delay={index * 100}
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'
            data-aos-mirror='true'
            data-aos-once='false'
            data-aos-anchor-placement='top-center'
          >
            <figure className='px-10 pt-10'>
              <img src={Logo2} alt='' className='rounded-xl' />
            </figure>
            <div className='card-body items-center text-center'>
              <h2 className='card-title pb-4 text-black'>
                Museum Geologi Bandung
              </h2>
              <div className='card-actions'>
                <button className='btn bg-amber-400 border-0 text-black hover:text-white'>
                  Selengkapnya
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionJelajahi;
