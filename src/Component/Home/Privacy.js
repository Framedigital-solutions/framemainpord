import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-6 py-12">
      <div className="w-full  bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Privacy Policy</h1>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">1. Introduction</h2>
          <p className="text-gray-700 leading-relaxed">
            At Frame Digital Solution Pvt. Ltd., we are committed to protecting your privacy and ensuring that your
            personal information is handled securely. This Privacy Policy explains how we collect, use, store, and
            protect your data when you use our website, software, and services.
          </p>
          <p className="text-gray-700 mt-4 leading-relaxed">
            By accessing our services, you agree to the collection and use of information in accordance with this policy.
            If you do not agree, please discontinue use immediately.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">2. Information We Collect</h2>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">2.1 Personal Information</h3>
            <p className="text-gray-700 leading-relaxed">
              This includes information that can identify you as an individual, such as:
            </p>
            <ul className="list-disc list-inside text-gray-700 pl-4">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company name</li>
              <li>Billing and payment details</li>
              <li>Government-issued identification (if required for regulatory compliance)</li>
            </ul>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">3. How We Collect Information</h2>
          <ul className="list-disc list-inside text-gray-700 pl-4">
            <li>Directly from users when they register, subscribe, or contact us.</li>
            <li>Automatically through cookies and tracking technologies when users browse our website.</li>
            <li>From third parties, such as payment processors, analytics providers, and advertising partners.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">4. How We Use Your Information</h2>
          <ul className="list-disc list-inside text-gray-700 pl-4">
            <li>To provide and improve our services</li>
            <li>To process transactions and payments</li>
            <li>To personalize user experience and customer support</li>
            <li>To send service updates, promotional offers, and important notifications</li>
            <li>To monitor and prevent security breaches, fraud, and illegal activities</li>
            <li>To comply with legal and regulatory requirements</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">5. Data Security</h2>
          <p className="text-gray-700 leading-relaxed">
            We implement strict security measures to protect user data, including encryption protocols, access controls,
            and regular security audits.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">6. Your Rights & Choices</h2>
          <p className="text-gray-700 leading-relaxed">
            You have the right to access, correct, delete your data, and opt out of marketing communications. To exercise
            these rights, contact us at <a href="mailto:framedigital.solutions@gmail.com" className="text-blue-600 hover:underline">framedigital.solutions@gmail.com</a>
          </p>
        </section>

        <div className="text-center text-sm text-gray-500 mt-8">
          Last Updated: {new Date().toLocaleDateString()}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;