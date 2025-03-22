import { Link } from 'react-router-dom';
import { LogIn } from 'lucide-react';

export default function Welcome() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-sm p-6 mt-[48%]">
      <h1 className="text-[28px] font-bold text-gray-900 mb-2">Welcome to PopX</h1>
      <p className="text-gray-600 mb-8 text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      
      <Link
        to="/signup"
        className="w-full bg-[#6C25FF] text-white rounded-lg py-3 px-4 mb-4 font-medium text-center block hover:bg-[#5a1fe6] transition-colors"
      >
        Create Account
      </Link>
      
      <Link
        to="/login"
        className="w-full bg-[#F7F5FF] text-[#6C25FF] rounded-lg py-3 px-4 font-medium text-center block hover:bg-[#ebe7ff] transition-colors"
      >
        Already Registered? Login
      </Link>
    </div>
  </div>
  );
}
