import { useEffect, useState } from "react"
import { getMeProfile } from "../services/post.api"

export const useProfile = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchProfile = async () => {
    try {
      setLoading(true)
      setError(null)
      const res = await getMeProfile()
      setData(res)
    } catch (err) {
      console.log(err)
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProfile()
  }, [])

  return { data, loading, error, refetch: fetchProfile }
}