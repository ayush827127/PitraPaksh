import BlogPostForm from '../../../../../components/admin/BlogPostForm'

export default function AdminNewBlogPostPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-ink">New blog post</h1>
      <p className="mt-2 text-sm text-muted">Add a new article to the public blog.</p>
      <div className="mt-6">
        <BlogPostForm />
      </div>
    </div>
  )
}
