// global styles shared across the entire site
// import 'styles/global.css'

// react-notion-x 的css样式文件
import 'react-notion-x/src/styles.css'

// used for rendering equations (optional)
// import 'katex/dist/katex.min.css'


// this might be better for dark mode
// import 'prismjs/themes/prism-okaidia.css'

// global style overrides for notion
// import 'styles/notion.css'

// 代码块高亮样式
import 'prismjs/themes/prism-tomorrow.min.css'
// TODO 可以自己调整配色
// import 'styles/prism.css'

import * as React from 'react'
// import * as Fathom from 'fathom-client'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
// import posthog from 'posthog-js'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
