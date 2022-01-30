import { useLoaderData } from 'remix'
import { getIdiomsContent } from '../utils.server'

export type Post = {
  name: string
}

export const loader = async () => {
  const jsonText = await getIdiomsContent()
  return JSON.parse(jsonText)
}

export default function Index() {
  const posts = useLoaderData<Post[]>()

  return (
    <div>
      <h1>Posts</h1>
      <div>
        {posts.map((post, index) => (
          <div key={index}>{post.name}</div>
        ))}
      </div>
    </div>
  )
}
