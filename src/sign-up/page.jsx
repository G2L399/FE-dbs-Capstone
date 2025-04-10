import { useState, useEffect } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export default function RegisterPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [slideIndex, setSlideIndex] = useState(0);
  
  // Images for slideshow
  const images = [
    "/api/placeholder/800/600", // Resort with pool
    "/api/placeholder/800/600", // Another vacation spot
    "/api/placeholder/800/600"  // Third vacation spot
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
  
  const handleRegister = (e) => {
    e.preventDefault();
    console.log('Register with:', { firstName, lastName, email, phoneNumber, password });
    // Add your registration logic here
  };
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Left side - Image */}
      <div className="hidden md:block md:w-1/2 bg-gray-200 relative overflow-hidden">
        {images.map((image, index) => (
          <div 
            key={index}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{ opacity: slideIndex === index ? 1 : 0 }}
          >
            <img 
              src={image} 
              alt="Resort view" 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        
        {/* Dots navigation */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setSlideIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${slideIndex === index ? 'bg-white w-6' : 'bg-white/50'}`}
            />
          ))}
        </div>
      </div>

      {/* Right side - Registration Form */}
      <div className={`w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <div className="max-w-md mx-auto w-full">
          {/* Logo */}
          <div className="mb-8 transform transition-transform duration-500 hover:scale-105">
            <div className="flex items-center">
              <div className="mr-2 bg-blue-500 rounded-full p-2 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none"><path fill="url(#fluentColorLocationRipple242)" d="M21 19c0 2.5-4.03 4-9 4s-9-1.5-9-4c0-2.406 4.03-4 9-4s9 1.5 9 4"></path><path fill="url(#fluentColorLocationRipple240)" d="M12 2a7.5 7.5 0 0 0-7.5 7.5c0 1.932 1.064 3.8 2.268 5.316c1.22 1.537 2.678 2.829 3.655 3.622c.926.75 2.228.75 3.154 0c.977-.793 2.435-2.085 3.655-3.622C18.436 13.301 19.5 11.432 19.5 9.5A7.5 7.5 0 0 0 12 2"></path><path fill="url(#fluentColorLocationRipple241)" d="M14.5 9.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></path><defs><linearGradient id="fluentColorLocationRipple240" x1={1.219} x2={13.202} y1={-2.857} y2={16.549} gradientUnits="userSpaceOnUse"><stop stopColor="#f97dbd"></stop><stop offset={1} stopColor="#d7257d"></stop></linearGradient><linearGradient id="fluentColorLocationRipple241" x1={9.79} x2={12.394} y1={9.721} y2={12.428} gradientUnits="userSpaceOnUse"><stop stopColor="#fdfdfd"></stop><stop offset={1} stopColor="#fecbe6"></stop></linearGradient><radialGradient id="fluentColorLocationRipple242" cx={0} cy={0} r={1} gradientTransform="rotate(-10.678 100.2 -51.93)scale(14.3921 6.38107)" gradientUnits="userSpaceOnUse"><stop stopColor="#7b7bff"></stop><stop offset={0.502} stopColor="#a3a3ff"></stop><stop offset={1} stopColor="#ceb0ff"></stop></radialGradient></defs></g></svg>
              </div>
              <span className="text-xl font-bold">YuDeGo</span>
            </div>
          </div>
          
          {/* Register Header */}
          <div className="mb-8 transition-all duration-500 delay-100 transform translate-y-0" 
               style={{ transform: isLoading ? 'translateY(20px)' : 'translateY(0)' }}>
            <h1 className="text-3xl font-bold mb-2">Sign up</h1>
            <p className="text-gray-600">Register your account</p>
          </div>
          
          {/* Register Form */}
          <form onSubmit={handleRegister} className="space-y-4">
            <div className="grid grid-cols-2 gap-4 transition-all duration-500 delay-200" 
                 style={{ transform: isLoading ? 'translateY(20px)' : 'translateY(0)', opacity: isLoading ? 0 : 1 }}>
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                <input
                  id="firstName"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="john"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                <input
                  id="lastName"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="doe"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 transition-all duration-500 delay-300" 
                 style={{ transform: isLoading ? 'translateY(20px)' : 'translateY(0)', opacity: isLoading ? 0 : 1 }}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john.doe@gmail.com"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  id="phoneNumber"
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="0882-8439-4387"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
                  required
                />
              </div>
            </div>
            
            <div className="transition-all duration-500 delay-400" 
                 style={{ transform: isLoading ? 'translateY(20px)' : 'translateY(0)', opacity: isLoading ? 0 : 1 }}>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <div className="mt-1 relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••••••••"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
                  required
                />
                <button 
                  type="button" 
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-600 hover:text-gray-800"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="transition-all duration-500 delay-500" 
                 style={{ transform: isLoading ? 'translateY(20px)' : 'translateY(0)', opacity: isLoading ? 0 : 1 }}>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <div className="mt-1 relative">
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••••••••••••"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
                  required
                />
                <button 
                  type="button" 
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-600 hover:text-gray-800"
                  onClick={toggleConfirmPasswordVisibility}
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            
            <div className="transition-all duration-500 delay-600" 
                 style={{ transform: isLoading ? 'translateY(20px)' : 'translateY(0)', opacity: isLoading ? 0 : 1 }}>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 hover:shadow-lg transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Create account
              </button>
            </div>
          </form>
          
          <div className="mt-6 text-center transition-all duration-500 delay-700" 
               style={{ opacity: isLoading ? 0 : 1 }}>
            <p className="text-sm text-gray-600">
              Already have an account? 
              <a href="../sign" className="font-medium text-red-500 hover:text-red-400 ml-1 transition-colors duration-300">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}