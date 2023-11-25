import { getServerSession } from 'next-auth'
import { nextauthOptions } from '@/lib/nextauthOptions'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const session = await getServerSession(nextauthOptions)

  return NextResponse.json({
    authenticated: !!session,
    session,
  })
}
