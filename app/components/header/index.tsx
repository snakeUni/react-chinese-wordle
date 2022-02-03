import {
  QuestionOutlineIcon,
  SettingsIcon,
  MoonIcon,
  SunIcon
} from '@chakra-ui/icons'

export default function Header() {
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
        <div
          className="cursor-pointer flex dark:hidden"
          onClick={() => {
            ;(window as any).__setPreferredTheme('dark')
          }}
        >
          <MoonIcon fontSize={20} />
        </div>
        <div
          className="cursor-pointer hidden dark:flex"
          onClick={() => {
            ;(window as any).__setPreferredTheme('light')
          }}
        >
          <SunIcon fontSize={20} />
        </div>
      </div>
    </div>
  )
}
