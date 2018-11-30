const choo = require('choo')
const html = require('choo/html')

const login = require('./templates/login.js')
const dash = require('./templates/dash.js')
const account = require('./templates/account.js')
const pinDat = require('./templates/pinDat.js')


const app = choo()

// app.use(function(state, emitter) {
//   state.dash =
// })

app.route('/', login)
app.route('/dash', dash)
app.route('/dash/account', account)
app.route('/dash/pin', pinDat)

app.mount('body')
