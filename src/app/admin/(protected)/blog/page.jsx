import Link from 'next/link'
import { getAllBlogPosts } from '../../../../lib/data/blogRepo'
import DeleteButton from '../../../../components/admin/DeleteButton'

export const dynamic = 'force-dynamic'

export default async function AdminBlogListPage() {
  const posts = await getAllBlogPosts()

  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-ink">Blog posts</h1>
          <p className="mt-2 text-sm text-muted">Create, edit, and remove articles shown on the public blog.</p>
        </div>
        <Link href="/admin/blog/new" className="rounded-full bg-maroon px-4 py-2 text-sm font-semibold text-white hover:bg-saffron">
          + New post
        </Link>
      </div>

      <div className="mt-6 overflow-hidden rounded-3xl border border-gold/20 bg-white shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="bg-cream/60 text-xs uppercase tracking-[0.15em] text-muted">
            <tr>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Slug</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id} className="border-t border-gold/10">
                <td className="px-4 py-3 font-medium text-ink">{post.title}</td>
                <td className="px-4 py-3 text-muted">{post.category}</td>
                <td className="px-4 py-3 font-mono text-xs text-muted">{post.slug}</td>
                <td className="px-4 py-3 text-right">
                  <div className="flex justify-end gap-4">
                    <Link href={`/admin/blog/${post.id}`} className="text-xs font-semibold text-maroon hover:text-saffron">
                      Edit
                    </Link>
                    <DeleteButton endpoint={`/api/admin/blog/${post.id}`} confirmMessage={`Delete "${post.title}"?`} />
                  </div>
                </td>
              </tr>
            ))}
            {posts.length === 0 ? (
              <tr>
                <td colSpan={4} className="px-4 py-8 text-center text-muted">
                  No blog posts yet.
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    </div>
  )
}
