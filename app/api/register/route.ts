import clientPromise from '@/lib/mongodb'
import { hashSync } from 'bcrypt'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const client = await clientPromise
  const users = client.db(process.env.DB_NAME).collection('users')
  try {
    const { name, email, password } = (await req.json()) as {
      name: string
      email: string
      password: string
    }
    const oldUser = await users.findOne({ email })
    if (oldUser) {
      throw new Error('Email already use')
    }
    const hashed_password = hashSync(password, 10)

    const userI = await users.insertOne({
      email: email.toLowerCase(),
      name,
      password: hashed_password,
      role: 'user',
    })
    const user = await users.findOne({
      email: email,
    })
    if (user) {
      return NextResponse.json({
        user: {
          name: user.name,
          email: user.email,
        },
      })
    }
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({
        status: 'error',
        message: error.message,
      }),
      { status: 500 }
    )
  }
}
