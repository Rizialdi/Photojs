const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })

const routes = require('./routes')
const handle = routes.getRequestHandler(app)

app.prepare()
.then(() => {
  const server = express()
  server.use(bodyParser.urlencoded({ extended: false}));
  server.use(bodyParser.json());

  server.get('/', (req, res) => {
    const actualPage = '/Accueil'
    app.render(req, res, actualPage)
  })

  server.post('/send', (req, res) => {
    const output = `
      <p>Vous avez une nouvelle demande de contact</p>
      <h3>Details du contact</h3>
      <li>Nom: ${req.body.name} ${req.body.surname} </li>
      <li>Email: ${req.body.message} </li>
    `

    console.log(output);
  })

  server.get('*', (req, res) => {
    return handle(req, res)
    })
  server.listen(process.env.PORT || 9000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:' + (process.env.PORT || 9000))
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})