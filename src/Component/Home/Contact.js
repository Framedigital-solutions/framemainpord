import React, { useState } from "react";
import { Paperclip, ArrowRight, Mail } from "lucide-react";
import { FaWhatsapp, FaLinkedin } from "react-icons/fa";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Initialize toast notifications

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectDetails: "",
    attachment: "",
    fileName: "",
    agreeToPolicy: false,
  });

  const [charCount, setCharCount] = useState(0);
  const maxChars = 1000;

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    if (name === "projectDetails") {
      setCharCount(value.length);
    }
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    let imageData = new FormData();
    imageData.append("file", file);
    imageData.append("upload_preset", "marketdata"); // Replace with your Cloudinary upload preset

    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/de4ks8mkh/image/upload",
        {
          method: "POST",
          body: imageData,
        }
      );

      const data = await response.json();

      if (data.secure_url) {
        setFormData((prevData) => ({
          ...prevData,
          attachment: data.secure_url,
          fileName: file.name,
        }));
        toast.success("File uploaded successfully!");
      } else {
        toast.error("File upload failed. Please try again.");
      }
    } catch (error) {
      console.error("File upload error:", error);
      toast.error("Error uploading file. Please check your connection.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name: formData.name,
      email: formData.email,
      projectDetails: formData.projectDetails,
      attachment: formData.attachment, // Only sending the URL
      agreeToPolicy: formData.agreeToPolicy,
    };

    try {
      const response = await fetch(
        "https://backend.framedigital.solutions/contact/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        toast.success("Your query has been posted to our team!");
        setFormData({
          name: "",
          email: "",
          projectDetails: "",
          attachment: "",
          fileName: "",
          agreeToPolicy: false,
        });
        setCharCount(0);
      } else {
        toast.error("Failed to send query. Please try again.");
      }
    } catch (error) {
      toast.error("Error connecting to server. Please check your connection.");
    }
  };

  return (
    <section id="contactus">
      <div className="bg-gray-900 text-white py-16 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-serif mb-6 text-blue-500">
              Have An Idea?
            </h2>
            <h1 className="text-6xl font-bold text-indigo-500 mb-12">
              Drop us a<br /> line
            </h1>
            <div className="flex items-center mb-8 space-x-2">
      <Mail className="w-5 h-5 text-gray-300" />
      <a
        href="mailto:official@framedigital.solutions"
        className="text-gray-300 hover:text-white"
      >
        official@framedigital.solutions
      </a>
    </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://wa.me/917294962001?text=Hello"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 border border-gray-700 px-4 py-2 rounded-md hover:bg-green-600 hover:text-white transition-colors"
              >
                <FaWhatsapp size={20} />
                <span>WhatsApp</span>
              </a>

              <a
                href="https://www.linkedin.com/company/102244433/admin/notifications/all/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 border border-gray-700 px-4 py-2 rounded-md hover:bg-blue-700 hover:text-white transition-colors"
              >
                <FaLinkedin size={20} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Your Name"
                className="w-full mb-4 p-2 border bg-transparent border-b border-gray-600 pb-2 focus:border-indigo-500 outline-none text-white"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="Your Email"
                className="w-full mb-4 p-2 border bg-transparent border-b border-gray-600 pb-2 focus:border-indigo-500 outline-none text-white"
              />
              <textarea
                name="projectDetails"
                value={formData.projectDetails}
                onChange={handleInputChange}
                rows="4"
                placeholder="Tell Us About Your Project"
                className="w-full bg-transparent border-b border-gray-600 pb-2 focus:border-indigo-500 outline-none text-white resize-none"
              ></textarea>
              <div className="mb-4 text-sm text-gray-400">
                {charCount}/{maxChars}
              </div>

              <label className="flex items-center text-gray-300 cursor-pointer">
                <Paperclip size={18} className="mr-2" />
                <span>Attach File</span>
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>

              {formData.fileName && (
                <p className="text-gray-400 text-sm mt-2">
                  Uploaded File: {formData.fileName}
                </p>
              )}

              <div className="mt-4 flex items-center">
                <input
                  type="checkbox"
                  name="agreeToPolicy"
                  checked={formData.agreeToPolicy}
                  onChange={handleInputChange}
                  className="mr-2"
                  required
                />
                <span className="text-white">I Agree with Privacy Policy</span>
              </div>
              <ToastContainer />

              <button
                type="submit"
                className="bg-indigo-600 text-white px-4 py-2 mt-4 flex items-center hover:bg-indigo-700 transition-colors"
              >
                Submit <ArrowRight size={18} className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
