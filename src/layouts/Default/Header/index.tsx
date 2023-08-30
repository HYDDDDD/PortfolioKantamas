import Button from '@/components/UI/Button'
import clsx from 'clsx'
import { Fragment, useState } from 'react'
import { Link } from 'react-scroll'
import { HiMenu } from 'react-icons/hi'
import { FaAngleDown } from 'react-icons/fa'

const buttonHeaderStyle = clsx(`hover:text-white`)
const buttonNavbarMobile = clsx(`flex w-full items-center justify-center`)

const Header = () => {
  // _State
  const [visibleNavbarMobile, setVisibleNavbarMobile] = useState<boolean>(false)

  return (
    <Fragment>
      <header className={clsx(`main-space-x py-4`, `fixed top-0 z-50 w-full bg-orange-500`)}>
        <div className={clsx(`container flex items-center justify-between`)}>
          <Button variant="default" className={buttonHeaderStyle}>
            <Link activeClass="active" to="aboutMe" spy={true} smooth={true} offset={-76} duration={500}>
              Home
            </Link>
          </Button>

          <div className={clsx(`hidden text-xl`, `md:flex`)} onClick={() => setVisibleNavbarMobile((e) => !e)}>
            {visibleNavbarMobile ? (
              <Button className={clsx(`text-xl text-white transition-all`)}>
                <FaAngleDown />
              </Button>
            ) : (
              <Button className={clsx(`text-xl transition-all`)}>
                <HiMenu />
              </Button>
            )}
          </div>

          <div className={clsx(`flex w-full justify-end text-center`, `md:hidden`)}>
            <Button variant="default" className={buttonHeaderStyle}>
              <Link activeClass="active" to="aboutMe" spy={true} smooth={true} offset={-76} duration={500}>
                About
              </Link>
            </Button>
            <Button variant="default" className={buttonHeaderStyle}>
              <Link activeClass="active" to="mySkills" spy={true} smooth={true} offset={-76} duration={500}>
                Skills
              </Link>
            </Button>
            <Button variant="default" className={buttonHeaderStyle}>
              <Link activeClass="active" to="myProjects" spy={true} smooth={true} offset={-76} duration={500}>
                Projects
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <div
        className={clsx(
          visibleNavbarMobile ? `h-40` : `h-0`,
          `fixed z-20 mt-16 hidden w-full grow flex-col items-center overflow-hidden bg-orange-500 transition-all duration-200`,
          `lg:flex`,
        )}
      >
        <Link
          activeClass="active"
          to="aboutMe"
          spy={true}
          smooth={true}
          offset={-76}
          duration={500}
          className={clsx(buttonNavbarMobile, buttonHeaderStyle)}
        >
          <Button variant="default" className={clsx(`p-3.5`, buttonHeaderStyle)}>
            About
          </Button>
        </Link>

        <Link
          activeClass="active"
          to="mySkills"
          spy={true}
          smooth={true}
          offset={-76}
          duration={500}
          className={clsx(buttonNavbarMobile, buttonHeaderStyle)}
        >
          <Button variant="default" className={clsx(`p-3.5`, buttonHeaderStyle)}>
            Skills
          </Button>
        </Link>

        <Link
          activeClass="active"
          to="myProjects"
          spy={true}
          smooth={true}
          offset={-76}
          duration={500}
          className={clsx(buttonNavbarMobile, buttonHeaderStyle)}
        >
          <Button variant="default" className={clsx(`p-3.5`, buttonHeaderStyle)}>
            Projects
          </Button>
        </Link>
      </div>
    </Fragment>
  )
}

export default Header
