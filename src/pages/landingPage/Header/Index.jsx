import Logo2 from '../../../assets/image/logo2.jpg';

const Header = () => {
  return (
    <section id='Header'>
      <div className='hero min-h-screen' style={{backgroundImage: `url(${Logo2})`}}>
        <div className='hero-content text-center text-neutral-content'>
          <div className='max-w-l'>
          <h1></h1>
            <h1 className='mb-5 text-5xl font-bold text-white'>
              Hai, Kamu Mau Wisata Kemana
            </h1>
            <label
              htmlFor='default-search'
              className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'
            >
              Search
            </label>
            <div className='relative'>
              <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
                <svg
                  className='w-4 h-4 text-gray-500 dark:text-gray-400'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 20 20'
                >
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                  />
                </svg>
              </div>
              <input
                type='search'
                id='default-search'
                className='block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-xl bg-gray-20 focus:ring-black focus:border-black dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='Search Mockups, Logos...'
                required
              />
              <button
                type='submit'
                className='text-white absolute end-2.5 bottom-2.5 bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700'
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>{' '}
    </section>
  );
};

export default Header;
