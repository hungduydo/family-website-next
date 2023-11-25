import mvdbGet from 'app/api/utils/fetch'
import { MovieDetail } from 'app/types'

export async function fecthPopular(page?: string) {
  const data = await mvdbGet('https://api.themoviedb.org/3/movie/popular', page)
  return data
}

export async function fecthUpcoming(page?: string) {
  const data = await mvdbGet('https://api.themoviedb.org/3/movie/upcoming', page)
  return data
}

export async function fecthPlayNow(page?: string) {
  const data = await mvdbGet('https://api.themoviedb.org/3/movie/now_playing', page)
  return data
}

export async function fecthDetail(id) {
  const data = await mvdbGet('https://api.themoviedb.org/3/movie/' + id)
  return data as MovieDetail
}

export async function fecthKeyword(page, keyword) {
  const data = await mvdbGet('https://api.themoviedb.org/3/search/movie', page, {
    query: keyword,
  })
  return data
}
