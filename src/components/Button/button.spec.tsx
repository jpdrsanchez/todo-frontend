import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from '.'

const BUTTON_TEXT = 'testing button'

describe('Button', () => {
  beforeAll(() => {
    const user = userEvent.setup()
  })

  it('should render the button correctly', () => {
    render(<Button onClick={() => {}}>{BUTTON_TEXT}</Button>)

    screen.getByRole('button', { name: BUTTON_TEXT })
  })

  it('should execute the callback function on click', async () => {
    const mockFunc = jest.fn()

    render(<Button onClick={mockFunc}>{BUTTON_TEXT}</Button>)
    const button = screen.getByRole('button', { name: BUTTON_TEXT })

    await userEvent.click(button)
    expect(mockFunc).toHaveBeenCalledTimes(1)

    await userEvent.click(button)
    await userEvent.click(button)
    await userEvent.click(button)
    expect(mockFunc).toHaveBeenCalledTimes(4)
  })
  it('should render the button with the small size styles', () => {
    render(
      <Button onClick={() => {}} size="small">
        {BUTTON_TEXT}
      </Button>
    )
    const button = screen.getByRole('button', { name: BUTTON_TEXT })

    expect(button).toHaveStyleRule('background', 'var(--black)')
    expect(button).toHaveStyleRule('color', 'var(--white)')
    expect(button).toHaveStyleRule('font-size', '0.875rem')
    expect(button).toHaveStyleRule('line-height', '1.3125rem')
    expect(button).toHaveStyleRule('max-width', '120px')
    expect(button).toHaveStyleRule('padding', '9px 10px 10px')
  })
  it.todo('should render the button with the default size')
})
