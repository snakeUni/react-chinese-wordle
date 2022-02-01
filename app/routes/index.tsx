import { useLoaderData } from 'remix'
import LineBlock from '~/components/line-block'
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
  const answer = posts[0]
  const maybeAnswer = posts[1]

  return (
    <div>
      <div className="flex gap-2 flex-col items-center p-2">
        <LineBlock
          answer={answer.name}
          maybeAnswer={maybeAnswer.name}
        ></LineBlock>
      </div>
    </div>
  )
}
