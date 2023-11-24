import Logo2 from '../../../assets/image/logo2.jpg';

const TravelerReviews = () => {
  return (
    <section id='Traveler-Reviews' className='bg-white'>
      <div className='flex flex-wrap min-h-full items-center justify-center bg-white'>
        <div className='mx-auto flex w-full text-center flex-col gap-6 my-5'>
          <h1 className='font-poppins text-2xl font-semibold sm-text-2xl text-amber-400'>
            Pengalaman Yang Tak Terlupakan
          </h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
          <div className='group relative items-center justify-center overflow-hidden cursor-pointer rounded-2xl'>
            <div className='h-70 w-72'>
              <img className='w-full object-cover' src={Logo2} alt='' />
            </div>
            <div className='absolute inset-0  bg-gradiant-to-b form-transparent via-transparent'>
              <div className='absolute inset-0 flex flex-col items-center justfify-center px-4 text-center translate-y-[100%] group-hover:translate-y-20 transition-all'>
                <button className='rounded-full bg-orange-800 py-2 px-3.5 text-sm capitalize text-white justify-beetwen'>
                  See More
                </button>
              </div>
            </div>
          </div>
          <div className='group relative items-center justify-center overflow-hidden cursor-pointer rounded-2xl'>
            <div className='h-70 w-72'>
              <img className='w-full object-cover' src={Logo2} alt='' />
            </div>
            <div className='absolute inset-0  bg-gradiant-to-b form-transparent via-transparent'>
              <div className='absolute inset-0 flex flex-col items-center justfify-center px-4 text-center translate-y-[100%] group-hover:translate-y-20 transition-all'>
                <button className='rounded-full bg-orange-800 py-2 px-3.5 text-sm capitalize text-white justify-beetwen'>
                  See More
                </button>
              </div>
            </div>
          </div>
          <div className='group relative items-center justify-center overflow-hidden cursor-pointer rounded-2xl'>
            <div className='h-70 w-72'>
              <img className='w-full object-cover' src={Logo2} alt='' />
            </div>
            <div className='absolute inset-0  bg-gradiant-to-b form-transparent via-transparent'>
              <div className='absolute inset-0 flex flex-col items-center justfify-center px-4 text-center translate-y-[100%] group-hover:translate-y-20 transition-all'>
                <button className='rounded-full bg-orange-800 py-2 px-3.5 text-sm capitalize text-white justify-beetwen'>
                  See More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelerReviews;
