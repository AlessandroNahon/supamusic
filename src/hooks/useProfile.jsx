import { useState, useEffect } from 'react'
import { useAppContext } from "../context/appContext";

export default function useProfile({session}) {
  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState(null)
  const [website, setWebsite] = useState(null)
  const [avatar_url, setAvatarUrl] = useState(null)

  const { supabase } = useAppContext()

  useEffect(() => {
  async function getProfile() {
    setLoading(true)
    const { user } = session

    let { data, error } = await supabase
      .from('profiles')
      .select(`username, website, avatar_url`)
      .eq('id', user.id)
      .single()

    if (error) {
      console.warn(error)
    } else if (data) {
      setUsername(data.username)
      setWebsite(data.website)
      setAvatarUrl(data.avatar_url)
    }

    setLoading(false)
  }

    getProfile()
  }, [session, supabase])

  return {loading, username, website, avatar_url, setLoading, setUsername, setWebsite, setAvatarUrl}
}