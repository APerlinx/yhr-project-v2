import FacebookLink from './FacebookLink';
import LinkButton from './LinkButton';
import { useLanguage } from '../context/LanguageContext';
import translations from '../translations/translations';

function Footer() {
  const { lang } = useLanguage();

  return (
    <div className="mt-2 flex justify-between p-10 py-6">
      <div className="cursor-default self-center">
        <h1 className="text-lg">Herman Architects Ltd.</h1>
        <p className="text-xs">
          &copy;{new Date().getFullYear()}, All rights reserved.<br></br>
          Website & Design by Alon Perlin.
        </p>
      </div>
      <div className="flex flex-col flex-wrap items-center justify-center gap-1 text-xs sm:flex-row sm:items-center sm:gap-10 sm:text-base">
        <div className="block sm:hidden">
          <FacebookLink type="primary" size={17} />
        </div>
        <div className="hidden sm:block">
          <FacebookLink type="primary" size={24} />
        </div>
        <LinkButton to="/contact">{translations.contact[lang]}</LinkButton>
        <LinkButton to="/accessibility">
          {translations.accessibility[lang]}
        </LinkButton>
      </div>
    </div>
  );
}

export default Footer;
