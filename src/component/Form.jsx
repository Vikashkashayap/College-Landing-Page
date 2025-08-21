import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneCountryCode: '91',
    phoneNumber: '',
    currentState: '',
    currentCity: '',
    countryPreference: '',
    courseInterested: '',
    intakePreference: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="w-full" style={{ marginTop: '50px' }}>
      {/* Form Container - Reduced sizing and spacing */}
      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 border border-gray-100">
        {/* Header */}
        <div className="text-center mb-3 sm:mb-4">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-1">
            Submit Registration
          </h2>
          <p className="text-xs sm:text-sm text-gray-600">
            Get started on your study abroad journey
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
          {/* Name Field */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
              Name*
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 text-gray-700 bg-white placeholder-gray-400"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
              Email*
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 text-gray-700 bg-white placeholder-gray-400"
              placeholder="Enter your email address"
            />
          </div>

          {/* Phone Number Field with Country Code */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
              Phone Number*
            </label>
            <div className="flex gap-2">
              {/* <select
                name="phoneCountryCode"
                value={formData.phoneCountryCode}
                onChange={handleInputChange}
                className="w-16 px-2 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 text-gray-700 bg-white"
              >
                <option value="91">+91</option>
                <option value="1">+1</option>
                <option value="44">+44</option>
                <option value="61">+61</option>
                <option value="49">+49</option>
              </select> */}
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
                className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 text-gray-700 bg-white placeholder-gray-400"
                placeholder="Phone Number"
              />
            </div>
          </div>

          {/* Country Preference and Course Interested Row - Responsive grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                Country Preference*
              </label>
              <select
                name="countryPreference"
                value={formData.countryPreference}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 text-gray-700 bg-white"
              >
                <option value="">Select Country</option>
                <option value="usa">USA</option>
                <option value="uk">UK</option>
                <option value="canada">Canada</option>
                <option value="australia">Australia</option>
                <option value="germany">Germany</option>
                <option value="ireland">Ireland</option>
                <option value="new-zealand">New Zealand</option>
                <option value="singapore">Singapore</option>
                <option value="others">Others</option>
              </select>
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                Course Interested In*
              </label>
              <select
                name="courseInterested"
                value={formData.courseInterested}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 text-gray-700 bg-white"
              >
                <option value="">Select Course</option>
                <option value="undergraduate">Undergraduate</option>
                <option value="postgraduate">Postgraduate</option>
                <option value="diploma">Diploma</option>
                <option value="certificate">Certificate</option>
                <option value="others">Others Program</option>
              </select>
            </div>
          </div>

          {/* Intake Preference */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
              Intake Preference*
            </label>
            <select
              name="intakePreference"
              value={formData.intakePreference}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 text-gray-700 bg-white"
            >
              <option value="">Select Intake</option>
              <option value="january-2026">January 2026</option>
              <option value="may-2026">May 2026</option>
              <option value="september-2026">September 2026</option>
              <option value="january-2027">January 2027</option>
            </select>
          </div>

          {/* Submit Button - Reduced sizing */}
          <div className="mt-4">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold py-2.5 px-4 text-sm rounded-md hover:from-orange-600 hover:to-yellow-600 transform hover:scale-[1.02] transition-all duration-200 shadow-md hover:shadow-lg focus:ring-2 focus:ring-orange-300 focus:outline-none"
            >
              Submit Registration
            </button>
          </div>

          {/* Privacy Notice - Smaller text */}
          <div className="text-center">
            <p className="text-xs text-gray-500">
              By submitting this form, you agree to our{' '}
              <a href="#" className="text-orange-500 hover:text-orange-600 underline">
                Privacy Policy
              </a>{' '}
              and{' '}
              <a href="#" className="text-orange-500 hover:text-orange-600 underline">
                Terms of Service
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
