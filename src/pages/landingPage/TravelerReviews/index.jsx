import Logo2 from '../../../assets/image/logo2.jpg';
const TravelerReviews = () => {
  return (
    <section id='Traveler-Reviews' className='bg-white'>
      <div className='flex flex-wrap min-h-full items-center justify-center bg-white py-8 '>
        <div className='mx-auto flex w-full text-center flex-col gap-6 '>
          <h1 className='font-poppins text-2xl font-semibold sm-text-2xl text-black mb-10'>
            Travel Reviews
          </h1>
        </div>
        <div className='flex gap-4 px-[133px]'>
            <div className="h-[400px] shadow-lg bg-amber-400 w-1/3 ">
              <div className="">
                <img className="overflow-hidden h-[150px] w-full mb-8" src={Logo2} alt="" />
              </div>
              <div>
                <h5 className='text-xl md:text-2xl text-white font-semibold font-poppins mt-3 text-center mb-9'>Dicoding</h5>
                <p className='text-center text-white font-thin font-serif'>Lokasi strategis, lengkap dan detail akan penjelasan tiap peninggalan bersejarahnya</p>
              </div>
            </div>
            <div className="h-[400px] shadow-lg bg-amber-400 w-1/3 ">
              <div className="">
                <img className="overflow-hidden h-[150px] w-full mb-8" src={Logo2} alt="" />
              </div>
              <div>
                <h5 className='text-xl md:text-2xl text-white font-semibold font-poppins mt-3 text-center mb-9'>Dicoding</h5>
                <p className='text-center text-white font-thin font-serif'>Lokasi strategis, lengkap dan detail akan penjelasan tiap peninggalan bersejarahnya</p>
              </div>
            </div>
            <div className="h-[400px] shadow-lg bg-amber-400 w-1/3 ">
              <div className="">
                <img className="overflow-hidden h-[150px] w-full mb-8" src={Logo2} alt="" />
              </div>
              <div>
                <h5 className='text-xl md:text-2xl text-white font-semibold font-poppins mt-3 text-center mb-9'>Dicoding</h5>
                <p className='text-center text-white font-thin font-serif'>Lokasi strategis, lengkap dan detail akan penjelasan tiap peninggalan bersejarahnya</p>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default TravelerReviews;
