import clsx from 'clsx'
import React, { FC, HTMLAttributes } from 'react'

type CardVariant = 'default' | 'body'

type CardProps = HTMLAttributes<HTMLDivElement> & {
  variant?: CardVariant
}

const Card: FC<CardProps> = ({ variant, className, children }) => {
  return <div className={clsx(`card`, variant, className)}>{children}</div>
}

export default Card
