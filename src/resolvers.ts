import type { Chapter, Resolvers } from './resolvers-types'

const READING_ID = '5fFBw0mvD21VYaNNFsac1e'

async function getContents(chapter?: string): Promise<Chapter[]> {
  let queryString = ''

  if (chapter) {
    const query = new URLSearchParams()
    query.set('position', chapter)
    queryString = `?${query.toString()}`
  }

  const response = await fetch(
    process.env.OMUSO_API + `/v1/readings/${READING_ID}/contents${queryString}`
  )

  const data = await response.json()

  return data.map(
    (item: any) =>
      ({
        number: String(item.section.position),
        content: {
          EN: item.plainText,
          ZH: item.translations.find(
            (translation: any) => translation.language === 'lzh'
          ).plainText,
          ES: item.translations.find(
            (translation: any) => translation.language === 'es'
          )?.plainText
        }
      } as Chapter)
  )
}

export const resolvers: Resolvers = {
  Query: {
    book: async () => {
      return getContents()
    },
    chapter: async (_, args) => {
      const [data] = await getContents(args.number)

      return data
    }
  },
  Chapter: {
    number: chapter => chapter.number,
    content: chapter => chapter.content
  },
  Translations: {
    EN: translation => translation.EN
  }
}
