const html = require('choo/html')

const navTop = require('../components/navTop.js')
const navSide = require('../components/navSide.js')

module.exports = function(state) {
  return html `
    <body>

    ${navTop(state)}

    <div class="container-fluid">
      <div class="row">

        ${navSide(state)}

<!-- Main -->
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">

        <h2>Pin New Dat Archive</h2>
        <form>
          <div class="form-group">
            <input type="text" class="form-control mb-1" id="url" placeholder="Dat URL">

            <input type="text" class="form-control mb-1" id="url-name" placeholder="Dat Name">

            <input type="text" class="form-control mb-1" id="domain" placeholder="Domain">
          </div>
        </form>
        </main>
<!-- /Main -->

      </div>
    </div>

    <script src="./js/jquery-slim.min.js"></script>
    <script src="./js/jquery-3.3.1.slim.min.js"></script>
    <script src="./js/popper.min.js"></script>

    </body>
  `
}
