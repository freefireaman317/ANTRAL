import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { useToast } from '../hooks/use-toast';
import { CheckCircle2, Upload, ExternalLink } from 'lucide-react';

const Register = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [paymentScreenshot, setPaymentScreenshot] = useState(null);
  
  const [formData, setFormData] = useState({
    email: '',
    whatsapp: '',
    committee1: '',
    portfolio1_1: '',
    portfolio1_2: '',
    committee2: '',
    portfolio2_1: '',
    portfolio2_2: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPaymentScreenshot(file);
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    // Validate form before proceeding
    if (!formData.email || !formData.whatsapp || !formData.committee1 || !formData.committee2) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    setStep(2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!paymentScreenshot) {
      toast({
        title: "Payment Screenshot Required",
        description: "Please upload payment screenshot before submitting.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    // Mock submission - will be replaced with actual backend
    setTimeout(() => {
      toast({
        title: "Registration Successful!",
        description: "We'll contact you shortly on WhatsApp.",
      });
      setIsSubmitting(false);
      // Reset form
      setFormData({
        email: '',
        whatsapp: '',
        committee1: '',
        portfolio1_1: '',
        portfolio1_2: '',
        committee2: '',
        portfolio2_1: '',
        portfolio2_2: ''
      });
      setPaymentScreenshot(null);
      setStep(1);
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative py-32 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(139, 21, 56, 0.9), rgba(107, 15, 42, 0.95)), url('https://customer-assets.emergentagent.com/job_69c6dc65-dffc-4241-b53d-2659d06e0795/artifacts/elj0xhga_home%20page.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Register Now
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Secure your spot at ANTRAL MUN 2026 - Registration Fee: {siteConfig.eventPrice}
          </p>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Indicator */}
          <div className="mb-12">
            <div className="flex items-center justify-center space-x-4">
              <div className={`flex items-center space-x-2 ${step >= 1 ? 'text-[#8B1538]' : 'text-gray-400'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 1 ? 'bg-[#8B1538] text-white' : 'bg-gray-200'}`}>
                  {step > 1 ? <CheckCircle2 className="w-6 h-6" /> : '1'}
                </div>
                <span className="font-semibold hidden sm:block">Registration Details</span>
              </div>
              <div className={`h-1 w-16 sm:w-32 ${step >= 2 ? 'bg-[#8B1538]' : 'bg-gray-300'}`} />
              <div className={`flex items-center space-x-2 ${step >= 2 ? 'text-[#8B1538]' : 'text-gray-400'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 2 ? 'bg-[#8B1538] text-white' : 'bg-gray-200'}`}>
                  2
                </div>
                <span className="font-semibold hidden sm:block">Payment</span>
              </div>
            </div>
          </div>

          {step === 1 ? (
            /* Step 1: Registration Form */
            <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12">
              <h2 className="text-3xl font-bold text-[#8B1538] mb-8 text-center">
                Registration Form
              </h2>

              <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <p className="text-sm text-amber-800">
                  <strong>Note:</strong> Please{' '}
                  <a
                    href={siteConfig.matrixUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8B1538] font-bold underline hover:text-[#6B0F2A] inline-flex items-center"
                  >
                    check the matrix <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                  {' '}before registration to see available portfolios.
                </p>
              </div>

              <form onSubmit={handleNext} className="space-y-6">
                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B1538] focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* WhatsApp */}
                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-semibold text-gray-700 mb-2">
                    WhatsApp Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B1538] focus:border-transparent transition-all duration-300"
                    placeholder="Enter your WhatsApp number"
                  />
                </div>

                {/* Committee Preference 1 */}
                <div className="border-t pt-6 mt-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">First Committee Preference</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="committee1" className="block text-sm font-semibold text-gray-700 mb-2">
                        Committee Preference 1 *
                      </label>
                      <select
                        id="committee1"
                        name="committee1"
                        value={formData.committee1}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B1538] focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select Committee</option>
                        {siteConfig.committees.map((committee) => (
                          <option key={committee.id} value={committee.name}>
                            {committee.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="portfolio1_1" className="block text-sm font-semibold text-gray-700 mb-2">
                        Portfolio Preference 1
                      </label>
                      <input
                        type="text"
                        id="portfolio1_1"
                        name="portfolio1_1"
                        value={formData.portfolio1_1}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B1538] focus:border-transparent transition-all duration-300"
                        placeholder="Enter portfolio preference 1"
                      />
                    </div>

                    <div>
                      <label htmlFor="portfolio1_2" className="block text-sm font-semibold text-gray-700 mb-2">
                        Portfolio Preference 2
                      </label>
                      <input
                        type="text"
                        id="portfolio1_2"
                        name="portfolio1_2"
                        value={formData.portfolio1_2}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B1538] focus:border-transparent transition-all duration-300"
                        placeholder="Enter portfolio preference 2"
                      />
                    </div>
                  </div>
                </div>

                {/* Committee Preference 2 */}
                <div className="border-t pt-6 mt-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Second Committee Preference</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="committee2" className="block text-sm font-semibold text-gray-700 mb-2">
                        Committee Preference 2 *
                      </label>
                      <select
                        id="committee2"
                        name="committee2"
                        value={formData.committee2}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B1538] focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select Committee</option>
                        {siteConfig.committees.map((committee) => (
                          <option key={committee.id} value={committee.name}>
                            {committee.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="portfolio2_1" className="block text-sm font-semibold text-gray-700 mb-2">
                        Portfolio Preference 1
                      </label>
                      <input
                        type="text"
                        id="portfolio2_1"
                        name="portfolio2_1"
                        value={formData.portfolio2_1}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B1538] focus:border-transparent transition-all duration-300"
                        placeholder="Enter portfolio preference 1"
                      />
                    </div>

                    <div>
                      <label htmlFor="portfolio2_2" className="block text-sm font-semibold text-gray-700 mb-2">
                        Portfolio Preference 2
                      </label>
                      <input
                        type="text"
                        id="portfolio2_2"
                        name="portfolio2_2"
                        value={formData.portfolio2_2}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B1538] focus:border-transparent transition-all duration-300"
                        placeholder="Enter portfolio preference 2"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-[#8B1538] to-[#6B0F2A] text-white font-bold rounded-lg hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300"
                >
                  Next: Payment
                </button>
              </form>
            </div>
          ) : (
            /* Step 2: Payment */
            <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12">
              <h2 className="text-3xl font-bold text-[#8B1538] mb-8 text-center">
                Complete Payment
              </h2>

              <div className="text-center mb-8">
                <p className="text-gray-700 mb-6">
                  Please scan the QR code below and pay the registration fee of <strong className="text-[#8B1538] text-xl">{siteConfig.eventPrice}</strong>
                </p>

                {/* QR Code */}
                <div className="inline-block bg-white p-6 rounded-2xl shadow-lg">
                  <img
                    src={siteConfig.paymentQR}
                    alt="Payment QR Code"
                    className="w-64 h-64 mx-auto"
                  />
                </div>

                <p className="text-sm text-gray-600 mt-4">
                  Scan with any UPI app to complete payment
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Upload Payment Screenshot */}
                <div>
                  <label htmlFor="payment-screenshot" className="block text-sm font-semibold text-gray-700 mb-2">
                    Upload Payment Screenshot *
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      id="payment-screenshot"
                      accept="image/*"
                      onChange={handleFileChange}
                      required
                      className="hidden"
                    />
                    <label
                      htmlFor="payment-screenshot"
                      className="flex items-center justify-center space-x-2 w-full px-4 py-6 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-[#8B1538] transition-all duration-300"
                    >
                      <Upload className="w-6 h-6 text-gray-400" />
                      <span className="text-gray-600">
                        {paymentScreenshot ? paymentScreenshot.name : 'Click to upload screenshot'}
                      </span>
                    </label>
                  </div>
                  {paymentScreenshot && (
                    <p className="text-sm text-green-600 mt-2 flex items-center">
                      <CheckCircle2 className="w-4 h-4 mr-1" />
                      File selected: {paymentScreenshot.name}
                    </p>
                  )}
                </div>

                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 px-6 py-4 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition-all duration-300"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 px-6 py-4 bg-gradient-to-r from-[#8B1538] to-[#6B0F2A] text-white font-bold rounded-lg hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Registration'}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Register;
