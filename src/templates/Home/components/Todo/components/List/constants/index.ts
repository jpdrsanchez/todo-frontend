export enum ListTypes {
  TODO = 'TODO',
  DONE = 'DONE'
}

interface ListContent {
  title: string
  description: (number?: number) => string
  color: string
}

export const listContent: Record<ListTypes, ListContent> = {
  [ListTypes.TODO]: {
    title: 'To-do',
    description: () => {
      return 'Take a breath<br />Start doing.'
    },
    color: 'var(--secondary)'
  },
  [ListTypes.DONE]: {
    title: 'Done',
    description: (number?: number) => {
      if (number && number > 0)
        return `Congratulions!<br /><strong>You have done ${number} tasks</strong>`
      return ''
    },
    color: 'var(--primary)'
  }
}
