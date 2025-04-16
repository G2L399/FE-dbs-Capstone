import { useState, useEffect } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { login } from '@/api/login';
import { getCookie } from '@/lib/cookie';
import { toast } from 'sonner';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [slideIndex, setSlideIndex] = useState(0);
  const navigate = useNavigate();

  // Images for slideshow
  const images = [
    '/assets/resorts/res1.png',
    '/assets/resorts/res2.png',
    '/assets/resorts/res3.png'
  ];

  // Animation for elements coming in
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Slideshow animation
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    if (getCookie('token')) {
      navigate('/dashboard');
    }
  }, []);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const toastId = toast.loading('Logging in...');

    try {
      const response = await login({ email, password });

      if (!response.success) {
        toast.error(response.error, { id: toastId });
        return;
      } else {
        toast.success('Login Successful', { id: toastId });
        navigate('/dashboard');
      }
      console.log(response);
    } catch (error) {
      toast.error('something went wrong, try again later', { id: toastId });
      console.error('Error during login:', error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='flex min-h-screen bg-white'>
      <div
        className={`flex w-full flex-col justify-center p-8 transition-opacity duration-500 md:w-1/2 md:p-12 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
      >
        <div className='mx-auto w-full max-w-md'>
          {/* Logo */}
          <div className='mb-8 transform transition-transform duration-500 hover:scale-105'>
            <div className='flex items-center'>
              <div className='mr-2 rounded-full bg-blue-500 p-2 text-white'>
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
              <span className='text-xl font-bold'>YuDeGo</span>
            </div>
          </div>

          {/* Login Header */}
          <div
            className='mb-8 translate-y-0 transform transition-all delay-100 duration-500'
            style={{
              transform: isLoading ? 'translateY(20px)' : 'translateY(0)'
            }}
          >
            <h1 className='mb-2 text-3xl font-bold'>Login</h1>
            <p className='text-gray-600'>Login to access your account</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className='space-y-4'>
            <div
              className='transition-all delay-200 duration-500'
              style={{
                transform: isLoading ? 'translateY(20px)' : 'translateY(0)',
                opacity: isLoading ? 0 : 1
              }}
            >
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-700'
              >
                Email
              </label>
              <input
                id='email'
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='john.doe@gmail.com'
                className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm transition-colors duration-300 focus:border-blue-500 focus:ring-blue-500 focus:outline-none'
                required
              />
            </div>

            <div
              className='transition-all delay-300 duration-500'
              style={{
                transform: isLoading ? 'translateY(20px)' : 'translateY(0)',
                opacity: isLoading ? 0 : 1
              }}
            >
              <label
                htmlFor='password'
                className='block text-sm font-medium text-gray-700'
              >
                Password
              </label>
              <div className='relative mt-1'>
                <input
                  id='password'
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='••••••••••••••••••'
                  className='block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm transition-colors duration-300 focus:border-blue-500 focus:ring-blue-500 focus:outline-none'
                  required
                />
                <button
                  type='button'
                  className='absolute inset-y-0 right-0 flex items-center pr-3 text-gray-600 hover:text-gray-800'
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div
              className='flex items-center justify-between transition-all delay-400 duration-500'
              style={{ opacity: isLoading ? 0 : 1 }}
            >
              <div className='flex items-center'>
                <input
                  id='remember-me'
                  type='checkbox'
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className='h-4 w-4 rounded border-gray-300 text-blue-600 transition-colors duration-300 focus:ring-blue-500'
                />
                <label
                  htmlFor='remember-me'
                  className='ml-2 block text-sm text-gray-700'
                >
                  Remember me
                </label>
              </div>

              <div className='text-sm'>
                <a
                  href='#'
                  className='font-medium text-blue-600 transition-colors duration-300 hover:text-blue-500'
                >
                  Forgot password?
                </a>
              </div>
            </div>

            <div
              className='transition-all delay-500 duration-500'
              style={{
                transform: isLoading ? 'translateY(20px)' : 'translateY(0)',
                opacity: isLoading ? 0 : 1
              }}
            >
              <button
                type='submit'
                className='flex w-full justify-center rounded-md border border-transparent bg-black px-4 py-2 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:bg-gray-800 hover:shadow-lg focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none'
              >
                Login
              </button>
            </div>
          </form>

          <div
            className='mt-6 text-center transition-all delay-600 duration-500'
            style={{ opacity: isLoading ? 0 : 1 }}
          >
            <p className='text-sm text-gray-600'>
              Don't have an account?
              <a
                href='../sign-up'
                className='ml-1 font-medium text-pink-500 transition-colors duration-300 hover:text-pink-400'
              >
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Image */}
      <div className='relative hidden overflow-hidden bg-gray-200 md:block md:w-1/2'>
        {images.map((image, index) => (
          <div
            key={index}
            className='absolute inset-0 transition-opacity duration-1000 ease-in-out'
            style={{ opacity: slideIndex === index ? 1 : 0 }}
          >
            <img
              src={image}
              alt='Resort view'
              className='h-full w-full object-cover'
            />
          </div>
        ))}

        {/* Dots navigation */}
        <div className='absolute bottom-4 left-1/2 flex -translate-x-1/2 transform space-x-2'>
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setSlideIndex(index)}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${slideIndex === index ? 'w-6 bg-white' : 'bg-white/50'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
