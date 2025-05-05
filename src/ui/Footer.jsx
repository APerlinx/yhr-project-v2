import FacebookLink from './FacebookLink';
import LinkButton from './LinkButton';

function Footer() {
  return (
    <div className="mt-2 flex items-center justify-between p-10 py-6  ">
      <div className="cursor-default">
        <h1 className="text-xl">Herman Architects Ltd.</h1>
        <p className="w-56 text-xs ">
          Copyright 2024. All rights reserved.
          <br /> Site by Alon Perlin.
        </p>
      </div>

      <div className="flex flex-col flex-wrap items-center justify-center gap-1 sm:flex-row sm:items-center sm:gap-10">
        <FacebookLink type="primary" />

        <LinkButton to="/contact">צור-קשר</LinkButton>
        <LinkButton>הצהרת נגישות</LinkButton>
      </div>
    </div>
  );
}

export default Footer;
