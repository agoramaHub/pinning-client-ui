const html = require('choo/html')

module.exports = function(state, emit) {

  var xhr = new XMLHttpRequest()
  var domain = state.hostname

  return html `
<!-- Main -->
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
<!-- /Main -->
  `

  function handleEvent(event) {
    event.preventDefault()
    var datHash = event.target.dathash.value
    console.log(datHash)
  }

// request to pin Dat archive to server //
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
    console.log("Dat archive has been successfully pinned.")

    emit('pinned')
  }

// Update /account page archive info //
  function updateRequest(url, form) {
    xhr.onreadystatechange = responseMethod
    xhr.open('POST', url)
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
    xhr.send(form)
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
