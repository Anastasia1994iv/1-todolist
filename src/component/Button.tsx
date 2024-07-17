import { ButtonHTMLAttributes } from 'react'

type ButtonProps = {
  title: string,
}

export const Button = ({title}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button>{title}</button>
  )
}