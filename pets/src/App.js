import { Routes, Route } from 'react-router-dom'

import Pets from './routes/pets/Pets'
import Login from './routes/Login'
import Petform from './routes/petForm/Petform'

import Layout from './components/layout/Layout'

import { AuthProvider, RequireAuth } from './context/auth-context'

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Pets />} />
          <Route
            path="/create"
            element={
              <RequireAuth>
                <Petform />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </AuthProvider>
  )
}

export default App
