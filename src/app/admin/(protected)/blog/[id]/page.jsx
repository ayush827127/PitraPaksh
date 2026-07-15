import { notFound } from 'next/navigation'
import connectDB from '../../../../../lib/db/connect'
import BlogPost from '../../../../../lib/models/BlogPost'
import BlogPostForm from '../../../../../components/admin/BlogPostForm'

export const dynamic = 'force-dynamic'

export default async function AdminEditBlogPostPage({ params }) {
  const { id } = await params

  await connectDB()
  const post = await BlogPost.findById(id).lean()

  if (!post) {
    notFound()
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold text-ink">Edit blog post</h1>
      <p className="mt-2 text-sm text-muted">Update "{post.title}".</p>
      <div className="mt-6">
        <BlogPostForm
          postId={post._id.toString()}
          initialData={{
            slug: post.slug,
            title: post.title,
            excerpt: post.excerpt,
            readTime: post.readTime,
            category: post.category,
            image: post.image,
            content: post.content,
            takeaways: post.takeaways,
          }}
        />
      </div>
    </div>
  )
}
