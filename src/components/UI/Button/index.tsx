import React, { ButtonHTMLAttributes, MouseEvent, FC } from 'react'
import clsx from 'clsx'

type ButtonVariant = 'default' | 'primary'
type Button = ButtonHTMLAttributes<HTMLButtonElement>

type ButtonProps = Button & {
  variant?: ButtonVariant
  onClick?: (e: MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const Button: FC<ButtonProps> = ({ variant, className, children, ...props }) => {
  // console.log([variant]) -> log -> ['something send via props']
  // variant -> send props via component

  return (
    <button className={clsx(`button`, variant, className)} {...props}>
      {children}
    </button>
  )
}

export default Button
