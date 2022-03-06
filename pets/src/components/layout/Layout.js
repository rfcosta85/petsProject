import { Link, Outlet } from 'react-router-dom'
import AuthStatus from '../AuthStatus'

function Layout() {
  return (
    <div className="c-container">
      <header className="c-container__header">
        <navbar className="c-container__header--navbar">
          <ul className="c-container__ul">
            <li>
              <Link to="/" className="c-container__ul--link">
                Pets
              </Link>
            </li>
            <li>
              <Link to="/create" className="c-container__ul--link">
                Create Pet
              </Link>
            </li>
          </ul>
        </navbar>
        <AuthStatus />
      </header>

      <Outlet />
    </div>
  )
}

export default Layout
