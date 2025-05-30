import { Helmet } from 'react-helmet-async'
import ImageStackSlider from '../../ui/ImageStackSlider'

function HomePage() {
  return (
    <>
      {/* For SEO */}
      <Helmet>
        <title>
          יאיר הרמן אדריכלים | תכנון בתים פרטיים ואדריכלות מודרנית בישראל
        </title>
        <meta
          name="description"
          content="יאיר הרמן – משרד אדריכלות המתמחה בתכנון וילות, בתים פרטיים ומבני ציבור."
        />
        <link rel="canonical" href="https://hermanarchitects.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="he_IL" />
        <meta property="og:url" content="https://hermanarchitects.com/" />
        <meta
          property="og:title"
          content="יאיר הרמן אדריכל | תכנון בתים פרטיים ואדריכלות מודרנית בישראל"
        />
        <meta
          property="og:description"
          content="משרד אדריכלות – תכנון וילות, בתים פרטיים ומבני ציבור, עם דגש על חדשנות וקיימות."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dayojijed/image/upload/v1746526152/r1p_frontview/sdn47dv7ua5colzyw0yy.jpg"
        />
      </Helmet>

      <div
        className="flex min-h-screen w-screen flex-col justify-start border-b-2 border-[#948979] bg-[#171717] pt-40 sm:px-32 sm:pb-10"
        dir="rtl"
      >
        <ImageStackSlider />
      </div>
    </>
  )
}

export default HomePage
