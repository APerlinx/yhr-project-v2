import React from 'react';
import TeamMember from './TeamMember';

function AboutPage() {
  const teamMembers = [
    {
      image:
        'https://res.cloudinary.com/dayojijed/image/upload/v1733482274/AboutPage-image/nvse61npnkwg4yqdc0l7.jpg',
      name: 'יאיר הרמן',
      description: 'מייסד ובעלים, אדריכל',
    },
    {
      image:
        'https://res.cloudinary.com/dayojijed/image/upload/v1733482274/AboutPage-image/bqjeigaae8r2kndstd6p.jpg',
      name: 'אורה הרמן',
      description: 'מנהלת המשרד',
    },
  ];

  return (
    <div
      className="mt-32 grid w-screen auto-rows-auto grid-cols-1 gap-10 border-b-2 border-stone-800 px-8 pb-12 sm:mt-36 sm:grid-flow-col sm:px-32"
      dir="rtl"
    >
      {/* About Section */}
      <div className="relative row-span-2 justify-items-end">
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
          <p className="text-right text-lg leading-relaxed">
            <span dir="rtl">
              הרמן אדריכלים נוסד בשנת 1991 על ידי יאיר הרמן, ומאז הפך לאחד
              ממשרדי האדריכלות המובילים בישראל. המשרד מתמחה בתכנון ועיצוב בנייה
              פרטית, בנייה רוויה, רבי קומות, שכונות מגורים, מרכזי מסחר ומלונאות.
            </span>
          </p>
          <p className="mt-6 text-right text-lg leading-relaxed">
            <span dir="rtl">
              עם גישה חדשנית ויצירתית, הרמן אדריכלים מציבים דגש על התאמה אישית
              לצורכי הלקוח ושמירה על סטנדרטים גבוהים של איכות ועיצוב. אנו גאים
              בליווי לקוחותינו לאורך כל שלבי הפרויקט – מתכנון ראשוני ועד גמר
              ביצוע.
            </span>
          </p>
          <p className="mt-6 text-right text-lg leading-relaxed">
            <span dir="rtl">
              למשרדנו ניסיון עשיר בבנייה בת קיימא ושימוש בטכנולוגיות מתקדמות,
              במטרה ליצור מבנים חדשניים, אסתטיים וידידותיים לסביבה.
            </span>
          </p>
        </div>
      </div>

      {/* Team Members */}
      <div className="flex flex-col justify-end gap-8 pt-10">
        {teamMembers.map((member, index) => (
          <TeamMember
            key={index}
            image={member.image}
            name={member.name}
            description={member.description}
          />
        ))}
      </div>
    </div>
  );
}

export default AboutPage;
