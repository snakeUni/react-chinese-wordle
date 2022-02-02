import * as React from 'react'

interface BlockProps {
  /**
   * 命中是绿色，没有命中是灰色
   */
  color?: 'green' | 'gray'
  children?: string
}

export default function Block({ color = 'gray', children }: BlockProps) {
  const colorClass = color === 'green' ? 'green' : 'border-2'
  return (
    <div
      className={`${colorClass} flex justify-center w-20 h-20 items-center text-3xl dark:text-slate-100`}
    >
      {children}
    </div>
  )
}
