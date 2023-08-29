import clsx from 'clsx'
import { Fragment } from 'react'

const Footer = () => {
  return (
    <Fragment>
      <footer className={clsx(`main-space-x py-6`, `bg-gray-50`)}>
        <div className={clsx(`container`)}>
          <div className={clsx(`flex items-center space-x-8`, `sm:flex-col sm:space-y-2`)}>
            <p className="text-header-5">Contact</p>
            <p>Tel. 0956572903</p>
            <p>Gmail : kantamas35248@gmail.com</p>
          </div>
        </div>
      </footer>
    </Fragment>
  )
}

export default Footer
