import React from 'react';
import TeamMember from './TeamMember';

function AboutPage() {
  const teamMembers = [
    {
      image:
        'https://res.cloudinary.com/dayojijed/image/upload/v1733482274/AboutPage-image/nvse61npnkwg4yqdc0l7.jpg',
      name: 'יאיר הרמן',
      description:
        ' מייסד הרמן אדריכלים, מנהל מקצועי ואדריכל ראשי בהרמן אדריכלים. בוגר תואר B.Arc  בטכניון משנת 1987',
    },
    {
      image:
        'https://res.cloudinary.com/dayojijed/image/upload/v1733482274/AboutPage-image/bqjeigaae8r2kndstd6p.jpg',
      name: 'אורה הרמן',
      description:
        'מנהלת המשרד בוגרת תואר B.S.c  בהנדסה באוניברסיטת ריגה, ליטא. עובדת במשרד משנת 1994',
    },
  ];

  return (
    <div className="relative mt-32 grid min-h-screen w-screen grid-cols-1 gap-8 border-b-2 border-stone-300 px-8 pb-12 sm:mt-48 sm:px-32 custom-sm:grid-cols-2">
      {/* Image Section */}
      <div className="hidden min-w-[530px] items-center justify-center gap-4 border-b border-stone-300 custom-sm:flex">
        <div className="relative">
          {/* Gradient Overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-stone-200/50 to-stone-200"
            aria-hidden="true"
          ></div>
          <img
            src="https://res.cloudinary.com/dayojijed/image/upload/v1733499316/house-about_cbph0p.jpg"
            alt="פנים בית פרטי"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      {/* About Section */}
      <div className="relative justify-items-end border-b border-stone-300 pb-8">
        <h2 className="pb-5 text-4xl font-bold">אודות</h2>
        <div>
          <p className="text-right text-lg leading-relaxed">
            <span dir="rtl">
              הרמן אדריכלים נוסד בשנת 1991 על ידי יאיר הרמן, ומאז הפך לאחד
              ממשרדי האדריכלות המובילים בישראל. המשרד מתמחה בתכנון ועיצוב בנייה
              פרטית, בנייה רוויה, רבי קומות, שכונות מגורים, מרכזי מסחר ומלונאות.
            </span>
          </p>
          <p className="mt-4 text-right text-lg leading-relaxed">
            <span dir="rtl">
              עם גישה חדשנית ויצירתית, הרמן אדריכלים מציבים דגש על התאמה אישית
              לצורכי הלקוח ושמירה על סטנדרטים גבוהים של איכות ועיצוב. אנו גאים
              בליווי לקוחותינו לאורך כל שלבי הפרויקט – מתכנון ראשוני ועד גמר
              ביצוע.
            </span>
          </p>
          <p className="mt-4 text-right text-lg leading-relaxed">
            <span dir="rtl">
              למשרדנו ניסיון עשיר בבנייה בת קיימא ושימוש בטכנולוגיות מתקדמות,
              במטרה ליצור מבנים חדשניים, אסתטיים וידידותיים לסביבה.
            </span>
          </p>
        </div>
      </div>

      {/* Team Members */}
      {teamMembers.map((member, index) => (
        <TeamMember
          key={index}
          image={member.image}
          name={member.name}
          description={member.description}
        />
      ))}
    </div>
  );
}

export default AboutPage;
