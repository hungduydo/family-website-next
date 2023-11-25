import mvdbGet from 'app/api/utils/fetch'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const page = searchParams.get('page') || '1'
  const keyword = searchParams.get('keyword')
  const data = await mvdbGet('https://api.themoviedb.org/3/search/movie', page, { query: keyword })

  return Response.json(data)
}
