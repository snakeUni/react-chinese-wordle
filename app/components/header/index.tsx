import {
  QuestionOutlineIcon,
  SettingsIcon,
  MoonIcon,
  SunIcon
} from '@chakra-ui/icons'

export default function Header() {
  const light = true
  return (
    <div className="p-4 flex items-center border-solid border-b border-gray-200 font-serif text-2xl font-medium">
      <div className={'w-16 flex items-center justify-start'}>
        <QuestionOutlineIcon className="cursor-pointer" fontSize={20} />
      </div>
      <div className={'flex-1 justify-center flex'}>
        <span>猜成语</span>
      </div>
      <div className={'w-16 flex gap-2 justify-end'}>
        <SettingsIcon className="cursor-pointer" fontSize={20} />
        {light ? (
          <MoonIcon className="cursor-pointer" fontSize={20} />
        ) : (
          <SunIcon className="cursor-pointer" fontSize={20} />
        )}
      </div>
    </div>
  )
}
