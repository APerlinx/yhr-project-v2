import ContactForm from './ContactForm';
import { useLanguage } from '../../context/LanguageContext';
import translations from '../../translations/translations';

function ContactPage() {
  const { lang } = useLanguage();

  return (
    <div
      className="mt-36 grid w-screen grid-cols-1 gap-x-4 border-b-2 border-stone-800 px-8 pb-12 sm:mt-40 sm:grid-cols-2 sm:px-32 lg:pb-28"
      dir={lang === 'he' ? 'rtl' : 'ltr'}
    >
      <div className="flex h-full flex-col justify-between sm:max-w-lg md:max-w-xl lg:max-w-4xl ">
        <svg
          viewBox="0 0 500 150"
          xmlns="http://www.w3.org/2000/svg"
          fill="#f3f3f3"
          className="h-auto w-full"
        >
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontSize="48"
            fontFamily="'Georgia', serif"
          >
            Contact
          </text>
        </svg>
        <ContactForm lang={lang} />
      </div>

      <div className="flex h-full flex-col justify-between">
        <div className="space-y-3 pb-4 pt-4 text-center sm:pb-0 sm:pt-24">
          <div>
            <p className="text-sm font-bold md:text-2xl ">
              {translations.contactAddress[lang]}
            </p>
            <p className="text-sm md:text-xl">
              {translations.addressValue[lang]}
            </p>
          </div>
          <div>
            <p className="text-sm font-bold md:text-2xl ">
              {translations.contactEmail[lang]}
            </p>
            <a
              href="mailto:herman.arc@gmail.com"
              className="text-sm md:text-xl"
            >
              herman.arc@gmail.com
            </a>
          </div>
          <div>
            <p className="text-sm font-bold md:text-2xl ">
              {translations.contactPhone[lang]}
            </p>
            <a href="tel:04-6620222" className="text-sm md:text-xl">
              04-6620222
            </a>
          </div>
        </div>
        <div>
          <div className="flex-1 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3358.0060722171033!2d35.42258542431093!3d32.685884073701914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151c45c42c9f5ef9%3A0x3457c8acb83a60d4!2z15XXoteT15Qg15zXqteb16DXldefINeV15HXoNeZ15Qg15LXnNeZ15wg157Xlteo15fXmQ!5e0!3m2!1siw!2sus!4v1732891371279!5m2!1siw!2sus"
              className="h-full w-full"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
