import Logo2 from '../../../assets/image/logo2.jpg';

const CardReviews = [
  {
    src: Logo2,
    title: 'Dicoding',
    desc: 'Peninggalan Bersejarah Luar Biasa Yang Bisa Kalian Kunjungi',
  },
  {
    src: Logo2,
    title: 'Dicoding',
    desc: 'Peninggalan Bersejarah Luar Biasa Yang Bisa Kalian Kunjungi',
  },
  {
    src: Logo2,
    title: 'Dicoding',
    desc: 'Peninggalan Bersejarah Luar Biasa Yang Bisa Kalian Kunjungi',
  },
];

const TravelerReviews = () => {
  return (
    <section id='Traveler-Reviews' className='bg-white'>
      <div className='flex flex-wrap min-h-full items-center justify-center bg-white py-8 '>
        <div className='mx-auto flex w-full text-center flex-col gap-6 '>
          <h1 className='font-poppins text-3xl font-semibold text-amber-400 mb-10'>
            Travelerer Reviews
          </h1>
        </div>
        <div className='grid min-[400px]:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {CardReviews.map((item, index) => (
            <div
              className='card w-96 bg-amber-600 shadow-xl'
              key={index}
              data-aos='fade-up'
              data-aos-delay={index * 100}
              data-aos-duration='1000'
              data-aos-easing='ease-in-out'
              data-aos-mirror='true'
              data-aos-once='false'
              data-aos-anchor-placement='top-center'
            >
              <figure>
                <img src={item.src} alt='' />
              </figure>
              <div className='card-body text-white'>
                <h2 className='card-title justify-center mb-4'>{item.title}</h2>
                <p className='text-center'>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelerReviews;
