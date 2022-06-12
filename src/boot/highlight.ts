import { boot } from 'quasar/wrappers'

// Highlight js
import 'highlight.js/styles/tokyo-night-dark.css'
import hljs from 'highlight.js/lib/core'

import hljsVuePlugin from '@highlightjs/vue-plugin'

import javascript from 'highlight.js/lib/languages/javascript'
hljs.registerLanguage('javascript', javascript)
import scss from 'highlight.js/lib/languages/scss'
hljs.registerLanguage('scss', scss)
import xml from 'highlight.js/lib/languages/xml'
hljs.registerLanguage('xml', xml)

export default boot(({ app }) => {
	app.use(hljsVuePlugin)
})
