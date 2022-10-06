

export const load = ({ params, fetch }) => {

  const fetchPost = async (id) => {
    const res = await fetch(`/api/posts/${id}`)
    const data = await res.json()
    return data
  }

  return {
    post: fetchPost(params.postId)
  }

}