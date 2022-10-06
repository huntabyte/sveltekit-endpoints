export const GET = async ({ url }) => {

  const limit = Number(url.searchParams.get('limit') ?? '10')
  const skip = Number(url.searchParams.get('skip') ?? '0')

  const res = await fetch(`https://dummyjson.com/posts?limit=${limit}&skip=${skip}`)
  const data = await res.json()
  
  return new Response(JSON.stringify(data.posts), { status: 200 })

}

export const POST = async ({ request }) => {
  const body = await request.json()
  
  if (body.title && body.content) {
    posts.push({title: body.title, content: body.content})
  }
  
  return new Response(JSON.stringify({success: true}), {status: 200})


}