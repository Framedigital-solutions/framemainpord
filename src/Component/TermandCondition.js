import React, { useState } from 'react';

const TermsAndCondition = () => {
  const [isAgreed, setIsAgreed] = useState(false);

  const handleAgree = () => {
    setIsAgreed(true);
    console.log('User agreed to terms and conditions');
  };

  const handleCancel = () => {
    console.log('User cancelled terms and conditions');
  };

  return (
    <div className="min-h-screen bg-gray-100 px-8 py-12">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Terms & Conditions</h1>

      {/* Terms Content */}
      <div className="overflow-y-auto pr-4 mb-6 text-justify border p-6 rounded-md bg-gray-50 max-h-[80vh]">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">1. Introduction</h2>
          <p className="text-gray-600">
            Welcome to Frame Digital Solution Pvt. Ltd. By accessing and using our website, software, and services, 
            you acknowledge that you have read, understood, and agree to comply with these Terms & Conditions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">2. Definitions</h2>
          <ul className="list-disc ml-6 text-gray-600 space-y-2">
            <li><strong>Company:</strong> Frame Digital Solution Pvt. Ltd., its subsidiaries, and employees.</li>
            <li><strong>Services:</strong> IT solutions, SaaS platforms, consulting, and software development.</li>
            <li><strong>User:</strong> Anyone accessing or using our services.</li>
            <li><strong>Agreement:</strong> This document and any additional service agreements.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">3. Scope of Services</h2>
          <p className="text-gray-600">Our company provides:</p>
          <ul className="list-disc ml-6 text-gray-600 space-y-2">
            <li>Custom Software Development (Web, Mobile, Enterprise)</li>
            <li>SaaS & AI-based Solutions</li>
            <li>Cloud Services & Cybersecurity</li>
            <li>E-commerce & FinTech Solutions</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">4. User Obligations</h2>
          <p className="text-gray-600">By using our services, you agree to:</p>
          <ul className="list-disc ml-6 text-gray-600 space-y-2">
            <li>Provide accurate registration details.</li>
            <li>Maintain confidentiality of account credentials.</li>
            <li>Comply with applicable laws and cybersecurity guidelines.</li>
          </ul>
        </section>
      </div>

      {/* Agreement Section */}
      <div className="border-t pt-4 flex flex-col space-y-3">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="agree-checkbox"
            checked={isAgreed}
            onChange={() => setIsAgreed(!isAgreed)}
            className="w-5 h-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="agree-checkbox" className="ml-2 text-gray-700 text-lg">
            I have read and agree to the Terms & Conditions
          </label>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-4">
          <button 
            onClick={handleCancel} 
            className="px-6 py-3 border rounded bg-gray-300 text-gray-700 hover:bg-gray-400 transition"
          >
            Cancel
          </button>
          <button 
            onClick={handleAgree} 
            disabled={!isAgreed}
            className={`px-6 py-3 rounded transition ${isAgreed ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
          >
            Agree
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsAndCondition;
