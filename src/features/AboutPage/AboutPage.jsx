import { Helmet } from 'react-helmet-async'
import TeamMember from './TeamMember'
import { useLanguage } from '../../context/LanguageContext'
import translations from '../../translations/translations'

function AboutPage() {
  const { lang } = useLanguage()
  const paragraphs = translations.aboutParagraphs[lang]
  const teamMembers = translations.teamMembers

  return (
    <>
      <Helmet>
        <title>אודות יאיר הרמן | משרד אדריכלים מוביל בישראל</title>
        <meta
          name="description"
          content="הכירו את יאיר הרמן וצוות המשרד – מומחים בתכנון אדריכלי של וילות, בתים פרטיים ומבני ציבור בישראל."
        />
        <link rel="canonical" href="https://hermanarchitects.com/about" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="he_IL" />
        <meta property="og:url" content="https://hermanarchitects.com/about" />
        <meta
          property="og:title"
          content="אודות יאיר הרמן | משרד אדריכלים מוביל בישראל"
        />
        <meta
          property="og:description"
          content="למדו על הדרך, החזון והצוות מאחורי משרד האדריכלים יאיר הרמן – אדריכלות מודרנית עם טאץ' אישי."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dayojijed/image/upload/v1746526152/r1p_frontview/sdn47dv7ua5colzyw0yy.jpg"
        />
      </Helmet>

      <div
        className="mt-40 grid w-screen grid-cols-1 justify-items-center border-b-2 border-[#948979] px-8 pb-24 sm:mt-52 sm:px-32 sm:pb-12"
        dir={lang === 'he' ? 'rtl' : 'ltr'}
      >
        {/* About Section */}
        <div className="relative row-span-2 w-full max-w-md justify-items-end sm:max-w-lg md:max-w-xl lg:max-w-4xl">
          <div className="text-center">
            <span className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
              {translations.companyName[lang]}
            </span>

            {paragraphs.map((text, index) => (
              <p
                key={index}
                className={`mt-6 text-lg leading-relaxed ${
                  lang === 'he' ? 'text-right' : 'text-left'
                }`}
              >
                {text}
              </p>
            ))}
          </div>
        </div>

        {/* Team Members */}
        <div className="row-span-2 flex flex-col justify-end gap-8 pt-10 ">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              image={
                index === 0
                  ? 'https://res.cloudinary.com/dayojijed/image/upload/v1746951103/Screenshot_2025-05-11_111041_ojqysr.png'
                  : 'https://res.cloudinary.com/dayojijed/image/upload/v1733482274/AboutPage-image/bqjeigaae8r2kndstd6p.jpg'
              }
              name={member.name[lang]}
              description={member.description[lang]}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default AboutPage
