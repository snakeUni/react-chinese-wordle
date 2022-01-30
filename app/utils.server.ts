import fsExtra from 'fs-extra'
import path from 'path'

export const getIdiomsContent = async () => {
  const idiomsPath = path.resolve(`${process.cwd()}/source/chengyu.json`)
  const text = fsExtra.readFileSync(idiomsPath, 'utf8')
  return text
}

export const createAndWriteContent = async (
  filePath: string,
  content: string
) => {
  await fsExtra.ensureFile(filePath)
  await fsExtra.writeFile(filePath, content)
}
