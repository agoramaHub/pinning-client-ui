const html = require('choo/html')
const navTop = require('./navTop.js')
const navSide = require('./navSide.js')

// // Components inclusion //
// var intro = require('./components/intro')
// var account = require('./components/account')
// var pinDat = require('./components/pinDat')

module.exports = function(state, emit) {

  var xhr = new XMLHttpRequest()
  var authSession = state.login
  var domain = state.hostname
  var service = state.serverName
  var datArchive = state.accOverview.items

  return html `
    <body>

    ${navTop(state, emit)}

    <div class="container-fluid">
      <div class="row">

        ${navSide(state, emit)}

<!-- Main -->
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
          <!--intro-->
          <hr>
          <div>
            <h2>${service} Dashboard Overview</h2>
            <div class="table-responsive">
              <p>
              This is a prototype UI interface that uses the PSA API guidelines to connect with the
              Homebase Dat pinning server.
              </p>
            </div>
          </div>
          <br>
          <!--acc-->
          <div>
            <h2>Account Information</h2>
            <div class="table-responsive">
              <p>
                Number of Pinned dat Archives: ${datArchive.length}
              </p>
              <pre>
                ${JSON.stringify(datArchive, null, 2)}
              </pre>
            </div>
          </div>
          <br>
          <!--pin-->
          <div>
            <h2>Pin New Dat Archive</h2>
            <form onsubmit=${handleEvent}>
              <div class="form-group">
                <input type="text" name="dathash" class="form-control mb-1" id="url" placeholder="Dat Public Hash">

                <input type="text" name="daturl" class="form-control mb-1" id="domain" placeholder="Dat Domain Placeholder">
              </div>
              <button class="btn btn-primary btn-block" type="submit">Pin Dat</button>
            </form>
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
// handleEvent functionality //
  function handleEvent(event) {
    event.preventDefault()

    // Testing....
    var datHash = event.target.dathash.value
    var maskURL = event.target.daturl.value
    console.log(datHash)
    console.log(maskURL)

    // Create correct API end points for req
    var pinDat = domain + '/v1/dats/add'
    var updateOverview = domain = 'v1/dats'

    // Create body text for AJAX POST request
    var bodyText = JSON.stringify({
      url: event.target.dathash.value,
      domain: event.target.daturl.value
    }, null, 2)

    console.log(bodyText)

    makeRequest(pinDat, bodyText, authSession)

  }

// request to pin Dat archive to server //
  function makeRequest(url, form, auth) {
    xhr.onreadystatechange = responseMethod
    xhr.open('POST', url)
    xhr.setRequestHeader("Authorization", auth)
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
    console.log("Dat archive has been successfully pinned.")
    // emit('pinned')
  }

// Update /account page archive info //
  function updateRequest(url, auth) {
    xhr.onreadystatechange = updateResponse
    xhr.open('GET', url)
    xhr.setRequestHeader("Authorization", auth)
    xhr.send()
  }

  function updateResponse() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        updateSuccess(xhr.responseText)
      } else {
        resError()
      }
  }

  function updateSuccess(responseText) {
    var response = JSON.parse(responseText)

    emit('update', response)
  }

// Generic error function //
  function resError() {
    console.log("Something has appeared to have gone wrong.")
  }
}
