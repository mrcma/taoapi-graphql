import data from './data.json'
import type { Resolvers } from './resolvers-types'

export const resolvers: Resolvers = {
  Query: {
    book: () => data,
    chapter: (_, args) => data.find(chapter => chapter.number === args.number)!
  },
  Chapter: {
    number: chapter => chapter.number,
    content: chapter => chapter.content
  },
  Translations: {
    EN: translation => translation.EN
  }
}
