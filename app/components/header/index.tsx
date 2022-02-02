import {
  QuestionOutlineIcon,
  SettingsIcon,
  MoonIcon,
  SunIcon
} from '@chakra-ui/icons'
import { useEffect, useState } from 'react'

export default function Header() {
  const [theme, setTheme] = useState(() => {
    if (typeof document === 'undefined') {
      return 'light'
    }

    return document.documentElement.classList.contains('dark')
      ? 'dark'
      : 'light'
  })
  useEffect(() => {
    const theme = localStorage.getItem('theme')
    if (theme === 'dark') {
      setTheme('dark')
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleTheme = () => {
    const theme = localStorage.getItem('theme')

    if (theme === 'dark') {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setTheme('light')
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setTheme('dark')
    }
  }

  return (
    <div className="p-4 flex items-center border-solid border-b border-gray-200 font-serif text-2xl font-medium dark:text-slate-100">
      <div className={'w-16 flex items-center justify-start'}>
        <QuestionOutlineIcon className="cursor-pointer" fontSize={20} />
      </div>
      <div className={'flex-1 justify-center flex'}>
        <span>猜成语</span>
      </div>
      <div className={'w-16 flex gap-2 justify-end'}>
        <SettingsIcon className="cursor-pointer" fontSize={20} />
        {theme === 'light' ? (
          <MoonIcon
            className="cursor-pointer"
            fontSize={20}
            onClick={toggleTheme}
          />
        ) : (
          <SunIcon
            className="cursor-pointer"
            fontSize={20}
            onClick={toggleTheme}
          />
        )}
      </div>
    </div>
  )
}
