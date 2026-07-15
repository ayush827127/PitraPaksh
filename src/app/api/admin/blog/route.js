import { NextResponse } from 'next/server'
import { requireAdminApi } from '../../../../lib/adminGuard'
import connectDB from '../../../../lib/db/connect'
import BlogPost from '../../../../lib/models/BlogPost'

function parseListField(value) {
  if (Array.isArray(value)) return value.filter(Boolean)
  if (typeof value !== 'string') return []
  return value
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
}

export async function POST(request) {
  const unauthorized = await requireAdminApi()
  if (unauthorized) return unauthorized

  const body = await request.json()

  try {
    await connectDB()
    const post = await BlogPost.create({
      slug: body.slug?.trim().toLowerCase(),
      title: body.title?.trim(),
      excerpt: body.excerpt?.trim(),
      readTime: body.readTime?.trim() || '5 min read',
      category: body.category?.trim(),
      image: body.image?.trim(),
      content: parseListField(body.content),
      takeaways: parseListField(body.takeaways),
    })

    return NextResponse.json({ success: true, id: post._id.toString() }, { status: 201 })
  } catch (error) {
    if (error.code === 11000) {
      return NextResponse.json({ success: false, message: 'A post with this slug already exists' }, { status: 409 })
    }
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((e) => e.message)
      return NextResponse.json({ success: false, message: messages[0] }, { status: 400 })
    }
    console.error('[admin/blog POST]', error)
    return NextResponse.json({ success: false, message: 'Unable to create post' }, { status: 500 })
  }
}
