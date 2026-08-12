import connectDB from '../db/connect'
import BlogPost from '../models/BlogPost'

function serialize(post) {
  return {
    id: post._id.toString(),
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    readTime: post.readTime,
    category: post.category,
    image: post.image,
    content: post.content,
    takeaways: post.takeaways,
    createdAt: post.createdAt,
    updatedAt: post.updatedAt,
  }
}

export async function getAllBlogPosts() {
  await connectDB()
  const posts = await BlogPost.find().sort({ createdAt: -1 }).lean()
  return posts.map(serialize)
}

export async function getBlogPostBySlug(slug) {
  await connectDB()
  const post = await BlogPost.findOne({ slug }).lean()
  return post ? serialize(post) : null
}
