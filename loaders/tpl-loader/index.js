const { tplReplace } = require('../utils')
const { getOptions } = require('loader-utils')

function tplLoader(source) {
  source = source.replace(/\s+/g, '')
  console.log(source)
  const { log } = getOptions(this)

  const _log = log ? `console.log('compiled the file which is from ${this.resourcePath}')` : ''
  
  return `export default (options) => {
    ${tplReplace.toString()}
    ${_log.toString()}
    console.log(options)
    return tplReplace('${source}',options);
    }
  `
}

module.exports = tplLoader

