import { useState } from 'react';
import translations from '../../translations/translations';
import { EnvelopeIcon, LoaderIcon, CheckIcon } from '../../ui/FormIcons';

export default function ContactForm({ lang }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // setStatus('idle');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');

    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="min-w-[200px]">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-[#f3f3f3]">
            {translations.formLabels.name[lang]}
          </label>
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
          <label className="block text-[#f3f3f3]">
            {translations.formLabels.email[lang]}
          </label>
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
          <label className="block text-[#f3f3f3]">
            {translations.formLabels.message[lang]}
          </label>
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
          className="flex w-full items-center justify-center gap-2 px-6 py-2 font-semibold transition hover:scale-125"
          disabled={status === 'loading'}
        >
          {status === 'loading' && <LoaderIcon />}
          {status === 'success' && <CheckIcon />}
          {status === 'idle' && <EnvelopeIcon />}
        </button>
      </form>
    </div>
  );
}
