

export const GET = async ({ params }) => {
  const postId = params.postId

  const res = await fetch(`https://dummyjson.com/posts/${postId}`)
  const data = await res.json()

  if (res.status !== 200) {
    return new Response(JSON.stringify({message: 'Post not found'}), { status: 404 } )
  }

  return new Response(JSON.stringify(data), { status: 200 })
}