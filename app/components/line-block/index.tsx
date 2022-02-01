import * as React from 'react'
import Block from '../block'

interface LineBlockProps {
  /**
   * 答案
   */
  answer?: string
  /**
   *猜测的答案
   */
  maybeAnswer?: string
}

export default function LineBlock({
  answer = '',
  maybeAnswer
}: LineBlockProps) {
  const blocks = answer.split('')
  return (
    <div className={'flex gap-2'}>
      {blocks.map((b, index) => {
        const maybeText = maybeAnswer ? maybeAnswer[index] : ''
        const correct = maybeText === b
        return (
          <Block color={correct ? 'green' : 'gray'} key={index}>
            {maybeText}
          </Block>
        )
      })}
    </div>
  )
}
