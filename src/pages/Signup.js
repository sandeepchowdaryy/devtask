import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../utils/authSlice';

export default function Signup() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: false
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would validate and make an API call here
    dispatch(setUser({
      id: '1',
      fullName: formData.fullName,
      email: formData.email,
      isAgency: formData.isAgency,
      companyName: formData.companyName
    }));
    navigate('/settings');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 text-start">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-[28px] font-bold text-gray-900 mb-8">
          Create your PopX account
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#6C25FF] mb-1">
              Full Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.fullName}
              onChange={(e) => setFormData({...formData, fullName: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#6C25FF] focus:border-[#6C25FF] placeholder-gray-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#6C25FF] mb-1">
              Phone number<span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#6C25FF] focus:border-[#6C25FF] placeholder-gray-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#6C25FF] mb-1">
              Email address<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#6C25FF] focus:border-[#6C25FF] placeholder-gray-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#6C25FF] mb-1">
              Password<span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#6C25FF] focus:border-[#6C25FF] placeholder-gray-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#6C25FF] mb-1">
              Company name
            </label>
            <input
              type="text"
              value={formData.companyName}
              onChange={(e) => setFormData({...formData, companyName: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#6C25FF] focus:border-[#6C25FF] placeholder-gray-400"
            />
          </div>

          <div className="pt-2">
            <p className="text-sm font-medium text-gray-900 mb-3">
              Are you an Agency?<span className="text-red-500">*</span>
            </p>
            <div className="flex items-center space-x-6">
              <label className="flex items-center">
                <input
                  type="radio"
                  checked={formData.isAgency}
                  onChange={() => setFormData({...formData, isAgency: true})}
                  className="w-4 h-4 text-[#6C25FF] border-gray-300 focus:ring-[#6C25FF]"
                  name="agency"
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  checked={!formData.isAgency}
                  onChange={() => setFormData({...formData, isAgency: false})}
                  className="w-4 h-4 text-[#6C25FF] border-gray-300 focus:ring-[#6C25FF]"
                  name="agency"
                />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#6C25FF] text-white rounded-lg py-3 px-4 font-medium hover:bg-[#5a1fe6] transition-colors mt-6"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}
