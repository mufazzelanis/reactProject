import React from 'react'
import { useState } from 'react'
import Header from '../component/Header'
import { FileText, MapPin, Calendar, Clock, DollarSign, CheckCircle, AlertCircle, Upload, ArrowRight, Globe, Users, Briefcase } from 'lucide-react'

function VisaDetail() {
  const [selectedVisaType, setSelectedVisaType] = useState(0);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    passport: '',
    birthDate: '',
    nationality: ''
  });
  const [uploadedDocs, setUploadedDocs] = useState([]);

  const visaData = {
    country: 'United States',
    flag: '🇺🇸',
    visaTypes: [
      {
        id: 1,
        name: 'Tourist Visa',
        code: 'B-1/B-2',
        duration: '10 Years',
        stayDuration: 'Up to 6 months',
        processingTime: '3-5 weeks',
        fee: 160,
        requirements: [
          'Valid Passport',
          'Birth Certificate',
          'Bank Statements',
          'Employment Letter',
          'Flight Booking'
        ],
        description: 'For leisure travel, visiting friends/family, or business meetings'
      },
      {
        id: 2,
        name: 'Student Visa',
        code: 'F-1',
        duration: 'Duration of Stay',
        stayDuration: 'Full course period',
        processingTime: '4-6 weeks',
        fee: 350,
        requirements: [
          'Valid Passport',
          'School Acceptance Letter',
          'I-20 Form',
          'Financial Documents',
          'English Proficiency Test',
          'SEVIS Fee Receipt'
        ],
        description: 'For academic studies at accredited institutions'
      },
      {
        id: 3,
        name: 'Work Visa',
        code: 'H-1B',
        duration: '3 Years',
        stayDuration: 'Up to 3 years',
        processingTime: '6-8 weeks',
        fee: 500,
        requirements: [
          'Valid Passport',
          'Job Offer Letter',
          'Educational Credentials',
          'Work Experience Proof',
          'Financial Documents',
          'Medical Examination'
        ],
        description: 'For employment in specialty occupations'
      },
      {
        id: 4,
        name: 'Family Visa',
        code: 'IR',
        duration: '10 Years',
        stayDuration: 'Permanent',
        processingTime: '8-12 weeks',
        fee: 1225,
        requirements: [
          'Valid Passport',
          'Birth Certificate',
          'Marriage Certificate',
          'Sponsor\'s Documents',
          'Financial Affidavit',
          'Medical Examination'
        ],
        description: 'For family reunification and permanent residence'
      }
    ],
    documents: [
      { id: 1, name: 'Passport', required: true, status: 'pending' },
      { id: 2, name: 'Birth Certificate', required: true, status: 'pending' },
      { id: 3, name: 'Bank Statements', required: true, status: 'pending' },
      { id: 4, name: 'Employment Letter', required: true, status: 'pending' },
      { id: 5, name: 'Medical Report', required: false, status: 'pending' },
      { id: 6, name: 'Police Clearance', required: false, status: 'pending' }
    ],
    timeline: [
      { step: 1, title: 'Application Submitted', description: 'Your application has been received', completed: true },
      { step: 2, title: 'Document Review', description: 'Documents are being verified', completed: true },
      { step: 3, title: 'Interview Scheduled', description: 'Interview appointment pending', completed: false },
      { step: 4, title: 'Visa Decision', description: 'Awaiting final decision', completed: false },
      { step: 5, title: 'Passport Delivery', description: 'Visa will be stamped in passport', completed: false }
    ]
  };

  const currentVisa = visaData.visaTypes[selectedVisaType];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDocumentUpload = (e) => {
    const files = Array.from(e.target.files);
    setUploadedDocs(prev => [...prev, ...files.map(f => f.name)]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <Header />
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-6xl mb-4">{visaData.flag}</p>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">{visaData.country} Visa Application</h1>
          <p className="text-gray-600 text-lg">Complete your visa application with ease</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Visa Types */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Select Visa Type</h2>
              <div className="space-y-3">
                {visaData.visaTypes.map((visa, idx) => (
                  <div
                    key={visa.id}
                    onClick={() => setSelectedVisaType(idx)}
                    className={`border-2 p-5 rounded-lg cursor-pointer transition ${
                      selectedVisaType === idx
                        ? 'border-indigo-600 bg-indigo-50'
                        : 'border-gray-200 hover:border-indigo-300'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-lg font-bold text-gray-800">{visa.name}</h3>
                        <p className="text-gray-600 text-sm">{visa.code}</p>
                      </div>
                      <p className="text-2xl font-bold text-indigo-600">${visa.fee}</p>
                    </div>
                    <p className="text-gray-600 text-sm">{visa.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Visa Details */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Visa Details</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-indigo-50 p-4 rounded-lg text-center">
                  <Calendar className="text-indigo-600 mx-auto mb-2" size={24} />
                  <p className="text-sm text-gray-600 mb-1">Validity</p>
                  <p className="font-bold text-gray-800">{currentVisa.duration}</p>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg text-center">
                  <Clock className="text-indigo-600 mx-auto mb-2" size={24} />
                  <p className="text-sm text-gray-600 mb-1">Processing</p>
                  <p className="font-bold text-gray-800">{currentVisa.processingTime}</p>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg text-center">
                  <Users className="text-indigo-600 mx-auto mb-2" size={24} />
                  <p className="text-sm text-gray-600 mb-1">Stay Duration</p>
                  <p className="font-bold text-gray-800">{currentVisa.stayDuration}</p>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg text-center">
                  <DollarSign className="text-indigo-600 mx-auto mb-2" size={24} />
                  <p className="text-sm text-gray-600 mb-1">Fee</p>
                  <p className="font-bold text-gray-800">${currentVisa.fee}</p>
                </div>
              </div>
            </div>

            {/* Requirements */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Requirements</h2>
              <div className="space-y-3">
                {currentVisa.requirements.map((req, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                    <span className="text-gray-800">{req}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Document Upload */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Upload Documents</h2>
              <div className="border-2 border-dashed border-indigo-300 rounded-lg p-8 text-center mb-6">
                <Upload className="text-indigo-600 mx-auto mb-3" size={32} />
                <p className="text-gray-700 font-semibold mb-2">Drop files here or click to upload</p>
                <p className="text-gray-500 text-sm mb-4">Supported formats: PDF, JPG, PNG (Max 5MB each)</p>
                <input
                  type="file"
                  multiple
                  onChange={handleDocumentUpload}
                  className="hidden"
                  id="fileInput"
                />
                <label htmlFor="fileInput" className="inline-block px-6 py-2 bg-indigo-600 text-white rounded-lg cursor-pointer hover:bg-indigo-700 transition">
                  Choose Files
                </label>
              </div>
              {uploadedDocs.length > 0 && (
                <div className="space-y-2">
                  {uploadedDocs.map((doc, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-3 bg-green-50 rounded-lg border border-green-200">
                      <CheckCircle className="text-green-500" size={18} />
                      <span className="text-green-800">{doc}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Personal Information */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Personal Information</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="passport"
                    placeholder="Passport Number"
                    value={formData.passport}
                    onChange={handleInputChange}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <input
                    type="date"
                    name="birthDate"
                    value={formData.birthDate}
                    onChange={handleInputChange}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>
            </div>

            {/* Application Timeline */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Application Timeline</h2>
              <div className="space-y-4">
                {visaData.timeline.map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                        item.completed ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600'
                      }`}>
                        {item.completed ? '✓' : item.step}
                      </div>
                      {idx < visaData.timeline.length - 1 && (
                        <div className={`w-1 h-8 mt-1 ${item.completed ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                      )}
                    </div>
                    <div className="pb-4">
                      <h4 className="font-bold text-gray-800">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{currentVisa.name}</h3>
                <p className="text-gray-600 text-sm mb-4">({currentVisa.code})</p>
                <div className="bg-indigo-50 p-4 rounded-lg mb-4">
                  <p className="text-gray-600 text-sm mb-1">Application Fee</p>
                  <p className="text-3xl font-bold text-indigo-600">${currentVisa.fee}</p>
                </div>
              </div>

              {/* Key Info */}
              <div className="space-y-4 border-t pt-6">
                <div>
                  <p className="text-gray-600 text-sm">Visa Validity</p>
                  <p className="font-bold text-gray-800">{currentVisa.duration}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Processing Time</p>
                  <p className="font-bold text-gray-800">{currentVisa.processingTime}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Maximum Stay</p>
                  <p className="font-bold text-gray-800">{currentVisa.stayDuration}</p>
                </div>
              </div>

              {/* Status */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex gap-3">
                <AlertCircle className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                <div>
                  <p className="font-semibold text-blue-900 text-sm">Application In Progress</p>
                  <p className="text-blue-700 text-xs mt-1">Step 2 of 5 completed</p>
                </div>
              </div>

              {/* Submit Button */}
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-lg transition flex items-center justify-center gap-2">
                Continue Application
                <ArrowRight size={20} />
              </button>

              {/* Support */}
              <div className="text-center pt-4 border-t">
                <p className="text-gray-600 text-sm mb-2">Need help?</p>
                <a href="#" className="text-indigo-600 font-semibold hover:underline">Contact Support</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VisaDetail