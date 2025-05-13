import FacebookLink from './FacebookLink';
import LinkButton from './LinkButton';
import { useLanguage } from '../context/LanguageContext';
import translations from '../translations/translations';

function Footer() {
  const { lang } = useLanguage();

  return (
    <div className="flex items-center justify-between p-5">
      <div className="cursor-default">
        <h1 className="text-lg leading-tight">
          Herman Architects Ltd
          <p className="text-xs">
            &copy;{new Date().getFullYear()}, All rights reserved.
          </p>
        </h1>

        <span className="text-xs">
          Website & Design by{' '}
          <a href="https://github.com/APerlinx">Alon Perlin</a>
        </span>
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
