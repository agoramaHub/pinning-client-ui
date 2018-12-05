const choo = require('choo')
const html = require('choo/html')

const login = require('./states/login')
const dash = require('./states/dash')

const app = choo()

app.use(function(state, emitter) {
  state.login =
  state.hostname =

  emitter.on('key', function(data) {
    state.login = data
    console.log("Authenticated! Bearer " + state.login)
    emitter.emit('pushState', '/dash')
  })

  emitter.on('hostname', function(data) {
    state.hostname = data
    console.log(state.hostname)
    emitter.emit('render')
  })
})

app.route('/', login)
app.route('/dash', dash)


app.mount('body')
