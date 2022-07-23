import { v4 as uuid } from 'uuid'

interface Article {
  id: string
  image: string
  category: string
  description: string
  link: string
}

export const articles: Article[] = [
  {
    id: uuid(),
    image: '/images/article-1.jpg',
    category: 'function',
    description: 'Organize your daily job enhance your life performance',
    link: '/'
  },
  {
    id: uuid(),
    image: '/images/article-2.jpg',
    category: 'function',
    description:
      'Mark one activity as done makes your brain understands the power of doing.',
    link: '/'
  },
  {
    id: uuid(),
    image: '/images/article-3.jpg',
    category: 'function',
    description:
      'Careful with missunderstanding the difference between a list of things and a list of desires.',
    link: '/'
  }
]
