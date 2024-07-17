
type TaskProps = {
  isDone: boolean
  title: string
}

export const Task = ({ isDone, title }: TaskProps) => {
  return (
    <li>
      <input type='checkbox' checked={isDone} />
      <span>{title}</span>
    </li>
  )
}