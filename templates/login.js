const html = require('choo/html')
// const fetch = ('node-fetch')

module.exports = function() {
  return html `
    <body class="text-center">
      <form class="form-signin" onsubmit=${handleEvent}>
        <img class="mb-4" src="../assets/icon.png" alt="" width="72" height="72">
        <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label for="PSAdomain" class="sr-only">Domain</label>
        <input name="domain" value="http://192.168.1.163:8080" id="PSAdomain" class="form-control" placeholder="PSA Domain" required autofocus>

        <label for="userName" class="sr-only">User Name</label>
        <input name="username" value="terra" id="userName" class="form-control" placeholder="User Name" required>

        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" name="password" value="rhizome" id="inputPassword" class="form-control" placeholder="Password" required>

        <!--<a href="/dash">--><button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button><!--</a>-->
        <p class="mt-5 mb-3 text-muted">Copyright Agorama 2018</p>
      </form>
    </body>
  `

  function handleEvent(event) {
      event.preventDefault()
      var xhr = new XMLHttpRequest()
      var domain = event.target.domain.value + '/v1/accounts/login'
      var login = JSON.stringify({
        "username": event.target.username.value,
        "password": event.target.password.value
      })
      // xhr.open("POST", domain, true)
      // xhr.setRequestHeader("Content-Type", "application/json")

      console.log(login)
      console.log(JSON.parse(login))
      // var blob = new Blob([JSON.stringify({
      //   username: event.target.username.value,
      //   password: event.target.password.value
      // }), {type: 'application/json'}])

      // console.log(domain)
      // console.log(login)
      // console.log(login.username)
      // console.log(login.password)
      // console.log(blob.login)

      // const myRequest = new Request(domain, {
      //   method: 'POST',
      //   mode: 'no-cors',
      //   body: '{"username": "terra"}',
      //   headers: {'Content-Type': 'application/json'}
      // })

      // fetch(domain, {
      //   method: 'POST',
      //   body: JSON.stringify({
      //     'username': event.target.username.value,
      //     'password': event.target.password.value
      //    }),
      //   headers: {'Content-Type': 'application/json'},
      //   mode: 'no-cors'
      // }).then(function(res, err) {
      //   if (!res) {
      //     console.error(err)
      //   }
      //   return res.json
      //   console.log(res)
      // })

      // console.log(myRequest.method)
      // console.log(myRequest.mode)
      // console.log(myRequest.body)
      // console.log(myRequest.headers)

 }

}
