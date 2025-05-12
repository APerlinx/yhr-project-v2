import React from 'react';
import TeamMember from './TeamMember';
import { useLanguage } from '../../context/LanguageContext';
import translations from '../../translations/translations';

function AboutPage() {
  const { lang } = useLanguage();
  const paragraphs = translations.aboutParagraphs[lang];
  const teamMembers = translations.teamMembers;

  return (
    <div
      className="mt-36 grid w-screen grid-cols-1  border-b-2 border-[#948979]  px-8 pb-12 sm:mt-40 sm:grid-cols-2 sm:px-32"
      dir={lang === 'he' ? 'rtl' : 'ltr'}
    >
      {/* About Section */}
      <div className="relative row-span-2 w-full max-w-md justify-items-end sm:max-w-lg md:max-w-xl lg:max-w-4xl">
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
            About us
          </text>
        </svg>

        <div>
          {paragraphs.map((text, index) => (
            <p
              key={index}
              className={`${
                lang === 'he' ? 'text-right' : 'text-left'
              } mt-6 text-lg leading-relaxed`}
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
  );
}

export default AboutPage;
