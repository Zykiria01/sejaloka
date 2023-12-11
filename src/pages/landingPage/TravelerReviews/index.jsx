import Logo2 from '../../../assets/image/logo2.jpg';

const TravelerReviews = () => {
  return (
    <section id='Traveler-Reviews' className='bg-white'>
      <div className='flex flex-wrap min-h-full items-center justify-center bg-white py-8 '>
        <div className='mx-auto flex w-full text-center flex-col gap-6 '>
          <h1 className='font-poppins text-3xl font-semibold text-amber-400 mb-10'>
            Traveler Reviews
          </h1>
        </div>
        <div className='grid min-[400px]:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          <div className='card w-96 bg-amber-600 shadow-xl'>
            <figure>
              <img src={Logo2} alt='' />
            </figure>
            <div className='card-body text-white'>
              <h2 className='card-title justify-center mb-4'>Dicoding</h2>
              <p className='text-center'>Peninggalan Bersejarah Luar Biasa Yang Bisa Kalian Kunjungi</p>
            </div>
          </div>
          <div className='card w-96 bg-amber-600 shadow-xl'>
            <figure>
              <img src={Logo2} alt='' />
            </figure>
            <div className='card-body text-white'>
              <h2 className='card-title justify-center mb-4'>Dicoding</h2>
              <p className='text-center'>Peninggalan Bersejarah Luar Biasa Yang Bisa Kalian Kunjungi</p>
            </div>
          </div>
          <div className='card w-96 bg-amber-600 shadow-xl'>
            <figure>
              <img src={Logo2} alt='' />
            </figure>
            <div className='card-body text-white'>
              <h2 className='card-title justify-center mb-4'>Dicoding</h2>
              <p className='text-center'>Peninggalan Bersejarah Luar Biasa Yang Bisa Kalian Kunjungi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelerReviews;
