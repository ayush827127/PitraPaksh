import { NextResponse } from 'next/server'
import { requireAdminApi } from '../../../../../lib/adminGuard'
import connectDB from '../../../../../lib/db/connect'
import BlogPost from '../../../../../lib/models/BlogPost'

function parseListField(value) {
  if (Array.isArray(value)) return value.filter(Boolean)
  if (typeof value !== 'string') return []
  return value
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
}

export async function PUT(request, { params }) {
  const unauthorized = await requireAdminApi()
  if (unauthorized) return unauthorized

  const { id } = await params
  const body = await request.json()

  try {
    await connectDB()
    const post = await BlogPost.findByIdAndUpdate(
      id,
      {
        slug: body.slug?.trim().toLowerCase(),
        title: body.title?.trim(),
        excerpt: body.excerpt?.trim(),
        readTime: body.readTime?.trim() || '5 min read',
        category: body.category?.trim(),
        image: body.image?.trim(),
        content: parseListField(body.content),
        takeaways: parseListField(body.takeaways),
      },
      { new: true, runValidators: true }
    )

    if (!post) {
      return NextResponse.json({ success: false, message: 'Post not found' }, { status: 404 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    if (error.code === 11000) {
      return NextResponse.json({ success: false, message: 'A post with this slug already exists' }, { status: 409 })
    }
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((e) => e.message)
      return NextResponse.json({ success: false, message: messages[0] }, { status: 400 })
    }
    console.error('[admin/blog PUT]', error)
    return NextResponse.json({ success: false, message: 'Unable to update post' }, { status: 500 })
  }
}

export async function DELETE(_request, { params }) {
  const unauthorized = await requireAdminApi()
  if (unauthorized) return unauthorized

  const { id } = await params

  await connectDB()
  await BlogPost.findByIdAndDelete(id)

  return NextResponse.json({ success: true })
}
