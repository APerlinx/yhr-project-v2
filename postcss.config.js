import postcssNesting from 'postcss-nesting'

const postcssConfig = {
  plugins: {
    'postcss-nesting': postcssNesting,
    tailwindcss: {},
    autoprefixer: {},
  },
}

export default postcssConfig
