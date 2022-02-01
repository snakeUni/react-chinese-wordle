import { useLoaderData } from 'remix'
import { useRef, useState } from 'react'
import LineBlock from '~/components/line-block'
import Header from '~/components/header'
import Input from '~/components/input'
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
  const [tries, setTries] = useState<Post[]>([])
  const [value, setValue] = useState('')
  const inputRef = useRef<any>()

  const handleSure = () => {
    setTries(tries.concat({ name: value }))
    setValue('')
    inputRef.current?.focus()
  }

  return (
    <div>
      <Header />
      <div className="flex p-4 justify-center">
        <div className="flex gap-2 flex-col">
          {tries.map((t, index) => {
            return (
              <LineBlock
                answer={answer.name}
                maybeAnswer={t.name}
                key={index}
              />
            )
          })}
          <LineBlock answer={answer.name} maybeAnswer={value} />
          <Input
            placeholder="请输入四字成语"
            value={value}
            onChange={setValue}
            ref={inputRef}
          />
          <div className="flex justify-center">
            <button
              className="btn"
              disabled={value ? false : true}
              onClick={handleSure}
            >
              确定
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
