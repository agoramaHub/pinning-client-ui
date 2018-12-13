const html = require('choo/html')

module.exports = function(state, emit) {

  var service = state.serverName
  console.log(service)

  return html `
        <div>
          <h2>${service} Dashboard Overview</h2>
          <div class="table-responsive">
            <p>Test text to see what happens when I do what I just did.</p>
          </div>
        </div>
  `
}
