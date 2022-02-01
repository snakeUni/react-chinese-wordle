import React, { useImperativeHandle, useRef } from 'react'

export interface InputProps {
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
  className?: string
}

function Input(
  { value, onChange, placeholder, className }: InputProps,
  ref: any
) {
  const inputRef = useRef<HTMLInputElement>(null)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value
    onChange?.(v)
  }

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current?.focus()
    }
  }))

  return (
    <input
      type="text"
      autoComplete="false"
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      className="outline-none text-center bg-transparent p-3 border-2"
      maxLength={4}
      ref={inputRef}
    ></input>
  )
}

export default React.forwardRef(Input)
