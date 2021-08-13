
function tplReplace(template, replaceObject) {
  return template.replace(/\{\{(.*?)\}\}/g, (node, key) => {
    return replaceObject[key]
  })
}

// return tplReplace(`${source}`, options)
module.exports = {
  tplReplace
}