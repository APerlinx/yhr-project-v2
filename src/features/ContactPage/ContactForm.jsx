import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import translations from '../../translations/translations'
import { EnvelopeIcon, LoaderIcon, CheckIcon } from '../../ui/FormIcons'
import ReCAPTCHA from 'react-google-recaptcha'

export default function ContactForm({ lang }) {
  const formRef = useRef(null)
  const captchaRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const token = captchaRef.current.getValue()
    if (!token) {
      alert("please verify you're not a robot")
      return
    }
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
      const timeout = setTimeout(() => {
        setStatus('idle')
        captchaRef.current?.reset()
      }, 6000)
      return () => clearTimeout(timeout)
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <div className="min-w-[200px]">
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
        <>
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
              disabled={status === 'success'}
              className={`mt-1 w-full border-b-2 bg-transparent  px-4 py-2 text-white outline-none focus:ring-2 focus:ring-[#f3f3f3] ${
                status === 'success'
                  ? 'cursor-not-allowed border-gray-400 text-gray-400'
                  : ''
              }`}
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
              disabled={status === 'success'}
              className={`mt-1 w-full border-b-2 bg-transparent px-4 py-2 text-white outline-none focus:ring-2 focus:ring-[#f3f3f3] ${
                status === 'success'
                  ? 'cursor-not-allowed border-gray-400 text-gray-400'
                  : ''
              }`}
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
              disabled={status === 'success'}
              className={`mb-2 w-full resize-none  border-b-2 bg-transparent  px-4 py-2 text-white outline-none focus:ring-2 focus:ring-[#f3f3f3] ${
                status === 'success'
                  ? 'cursor-not-allowed border-gray-400 text-gray-400'
                  : ''
              }`}
            />
          </div>
        </>

        <ReCAPTCHA
          sitekey={import.meta.env.VITE_APP_RECAPTCHA_SITE_KEY}
          ref={captchaRef}
          className="flex justify-center"
        />

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
