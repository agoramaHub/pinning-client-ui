/*
* Current state of web app is semi functional. Currently in the process of completing login
* to first initial request to logout functionality. About 75% done.
*/
const choo = require('choo')
const html = require('choo/html')

const login = require('./states/login')
const main = require('./states/main')

const app = choo()
var xhr = new XMLHttpRequest()

app.use(function(state, emitter) {
  state.auth = false
  state.login =
  state.hostname =
  state.serverName =
  state.accOverview =
  state.views =

// Login and primary req and res information //
  emitter.on('hostname', function(data) {
    state.hostname = data

    emitter.on('key', function(data) {
      state.login = 'Bearer ' + data
      state.auth = true
      emitter.emit('render')

      emitter.on('serverName', function(data) {
        state.serverName = data

        emitter.on('accOverview', function(data) {
          state.accOverview = data

          emitter.emit('pushState', '/main')
        })
      })
    })
  })
// END //

  emitter.on('update', function(data) {
    state.accOverview = data
    emitter.emit('render')
  })

// Logout //
  emitter.on('logout', function() {
    state.login =
    state.hostname =
    state.serverName =
    emitter.emit('pushState', '/')
  })
// END //
})

app.route('/', login)
app.route('/main', main)

app.mount('body')

/*

*/
