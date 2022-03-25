Ocsxxi's Personal Blog，Build With Vuepress.

Blog system follows with Vuepress is under MIT license.
Blog content article are under CC BY-NC-SA 4.0.

1. `yarn` to download all the dependencies

2. Replace the configure in `node_modules\vuepress-plugin-mathjax\package.json` of `mathjax3`
```
"mathjax-full": "^3.1.4",
```

3. Replace the content of the file `node_modules\vuepress-plugin-mathjax\src\tex2html.js`
```
const url = require('url')
const path = require('path')
const LruCache = require('lru-cache')


const { mathjax } = require('mathjax-full/js/mathjax.js');
const { TeX } = require('mathjax-full/js/input/tex.js');
const { CHTML } = require('mathjax-full/js/output/chtml.js');
const { SVG } = require('mathjax-full/js/output/svg.js');
const { liteAdaptor } = require('mathjax-full/js/adaptors/liteAdaptor.js');
const { RegisterHTMLHandler } = require('mathjax-full/js/handlers/html.js');
const { AssistiveMmlHandler } = require('mathjax-full/js/a11y/assistive-mml.js');

const { AllPackages } = require('mathjax-full/js/input/tex/AllPackages.js');


const escapedCharacters = '^$()[]{}*.?+\\|'

function toEscapedString(source) {
  const chars = source.split('').map(char => {
    return escapedCharacters.includes(char) ? '\\' + char : char
  })
  const lastChar = chars[chars.length - 1]
  if (lastChar.match(/\w/)) chars.push('\\b')
  return chars.join('')
}

function ensureArray(option) {
  if (!option) {
    return []
  } else if (Array.isArray(option)) {
    return option
  } else {
    return [option]
  }
}

module.exports = (options, tempPath) => {
  let {
    em = 16,
    ex = 8,
    width = 80 * 16,
    packages = AllPackages,
    target = '',
  } = options

  let cache
  if (options.cache !== false) {
    cache = new LruCache({ ...options.cache })
  }

  if (typeof packages === 'string') {
    packages = packages.split(/\s*,\s*/)
  }

  const { macros, presets } = options

  for (const key in macros) {
    if (typeof macros[key] !== 'string') {
      delete macros[key]
    }
  }
  const macroRegex = new RegExp(Object.keys(macros).map(toEscapedString).join('|'), 'g')

  // set up mathjax and conversion function

  const adaptor = liteAdaptor();
  const handler = RegisterHTMLHandler(adaptor);
  //AssistiveMmlHandler(handler);
  const tex = new TeX({ packages });
  //const chtml = new CHTML({ fontURL: 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/output/chtml/fonts/woff-v2' });
  const svg = new SVG({ fontCache: 'local' });
  const html = mathjax.document('', { InputJax: tex, OutputJax: svg });

  let style = adaptor.textContent(svg.styleSheet(html));

  return {
    style,
    render(source, display, localPresets) {
      source = presets.concat(ensureArray(localPresets)).join('') + source
      source = source.replace(macroRegex, matched => macros[matched] + ' ')

      if (cache) {
        const output = cache.get(source)
        if (typeof output === 'string') return output
      }

      const node = html.convert(source, {
        display: display,
        em: em,
        ex: ex,
        containerWidth: width
      });
      const output = adaptor.outerHTML(node);
      if (cache) cache.set(source, output)

      return output
    },
  }
}
```

4. Run in command line with `yarn dev` or compiled with `yarn build`. Enjoy~