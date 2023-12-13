import Logo2 from '../../../assets/image/logo2.jpg';

const CardPengalaman = [
  {
    src: Logo2,
  },
  {
    src: Logo2,
  },
  {
    src: Logo2,
  },
  {
    src: Logo2,
  },
];

const SectionPengalaman = () => {
  return (
    <section id='Pengalaman'>
      <div className='flex flex-wrap min-h-full items-center justify-center bg-white pb-10'>
        <div className='mx-auto flex w-full text-center flex-col gap-6 my-5'>
          <h1 className='font-poppins text-2xl font-semibold sm-text-2xl text-amber-400'>
            Pengalaman Yang Tak Terlupakan
          </h1>
          <h2 className='text-center text-base font-sans-serif max-w-3xl self-center mb-7'>
            Dengan masakannya yang unik, kekayaan budayanya, beberapa pantai
            terindah di dunia, air terjun yang mempesona, dan petualangan yang
            disukai semua orang, yang perlu Anda lakukan hanyalah memilih jenis
            pariwisata yang tepat untuk Anda dan terkagum-kagum dengan keajaiban
            Indonesia.
          </h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
          {CardPengalaman.map((item, index) => (
            <div
              className='group relative items-center justify-center overflow-hidden cursor-pointer rounded-2xl'
              key={index}
              data-aos='fade-up'
              data-aos-delay={index * 100}
              data-aos-duration='1000'
              data-aos-easing='ease-in-out'
              data-aos-mirror='true'
              data-aos-once='false'
              data-aos-anchor-placement='top-center'
            >
              <div className='h-70 w-72'>
                <img className='w-full object-cover' src={item.src} alt='' />
              </div>
              <div className='absolute inset-0  bg-gradiant-to-b form-transparent via-transparent'>
                <div className='absolute inset-0 flex flex-col items-center justfify-center px-4 text-center translate-y-[100%] group-hover:translate-y-20 transition-all'>
                  <button className='rounded-full bg-orange-800 py-2 px-3.5 text-sm capitalize text-white justify-beetwen'>
                    See More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionPengalaman;
