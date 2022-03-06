import { Link, Outlet } from 'react-router-dom'
import AuthStatus from '../AuthStatus'

import '../layout/layout.scss'

function Layout() {
  return (
    <div className="c-container">
      <header className="c-container__header">
        <navbar className="c-container__header--navbar">
          <h1 className="c-container__title">PetLovers</h1>
          <ul className="c-container__ul">
            <li>
              <Link to="/" className="c-container__ul--link">
                Pets
              </Link>
            </li>
            <li>
              <Link to="/create" className="c-container__ul--link">
                Cadastro de pet
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
