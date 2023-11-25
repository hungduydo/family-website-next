import mvdbGet from 'app/api/utils/fetch'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const page = searchParams.get('page') || '1'
  const data = await mvdbGet('https://api.themoviedb.org/3/movie/upcoming', page)

  return Response.json(data)
}
