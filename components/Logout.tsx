'use client'

import { signOut } from 'next-auth/react'
import { LogoutIcon } from './icons'

const Logout = () => {
  return (
    <button
      onClick={() =>
        signOut({
          redirect: true,
        })
      }
    >
      <LogoutIcon className="stroke-2" />
    </button>
  )
}

export default Logout
