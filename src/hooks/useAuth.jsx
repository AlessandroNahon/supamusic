import { useState, useEffect } from 'react'

export default function useAuth({ auth }) {
  const [session, setSession] = useState(null)

  useEffect(() => {
    auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [auth])

  return { session }
}