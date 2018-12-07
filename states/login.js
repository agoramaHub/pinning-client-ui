const html = require('choo/html')

module.exports = function(state, emit) {

  var xhr = new XMLHttpRequest()

  return html `
    <body class="text-center">
      <form class="form-signin" onsubmit=${handleEvent}>
        <img class="mb-4" src="../assets/icon.png" alt="" width="72" height="72">
        <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>

        <label for="PSAdomain" class="sr-only">Domain</label>
        <input name="domain" value="http://localhost:8080" id="PSAdomain" class="form-control" placeholder="PSA Domain" required autofocus>

        <label for="userName" class="sr-only">User Name</label>
        <input name="username" value="oliv" id="userName" class="form-control" placeholder="User Name" required>

        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" name="password" value="toor" id="inputPassword" class="form-control" placeholder="Password" required>

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
      var psa = event.target.domain.value + '/.well-known/psa'
      var login = JSON.stringify({
          username: event.target.username.value,
          password: event.target.password.value
        }, null, 2)

      makeRequest(domain, login)
   }

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

   function resError() {
     console.log("Something has appeared to have gone wrong.")
   }

}
