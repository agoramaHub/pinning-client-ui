const html = require('choo/html')

module.exports = navSide

function navSide(state, emit) {
  return html `
      <nav class="col-md-2 d-none d-md-block bg-light sidebar">
        <div class="sidebar-sticky">
          <ul class="nav flex-column">
            <li class="nav-item">
              <span class="nav-link">
                <button class="btn btn-link">
                  Dashboard
                </button>
              </span>
            </li>
            <li class="nav-item">
              <span class="nav-link">
                <button class="btn btn-link">
                  Account
                </button>
              </span>
            </li>
            <li class="nav-item">
              <span class="nav-link">
                <button class="btn btn-link">
                  Pin Dat
                </button>
              </span>
            </li>
          </ul>
        </div>
      </nav>
  `
}
