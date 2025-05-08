import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sending logic here (API, email, etc.)
    console.log('Form submitted:', formData);
    alert('Thank you for your message!');
  };

  return (
    <div className="min-w-[200px]">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-[#f3f3f3]">שם</label>
          <input
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 w-full border-b-2 bg-transparent  px-4 py-2 text-white outline-none focus:ring-2 focus:ring-[#f3f3f3]"
          />
        </div>
        <div>
          <label className="block text-[#f3f3f3]">אימייל</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 w-full border-b-2 bg-transparent px-4 py-2 text-white outline-none focus:ring-2 focus:ring-[#f3f3f3]"
          />
        </div>
        <div>
          <label className="block text-[#f3f3f3]">הודעה</label>
          <textarea
            name="message"
            rows="3"
            value={formData.message}
            onChange={handleChange}
            required
            className="mb-2 w-full resize-none  border-b-2 bg-transparent  px-4 py-2 text-white outline-none focus:ring-2 focus:ring-[#f3f3f3]"
          />
        </div>
        <button
          type="submit"
          className="w-full justify-items-center bg-[#f3f3f3] px-6 py-2 font-semibold text-black transition hover:bg-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6 text-[#171717]"
          >
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8.99l8 6 8-6V18H4z" />
          </svg>
        </button>
      </form>
    </div>
  );
}
