import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className='navbar'>
      <div className='container mx-auto flex items-center justify-between px-4 py-4'>
        <div className='flex items-center'>
          <div className='logo mr-12 flex items-center'>
            <div className='flex h-8 w-8 items-center justify-center rounded-full bg-blue-500'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width={24}
                height={24}
                viewBox='0 0 24 24'
              >
                <g fill='none'>
                  <path
                    fill='url(#fluentColorLocationRipple242)'
                    d='M21 19c0 2.5-4.03 4-9 4s-9-1.5-9-4c0-2.406 4.03-4 9-4s9 1.5 9 4'
                  ></path>
                  <path
                    fill='url(#fluentColorLocationRipple240)'
                    d='M12 2a7.5 7.5 0 0 0-7.5 7.5c0 1.932 1.064 3.8 2.268 5.316c1.22 1.537 2.678 2.829 3.655 3.622c.926.75 2.228.75 3.154 0c.977-.793 2.435-2.085 3.655-3.622C18.436 13.301 19.5 11.432 19.5 9.5A7.5 7.5 0 0 0 12 2'
                  ></path>
                  <path
                    fill='url(#fluentColorLocationRipple241)'
                    d='M14.5 9.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0'
                  ></path>
                  <defs>
                    <linearGradient
                      id='fluentColorLocationRipple240'
                      x1={1.219}
                      x2={13.202}
                      y1={-2.857}
                      y2={16.549}
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop stopColor='#f97dbd'></stop>
                      <stop offset={1} stopColor='#d7257d'></stop>
                    </linearGradient>
                    <linearGradient
                      id='fluentColorLocationRipple241'
                      x1={9.79}
                      x2={12.394}
                      y1={9.721}
                      y2={12.428}
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop stopColor='#fdfdfd'></stop>
                      <stop offset={1} stopColor='#fecbe6'></stop>
                    </linearGradient>
                    <radialGradient
                      id='fluentColorLocationRipple242'
                      cx={0}
                      cy={0}
                      r={1}
                      gradientTransform='rotate(-10.678 100.2 -51.93)scale(14.3921 6.38107)'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop stopColor='#7b7bff'></stop>
                      <stop offset={0.502} stopColor='#a3a3ff'></stop>
                      <stop offset={1} stopColor='#ceb0ff'></stop>
                    </radialGradient>
                  </defs>
                </g>
              </svg>
            </div>
            <h1 className='ml-2 text-2xl font-bold'>YuDeGo</h1>
          </div>

          <div className='hidden space-x-8 md:flex'>
            <a href='/' className='font-medium hover:text-blue-600'>
              Home
            </a>
            <a href='/destination' className='font-medium hover:text-blue-600'>
              Tours
            </a>
            <a href='/hotels' className='font-medium hover:text-blue-600'>
              Hotel
            </a>
            <a href='#' className='font-medium hover:text-blue-600'>
              Tickets
            </a>
            <a href='#' className='font-medium hover:text-blue-600'>
              Contact
            </a>
          </div>
        </div>

        <div className='flex items-center space-x-4'>
          <button
            onClick={() => navigate('/sign-in')}
            className='ml-4 rounded-md px-4 py-2 font-medium hover:bg-gray-100'
          >
            Sign in
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
