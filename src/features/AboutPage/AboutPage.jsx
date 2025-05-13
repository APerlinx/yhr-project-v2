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
      className="mt-40 grid w-screen grid-cols-1 justify-items-center border-b-2 border-[#948979] px-8 pb-12 sm:mt-52 sm:px-32"
      dir={lang === 'he' ? 'rtl' : 'ltr'}
    >
      {/* About Section */}
      <div className="relative row-span-2 w-full max-w-md justify-items-end sm:max-w-lg md:max-w-xl lg:max-w-4xl">
        <div className="text-center">
          <span className="text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl">
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
      <div className="flex flex-col gap-4 pt-4 text-center ">
        <a
          href="https://www.ynetnews.com/articles/0,7340,L-4702484,00.html#:~:text=Architect%20Yair%20Herman"
          className="underline hover:text-blue-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          Press coverage – our Mount Tabor house
        </a>
        <a href="www.google.com" className="underline hover:text-blue-600">
          Yair's work mention number 2
        </a>
        <a href="www.google.com" className="underline hover:text-blue-600">
          Yair's work mention number 3
        </a>
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
