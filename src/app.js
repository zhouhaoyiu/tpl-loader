import tpl from './info.tpl'

const oApp = document.querySelector('#app')

const info = ({
  name: '周浩宇',
  age: 34,
  career: 'web',
  hobby: '前端'
})

oApp.innerHTML = tpl(info)