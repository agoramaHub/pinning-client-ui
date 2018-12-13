const html = require('choo/html')

module.exports = function(state) {

  var datArchive = state.accOverview.items
  console.log(datArchive.length)

  return html `
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
  `
}
