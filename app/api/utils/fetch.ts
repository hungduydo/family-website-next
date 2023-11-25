export default async function mvdbGet(url: string, page: string = '1', otherQuery: any = {}) {
  const query = new URLSearchParams({
    language: 'en-US',
    include_adult: 'false',
    page: page,
    sort_by: 'popularity.desc',
    api_key: process.env.MVDB_API_KEY || '',
    ...otherQuery,
  })
  const res = await fetch(`${url}?${query}`, {
    headers: {
      accept: 'application/json',
    },
    next: { revalidate: 3600 },
  })
  return await res.json()
}
