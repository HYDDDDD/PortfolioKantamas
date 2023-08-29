import Button from '@/components/UI/Button'
import clsx from 'clsx'
import { Fragment } from 'react'
import { Link } from 'react-scroll'

const buttonHeaderStyle = clsx(`hover:text-white`)

const Header = () => {
  return (
    <Fragment>
      <header className={clsx(`main-space-x py-4`, `fixed top-0 z-50 w-full bg-orange-500`)}>
        <div className={clsx(`container flex items-center justify-between`)}>
          <p>Header</p>
          <div className={clsx(`space-x-8`)}>
            <Button className={buttonHeaderStyle}>
              <Link activeClass="active" to="aboutMe" spy={true} smooth={true} offset={-76} duration={500}>
                About
              </Link>
            </Button>
            <Button className={buttonHeaderStyle}>
              <Link activeClass="active" to="mySkills" spy={true} smooth={true} offset={-76} duration={500}>
                Skills
              </Link>
            </Button>
            <Button className={buttonHeaderStyle}>
              <Link activeClass="active" to="myProjects" spy={true} smooth={true} offset={-76} duration={500}>
                Projects
              </Link>
            </Button>
          </div>
        </div>
      </header>
    </Fragment>
  )
}

export default Header
