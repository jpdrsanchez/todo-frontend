export enum ListTypes {
  TODO = 'TODO',
  DONE = 'DONE'
}

interface ListContent {
  title: string
  description: string
  color: string
}

export const listContent: Record<ListTypes, ListContent> = {
  [ListTypes.TODO]: {
    title: 'To-do',
    description: 'Take a breath<br />Start doing.',
    color: 'var(--secondary)'
  },
  [ListTypes.DONE]: {
    title: 'Done',
    description: 'Congratulions!<br /><strong>You have done 5 tasks</strong>',
    color: 'var(--primary)'
  }
}
