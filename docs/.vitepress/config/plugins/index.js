import MarkdownIt from 'markdown-it'
import TableContainer from './table'

const markdown = MarkdownIt({
  breaks: true
})

export const mdPlugin = (md) => {
  md.use(TableContainer)
}