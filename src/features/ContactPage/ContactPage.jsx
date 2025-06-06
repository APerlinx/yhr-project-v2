import { Helmet } from 'react-helmet-async'
import { useLanguage } from '../../context/LanguageContext'
import translations from '../../translations/translations'
import FacebookLink from '../../ui/FacebookLink'
import ContactForm from './ContactForm'

function ContactPage() {
  const { lang } = useLanguage()
  const mapLocation =
    'https://www.google.com/maps/place/Herman+Architects/data=!4m2!3m1!1s0x0:0x44df10066a5165dc?sa=X&ved=1t:2428&ictx=111'

  return (
    <>
      <Helmet>
        <title>צור קשר עם יאיר הרמן | משרד אדריכלות</title>
        <meta
          name="description"
          content="השאירו פרטים ליצירת קשר עם יאיר הרמן – משרד אדריכלים לתכנון וילות ובתים פרטיים."
        />
        <link rel="canonical" href="https://hermanarchitects.com/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="he_IL" />
        <meta
          property="og:url"
          content="https://hermanarchitects.com/contact"
        />
        <meta
          property="og:title"
          content="צור קשר עם יאיר הרמן | משרד אדריכלות"
        />
        <meta
          property="og:description"
          content="השאירו פרטים ונחזור אליכם בהקדם. תכנון אישי ומקצועי מבית יאיר הרמן."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dayojijed/image/upload/v1746526152/r1p_frontview/sdn47dv7ua5colzyw0yy.jpg"
        />
      </Helmet>

      <div
        className="mt-36 grid w-screen grid-cols-1 gap-4 border-b-2 border-[#948979] px-8 pb-24 sm:mt-32 sm:px-16 md:px-32"
        dir={lang === 'he' ? 'rtl' : 'ltr'}
      >
        {/* title */}
        <div className="w-full">
          <div className="mx-auto w-full sm:w-[90%] md:w-[80%] lg:w-[70%]">
            <svg
              viewBox="0 0 600 150"
              xmlns="http://www.w3.org/2000/svg"
              fill="#f3f3f3"
              className="h-auto w-full"
            >
              <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fontSize="52"
                fontFamily="'Georgia', serif"
              >
                Contact Us
              </text>
            </svg>
          </div>
        </div>

        {/* address section */}
        <div className="flex flex-col items-center justify-evenly justify-items-center gap-10 border-white pb-12 text-center sm:flex-row">
          <div>
            <p className="text-lg font-bold md:text-xl lg:text-2xl">
              {translations.contactAddress[lang]}
            </p>
            <p className="text-base lg:text-lg">
              {translations.addressValue[lang]}
            </p>
          </div>
          <div>
            <p className="text-lg font-bold md:text-xl lg:text-2xl">
              {translations.contactEmail[lang]}
            </p>
            <a
              href="mailto:herman.arc@gmail.com"
              className="text-base lg:text-lg"
            >
              herman.arc@gmail.com
            </a>
          </div>
          <div>
            <p className="text-lg font-bold md:text-xl lg:text-2xl">
              {translations.contactPhone[lang]}
            </p>
            <a href="tel:04-6620222" className="text-base lg:text-lg">
              04-6620222
            </a>
          </div>
          <div className="flex items-center gap-8 pr-2">
            <FacebookLink type={'primary'} size={32} />
            <a href={mapLocation} target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="42"
                height="42"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#1c9957"
                  d="M42,39V9c0-1.657-1.343-3-3-3H9C7.343,6,6,7.343,6,9v30c0,1.657,1.343,3,3,3h30C40.657,42,42,40.657,42,39z"
                ></path>
                <path
                  fill="#3e7bf1"
                  d="M9,42h30c1.657,0-15-16-15-16S7.343,42,9,42z"
                ></path>
                <path
                  fill="#cbccc9"
                  d="M42,39V9c0-1.657-16,15-16,15S42,40.657,42,39z"
                ></path>
                <path
                  fill="#efefef"
                  d="M39,42c1.657,0,3-1.343,3-3v-0.245L26.245,23L23,26.245L38.755,42H39z"
                ></path>
                <path
                  fill="#ffd73d"
                  d="M42,9c0-1.657-1.343-3-3-3h-0.245L6,38.755V39c0,1.657,1.343,3,3,3h0.245L42,9.245V9z"
                ></path>
                <path
                  fill="#d73f35"
                  d="M36,2c-5.523,0-10,4.477-10,10c0,6.813,7.666,9.295,9.333,19.851C35.44,32.531,35.448,33,36,33s0.56-0.469,0.667-1.149C38.334,21.295,46,18.813,46,12C46,6.477,41.523,2,36,2z"
                ></path>
                <path
                  fill="#752622"
                  d="M36 8.5A3.5 3.5 0 1 0 36 15.5A3.5 3.5 0 1 0 36 8.5Z"
                ></path>
                <path
                  fill="#fff"
                  d="M14.493,12.531v2.101h2.994c-0.392,1.274-1.455,2.185-2.994,2.185c-1.833,0-3.318-1.485-3.318-3.318s1.486-3.318,3.318-3.318c0.824,0,1.576,0.302,2.156,0.799l1.548-1.547C17.22,8.543,15.92,8,14.493,8c-3.038,0-5.501,2.463-5.501,5.5s2.463,5.5,5.501,5.5c4.81,0,5.637-4.317,5.184-6.461L14.493,12.531z"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        {/* form */}
        <div className="flex flex-col px-2 sm:pt-10 md:px-24 md:pt-10 lg:px-40 lg:pt-20">
          <ContactForm lang={lang} />
        </div>
      </div>
    </>
  )
}

export default ContactPage
