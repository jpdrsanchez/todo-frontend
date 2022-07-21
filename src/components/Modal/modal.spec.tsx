import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Modal from '.'

describe('<Modal />', () => {
  it('should be visible when visible is true', () => {
    render(
      <Modal onClose={() => {}} visible>
        Modal
      </Modal>
    )

    const modal = screen.getByRole('dialog')
    expect(modal).toHaveTextContent(/modal/i)
    expect(document.body).toHaveStyle('overflow: hidden')
  })
  it('should not be visible when visible is false', () => {
    render(
      <Modal onClose={() => {}} visible={false}>
        Modal
      </Modal>
    )
    const modal = screen.queryByRole('dialog')

    expect(modal).toBeNull()
  })
  it('should execute the onClose function when we click outside the body', async () => {
    const onClose = jest.fn()
    const { container } = render(
      <Modal onClose={onClose} visible>
        Modal
      </Modal>
    )

    const modalWrapper = container.firstElementChild!
    const modal = screen.getByRole('dialog')

    await userEvent.click(modal)
    expect(onClose).not.toHaveBeenCalled()

    await userEvent.click(modalWrapper)
    expect(onClose).toHaveBeenCalled()
  })

  it('should have the correct accessible items', () => {
    render(
      <Modal
        onClose={() => {}}
        visible
        title="modal_title"
        description="modal_description"
      >
        <h2 id="modal_title">Modal Name</h2>
        <p id="modal_description">Modal Description</p>
      </Modal>
    )

    const modal = screen.getByRole('dialog')

    expect(modal).toHaveAccessibleName(/Modal Name/i)
    expect(modal).toHaveAccessibleDescription(/Modal Description/i)
  })
})
