const html = require('choo/html')

const navTop = require('./components/navTop.js')
const navSide = require('./components/navSide.js')


module.exports = function(state) {
  var xhr = new XMLHttpRequest()
  var authSession = "Bearer " + state.login
  var domain = state.hostname + '/v1/dats'
  console.log(domain)

  // xhr.open('GET', )

  return html `
    <body onload="${makeRequest(domain, authSession)}">

    ${navTop(state)}

    <div class="container-fluid">
      <div class="row">

        ${navSide(state)}

<!-- Main -->
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">

        <h2>Dashboard Overview</h2>
        <div class="table-responsive">
          <table class="table table-striped table-sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Header</th>
                <th>Header</th>
                <th>Header</th>
                <th>Header</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1,001</td>
                <td>Lorem</td>
                <td>ipsum</td>
                <td>dolor</td>
                <td>sit</td>
              </tr>
              <tr>
                <td>1,002</td>
                <td>amet</td>
                <td>consectetur</td>
                <td>adipiscing</td>
                <td>elit</td>
              </tr>

            </tbody>
          </table>
          </div>
        </main>
<!-- /Main -->

      </div>
    </div>

    <script src="./js/jquery-slim.min.js"></script>
    <script src="./js/jquery-3.3.1.slim.min.js"></script>
    <script src="./js/popper.min.js"></script>

    </body>
  `

  function makeRequest(url, key) {
    xhr.onreadystatechange = responseMethod
    xhr.open('GET', url)
    xhr.setRequestHeader("Authorization", key)
    xhr.send()
  }

  function responseMethod() {
    if (xhr.readyState === 4) {
      console.log(xhr.responseText)
      if (xhr.status === 200) {
        resSuccess(xhr.responseText)
      } else {
        resError()
      }
    }
  }

  function resSuccess(responseText) {
    var response = JSON.parse(responseText)
    var key = response.sessionToken
    console.log(response)
  }

  function resError() {
    console.log("Something has appeared to have gone wrong.")
  }
}
