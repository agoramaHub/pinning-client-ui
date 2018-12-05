const html = require('choo/html')

module.exports = navSide

function navSide(state) {
  return html `
      <nav class="col-md-2 d-none d-md-block bg-light sidebar">
        <div class="sidebar-sticky">
          <ul class="nav flex-column">
            <li class="nav-item">
              <a class="nav-link active" href="/dash">
                <span data-feather="home"></span>
                Dashboard <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/dash/account">
                <span data-feather="file"></span>
                Account
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/dash/pin">
                <span data-feather="shopping-cart"></span>
                Pin Dat
              </a>
            </li>
          </ul>
        </div>
      </nav>
  `
}
