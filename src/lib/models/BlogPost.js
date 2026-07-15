import mongoose from 'mongoose'

const blogPostSchema = new mongoose.Schema(
  {
    slug: {
      type: String,
      required: [true, 'Slug is required'],
      unique: true,
      trim: true,
      lowercase: true,
    },
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
    },
    excerpt: {
      type: String,
      required: [true, 'Excerpt is required'],
      trim: true,
    },
    readTime: {
      type: String,
      default: '5 min read',
      trim: true,
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      trim: true,
    },
    image: {
      type: String,
      required: [true, 'Image is required'],
      trim: true,
    },
    content: {
      type: [String],
      default: [],
    },
    takeaways: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
)

const BlogPost = mongoose.models.BlogPost || mongoose.model('BlogPost', blogPostSchema)

export default BlogPost
