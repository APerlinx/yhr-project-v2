import emailjs from '@emailjs/browser'
import { useRef, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { z } from 'zod'
import translations from '../../translations/translations'
import { CheckIcon, EnvelopeIcon, LoaderIcon } from '../../ui/FormIcons'

const contactFormSchema = z.object({
  name: z
    .string()
    .min(1, 'Name is required')
    .max(50, 'Name too long')
    .refine((val) => !/<[^>]*>/.test(val), {
      message: 'HTML tags are not allowed in name',
    }),
  email: z
    .string()
    .email({ message: 'Invalid email address' })
    .max(50, 'Email too long'),
  phone: z
    .string()
    .min(10, 'Phone number must be 10 digits')
    .max(10, 'Phone number must be 10 digits')
    .regex(/^\d+$/, { message: 'Phone number must contain only numbers' }),
  message: z
    .string()
    .min(1, 'Message is required')
    .max(500, 'Message too long')
    .refine((val) => !/<[^>]*>/.test(val), {
      message: 'HTML tags are not allowed in message',
    }),
})

export default function ContactForm({ lang }) {
  const formRef = useRef(null)
  const captchaRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [errorMessage, setErrorMessage] = useState('')
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    const { name, value } = e.target
    if (status === 'error') setStatus('idle')
    const maxLengths = {
      name: 50,
      email: 50,
      phone: 20,
      message: 500,
    }
    if (value.length > maxLengths[name]) return
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const token = captchaRef.current.getValue()
    if (!token) {
      alert("please verify you're not a robot")
      return
    }

    const result = contactFormSchema.safeParse(formData)

    if (!result.success) {
      setErrorMessage(result.error.issues[0]?.message)
      setStatus('error')
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
      setFormData({ name: '', email: '', phone: '', message: '' })
      const timeout = setTimeout(() => {
        setStatus('idle')
        captchaRef.current?.reset()
      }, 6000)
      return () => clearTimeout(timeout)
    } catch (error) {
      setStatus('error')
      setErrorMessage('Something went wrong. Please try again later.')
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
          {/* ✅ New Phone Field */}
          <div>
            <label className="block text-[#f3f3f3]">
              {translations.formLabels.phone
                ? translations.formLabels.phone[lang]
                : lang === 'he'
                ? 'טלפון'
                : 'Phone'}
            </label>
            <input
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
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
              {errorMessage}
            </p>
          )}
        </div>
      </form>
    </div>
  )
}
