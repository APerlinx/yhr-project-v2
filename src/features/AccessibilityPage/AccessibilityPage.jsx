function AccessibilityPage() {
  return (
    <div
      className="mx-auto mt-36 max-w-3xl px-6 py-20 text-right text-lg leading-loose"
      dir="rtl"
    >
      <h1 className="mb-6 text-3xl font-bold">הצהרת נגישות</h1>

      <p>
        אנו רואים חשיבות רבה בהנגשת האתר שלנו עבור אנשים עם מוגבלות ופועלים כל
        העת לשיפור חוויית השימוש של כלל הגולשים, מתוך מטרה לקדם שוויון, כבוד,
        נוחות ועצמאות.
      </p>

      <h2 className="mt-8 text-2xl font-semibold">רמת נגישות האתר</h2>
      <p>
        אתר זה עומד ככל האפשר בדרישות תקנות שוויון זכויות לאנשים עם מוגבלות
        (התאמות נגישות לשירות), התשע"ג-2013. האתר תואם את המלצות התקן הישראלי
        לנגישות תכנים באינטרנט (ת"י 5568) ברמה AA, ואת הנחיות W3C – Web Content
        Accessibility Guidelines (WCAG) 2.1 ברמה AA.
      </p>

      <h2 className="mt-8 text-2xl font-semibold">אמצעים שננקטו להנגשת האתר</h2>
      <ul className="list-disc pr-6">
        <li>התאמת האתר לשימוש בטכנולוגיות מסייעות כמו קורא מסך</li>
        <li>תמיכה בניווט מקלדת</li>
        <li>שימוש בצבעים עם ניגודיות מספקת</li>
        <li>אפשרות להגדלת טקסטים</li>
        <li>מבנה ברור וקונסיסטנטי של דפי האתר</li>
      </ul>

      <h2 className="mt-8 text-2xl font-semibold">הבהרה</h2>
      <p>
        למרות מאמצינו להנגיש את כלל רכיבי האתר, ייתכן ותיתקלו ברכיב שטרם הונגש
        או בעיה כלשהי. אנו מתחייבים להמשיך ולעדכן את האתר ולשפר את רמת הנגישות
        ככל האפשר.
      </p>

      <h2 className="mt-8 text-2xl font-semibold">
        יצירת קשר ודיווח על בעיות נגישות
      </h2>
      <p>
        אם נתקלתם בבעיה או בתקלה בנושא נגישות באתר, נשמח שתעדכנו אותנו כדי שנוכל
        לתקן:
      </p>
      <ul className="list-none pr-0">
        <li>
          ✉️ דוא"ל:{' '}
          <a href="mailto:herman.arc@gmail.com" className="underline">
            herman.arc@gmail.com
          </a>
        </li>
        <li>
          📞 טלפון:{' '}
          <a href="tel:04-6620222" className="underline">
            04-6620222
          </a>
        </li>
      </ul>

      <p className="mt-6 text-sm">עודכן לאחרונה: מאי 2025</p>
    </div>
  );
}

export default AccessibilityPage;
