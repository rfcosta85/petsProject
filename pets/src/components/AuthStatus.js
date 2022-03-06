import React from 'react'
import { useAuth } from '../context/auth-context'
import { useNavigate } from 'react-router-dom'

import '../components/authStatus.scss'

function AuthStatus() {
  const auth = useAuth()
  const navigate = useNavigate()

  if (!auth.user) {
    return <p>Você não está logado</p>
  }
  return (
    <p className="c-button__text">
      Bem vindo {auth.user.name}!
      <button
        onClick={() => {
          auth.logout(() => navigate('/'))
        }}
        className="c-button__title"
      >
        Sair
      </button>
    </p>
  )
}

export default AuthStatus
