const html = require('choo/html')
const navTop = require('./navTop.js')
const navSide = require('./navSide.js')


module.exports = function(state, emit) {

  return html `
    <body>

    ${navTop(state, emit)}

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
}
