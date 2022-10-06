

export const load = async ({ fetch }) => {

  const fetchPosts = async () => {
    const res = await fetch('/api/posts')
    const data = await res.json()
    return data
  }

  return {
    posts: fetchPosts()
  }
}