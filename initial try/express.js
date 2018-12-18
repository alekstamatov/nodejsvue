const Vue = require('vue')
const server = require('express')()
var path    = require("path");
const renderer = require('vue-server-renderer').createRenderer({
	// definisanje template a koji ce se renderovati
  template: require('fs').readFileSync(path.join(__dirname+'/index.html'), 'utf-8')
})

server.get('*', (req, res) => {
	// definisanje podataka koji ce se renderovati u template u
	const context = {
  title: 'hello aaa',
  meta: `
    <meta ...>
    <meta ...>
  `
}
  const app = new Vue({
    data: {
      url: req.url
    },
    template: `<div>The visited URL is: {{ url }}</div>`
  })

  renderer.renderToString(app,context, (err, html) => {
    console.log(html) // will be the full page with app content injected.
})
})
  


server.listen(8080)