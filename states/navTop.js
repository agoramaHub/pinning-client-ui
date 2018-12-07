const html = require('choo/html')

module.exports = function(state, emit) {

  var xhr = new XMLHttpRequest()
  var authSession = state.login
  var domain = state.hostname + '/v1/accounts/logout'
  emit('logout')

  return html `
      <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
      <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">PSA Pinning Service</a>
      <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search">
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <a class="nav-link" onclick="${handleEvent}" href="#">Sign out</a>
        </li>
      </ul>e
    </nav>
  `

  function handleEvent(event) {
    makeRequest(domain, authSession)
  }

  function makeRequest(url, key) {
    xhr.onreadystatechange = responseMethod
    xhr.open('POST', url)
    xhr.setRequestHeader("Authorization", key)
    xhr.send()
  }

  function responseMethod() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        resSuccess()
      } else {
        resError()
      }
  }

  function resSuccess() {
    console.log("Logout seccussfully")

  }

  function resError() {
    console.log("Something has appeared to have gone wrong.")
  }
}
