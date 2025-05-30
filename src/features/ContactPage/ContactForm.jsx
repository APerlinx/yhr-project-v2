import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import translations from '../../translations/translations'
import { EnvelopeIcon, LoaderIcon, CheckIcon } from '../../ui/FormIcons'

export default function ContactForm({ lang }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')
  const formRef = useRef()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 3000)
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <div className="min-w-[200px]">
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
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

        {/* Send button*/}
        <div className="flex justify-center gap-2 font-semibold ">
          <button
            type="submit"
            disabled={status === 'loading'}
            className="transition hover:scale-125"
            aria-label={lang === 'he' ? 'שלח הודעה' : 'Send message'}
          >
            {status === 'loading' && <LoaderIcon />}
            {status === 'success' && <CheckIcon />}
            {status === 'idle' && <EnvelopeIcon />}
          </button>
          {status === 'error' && (
            <p className="mt-2 text-center font-light text-red-500">
              Something went wrong. Please try again later
            </p>
          )}
        </div>
      </form>
    </div>
  )
}
