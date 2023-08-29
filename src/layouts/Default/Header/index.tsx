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
          <Button className={buttonHeaderStyle}>
            <Link activeClass="active" to="aboutMe" spy={true} smooth={true} offset={-76} duration={500}>
              <p>Home</p>
            </Link>
          </Button>
          <div className={clsx(`space-x-8`)}>
            <Button className={buttonHeaderStyle}>
              <Link activeClass="active" to="aboutMe" spy={true} smooth={true} offset={-76} duration={500}>
                <p>About</p>
              </Link>
            </Button>
            <Button className={buttonHeaderStyle}>
              <Link activeClass="active" to="mySkills" spy={true} smooth={true} offset={-76} duration={500}>
                <p>Skills</p>
              </Link>
            </Button>
            <Button className={buttonHeaderStyle}>
              <Link activeClass="active" to="myProjects" spy={true} smooth={true} offset={-76} duration={500}>
                <p>Projects</p>
              </Link>
            </Button>
          </div>
        </div>
      </header>
    </Fragment>
  )
}

export default Header
