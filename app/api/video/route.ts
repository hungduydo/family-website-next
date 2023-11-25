import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const page = searchParams.get('page') || '1'
  const query = new URLSearchParams({
    language: 'en-US',
    page: page,
    api_key: '5c3dc53d3a437e3a8f5b283602618336',
  })
  const res = await fetch('https://api.themoviedb.org/3/movie/popular?' + query, {
    headers: {
      accept: 'application/json',
    },
  })
  const data = await res.json()

  return Response.json({ data })
}
