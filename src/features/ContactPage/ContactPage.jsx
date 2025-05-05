import FacebookLink from '../../ui/FacebookLink';

function ContactPage() {
  return (
    <div
      className="g relative mt-32 grid min-h-screen w-screen gap-8 border-stone-300 pb-12 sm:mt-48 sm:px-32"
      style={{
        gridTemplateRows: 'auto 300px',
      }}
    >
      <div className="relative">
        <h2 className="pb-5 text-right text-4xl font-bold">צור קשר</h2>
        <div className="space-y-6 py-4 text-right">
          <div>
            <p className="text-2xl font-bold ">כתובת</p>
            <p className="text-lg ">מגדל השעון, כפר תבור</p>
          </div>
          <div>
            <p className="text-2xl font-bold ">אימייל</p>
            <a
              href="mailto:herman.arc@gmail.com"
              className="text-lg  underline transition-colors hover:text-yellow-500"
            >
              herman.arc@gmail.com
            </a>
          </div>
          <div>
            <p className="text-2xl font-bold ">טלפון</p>
            <a
              href="tel:04-6620222"
              className="text-lg  underline transition-colors hover:text-yellow-500"
            >
              04-6620222
            </a>
          </div>
          <div className="justify-items-end">
            <FacebookLink className={'sm:mt-2'} type="primary" />
          </div>
        </div>
        <div className="justify-items-end text-lg font-semibold">
          <h6>מעוניינים בקריירה בחברה ? צרו קשר עם המשרד</h6>
        </div>
      </div>
      <div className="aspect-w-16 aspect-h-9 w-full p-4 sm:p-0">
        {/* Replace the iframe with Google Maps embed */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3358.0060722171033!2d35.42258542431093!3d32.685884073701914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151c45c42c9f5ef9%3A0x3457c8acb83a60d4!2z15XXoteT15Qg15zXqteb16DXldefINeV15HXoNeZ15Qg15LXnNeZ15wg157Xlteo15fXmQ!5e0!3m2!1siw!2sus!4v1732891371279!5m2!1siw!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps"
        ></iframe>
      </div>
    </div>
  );
}

export default ContactPage;
