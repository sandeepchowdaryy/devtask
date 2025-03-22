import { useSelector } from 'react-redux';
import { Shield } from 'lucide-react';

export default function AccountSettings() {
  const user = useSelector((state) => state.auth.user);

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white px-6 py-4 shadow-sm">
        <h1 className="text-xl font-semibold text-gray-900 text-left">Account Settings</h1>
      </header>

      <div className="p-5">
        <div className="flex flex-col justify-center items-start space-x-4">
          <div className="relative flex justify-center items-center gap-6">
            <div className='flex'>
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80"
              alt={user.fullName}
              className="w-20 h-26 rounded-full object-cover"
            />
            <div className="absolute left-1 bottom-1 ml-12 bg-[#6C25FF] rounded-full p-1">
              <Shield className="w-4 h-4 text-white" />
            </div>
            </div>
            <div className="flex flex-col">
            <h2 className="text-lg font-semibold text-gray-900">{user.fullName}</h2>
            <p className="text-gray-600">{user.email}</p>
            </div>
            
          </div>
          
          <div>
            <p className="text-gray-500 mt-4 text-sm text-left font-semibold leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
