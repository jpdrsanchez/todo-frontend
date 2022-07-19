import * as S from './styles'

interface ItemProps {
  title: string
  done: boolean
}

const Item = (props: ItemProps) => {
  return (
    <S.Item>
      {props.done && (
        <S.CheckItem>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.9986 0C5.3778 0 0 5.38059 0 12.0014C0 18.6222 5.3778 24 11.9986 24C18.6194 24 24 18.6222 24 12.0014C24 5.38059 18.6194 0 11.9986 0ZM17.2738 6.5554C17.7138 6.5554 18.1525 6.72088 18.4848 7.05318C19.1494 7.71775 19.1494 8.81388 18.4848 9.47846L11.2123 16.7509C10.5477 17.4155 9.45105 17.4155 8.78648 16.7509L5.55537 13.5176C4.8908 12.853 4.8908 11.7586 5.55537 11.094C6.21995 10.4294 7.31441 10.4294 7.97898 11.094L9.99912 13.1147L16.0612 7.05318C16.3935 6.72088 16.8339 6.5554 17.2738 6.5554Z"
              fill="#4AC959"
            />
          </svg>
        </S.CheckItem>
      )}
      {!props.done && (
        <S.CheckItem>
          <input
            type="checkbox"
            name="complete"
            id="complete"
            className="visually-hidden"
          />
          <span className="visually-hidden">Complete this task</span>
          <div>
            <svg
              width="12"
              height="10"
              viewBox="0 0 12 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0.707107"
                y1="5.29289"
                x2="4.70711"
                y2="9.29289"
                stroke="#4AC959"
                strokeWidth="2"
              />
              <line
                x1="3.29289"
                y1="9.29289"
                x2="11.2929"
                y2="1.29289"
                stroke="#4AC959"
                strokeWidth="2"
              />
            </svg>
          </div>
        </S.CheckItem>
      )}
      <S.TextItem>{props.title}</S.TextItem>
    </S.Item>
  )
}
export default Item
