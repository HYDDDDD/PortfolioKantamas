import React, { FC, PropsWithChildren } from 'react'

const ErrorLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <h1>Error!!!!</h1>
      {children}
    </div>
  )
}

export default ErrorLayout
