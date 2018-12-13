/*
* Currently this application is login and out correctly, however I have been running into
* problems with trying to get a simple username out of the API without crashing the whole thing.....
* What I am now thinking is that I will have to nest an additional request with the login, meaning
* once the user has logged in the AJAX request will make another call for the account username.
* The problem is that this will require the whole first request to be re-written....
*/

const html = require('choo/html')

module.exports = function(state, emit) {

  var xhr = new XMLHttpRequest()

  return html `
    <body class="text-center">
      <form class="form-signin" onsubmit=${handleEvent}>
        <img class="mb-4" src="../assets/icon.png" alt="" width="72" height="72">
        <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>

        <label for="PSAdomain" class="sr-only">Domain</label>
        <input name="domain" id="PSAdomain" class="form-control" placeholder="PSA Domain" required autofocus>

        <label for="userName" class="sr-only">User Name</label>
        <input name="username" id="userName" class="form-control" placeholder="User Name" required>

        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" name="password" id="inputPassword" class="form-control" placeholder="Password" required>

        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        <p class="mt-5 mb-3 text-muted">Copyright Agorama 2018</p>
      </form>
    </body>
  `

   function handleEvent(event) {
      event.preventDefault()
      var baseDomain = event.target.domain.value
      emit('hostname', baseDomain)
      var account = event.target.domain.value + '/v1/accounts/account'
      var domain = event.target.domain.value + '/v1/accounts/login'
      var datOverview = event.target.domain.value + '/v1/dats'
      var login = JSON.stringify({
          username: event.target.username.value,
          password: event.target.password.value
        }, null, 2)

      makeRequest(domain, login)
      setTimeout(function() {
        if (state.auth) {
          var authSession = state.login
          accountRequest(account, authSession)
        }
        setTimeout(function() {
            datRequest(datOverview, authSession)
        }, 100)
      }, 100)
   }

// Login AJAX req/res functions
   function makeRequest(url, form) {
     xhr.onreadystatechange = responseMethod
     xhr.open('POST', url)
     xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
     xhr.send(form)
   }

   function responseMethod() {
     if (xhr.readyState === 4 && xhr.status === 200) {
         resSuccess(xhr.responseText)
       } else {
         resError()
       }
   }

   function resSuccess(responseText) {
     var response = JSON.parse(responseText)

     emit('key', response.sessionToken)
   }

// Account AJAX req/res functions
   function accountRequest(url, auth) {
     xhr.onreadystatechange = accountResponse
     xhr.open('GET', url)
     xhr.setRequestHeader("Authorization", auth)
     xhr.send()
   }

   function accountResponse() {
     if (xhr.readyState === 4 && xhr.status === 200) {
         accInfo(xhr.responseText)
       } else {
         resError()
       }
   }

   function accInfo(responseText) {
     var response = JSON.parse(responseText)

     emit('serverName', response.username)
   }

// Dats Overview AJAX response
  function datRequest(url, auth) {
    xhr.onreadystatechange = datResponse
    xhr.open('GET', url)
    xhr.setRequestHeader("Authorization", auth)
    xhr.send()
  }

  function datResponse() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        accOverview(xhr.responseText)
      } else {
        resError()
      }
  }

  function accOverview(responseText) {
    var response = JSON.parse(responseText)
    emit('accOverview', response)
  }

// Universal Error function
   function resError() {
     console.log("Something has appeared to have gone wrong.")
   }
}
