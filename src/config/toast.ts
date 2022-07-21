import { Toast } from 'react-hot-toast'

export const success: Partial<Toast> = {
  style: {
    border: 'none',
    background: '#60d394',
    color: 'var(--white)',
    padding: '20px 15px'
  },
  iconTheme: {
    primary: 'var(--white)',
    secondary: '#60d394'
  }
}

export const error: Partial<Toast> = {
  style: {
    border: 'none',
    background: '#db504a',
    color: 'var(--white)',
    padding: '20px 15px'
  },
  iconTheme: {
    primary: 'var(--white)',
    secondary: '#db504a'
  }
}
