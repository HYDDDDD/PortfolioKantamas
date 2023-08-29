import clsx from 'clsx'
import React from 'react'
import profile from '../../public/assets/PictureJPG/64024365.jpg'
import Button from './UI/Button'
import { AiFillGithub } from 'react-icons/ai'
import Link from 'next/link'
import Image from 'next/image'

const titleStyle = clsx(`text-header-4`, `sm:text-header-5`)
const bodyStyle = clsx(`text-body-18`)

const AboutMe = () => {
  return (
    <div id="aboutMe" className={clsx(`h-full space-y-4`)}>
      <div className={clsx(`flex flex-col items-center justify-center space-x-8 p-4`, `sm:space-x-0`)}>
        <Image
          priority
          src={profile}
          quality={30}
          alt="profile"
          style={{ objectFit: 'cover' }}
          className="flex h-48 w-48 items-center justify-center rounded-full bg-orange-300 text-center shadow-md"
        />

        <div className={clsx(`mt-4 space-y-3`)}>
          <p className={clsx(`sm:text-center`, titleStyle)}>Hi there , I'm Kantamas Pokkam</p>
          <div className={clsx(`w-full border`)}></div>
          <p className={clsx(`sm:text-center`, bodyStyle)}>Front-end Developer</p>

          <div className="space-y-2">
            <p className={titleStyle}>About me</p>
            <div className={clsx(`flex items-center justify-center`, `sm:flex-col sm:space-y-3`)}>
              <div className={clsx(``)}>
                <p className="break-words">
                  My name is Kantamas Pokkam <br />
                  Front-end Developer <br />
                </p>
                <p className="break-words">
                  My family taught me to try learning on my own.
                  <br />
                  That's why I develop myself, learn new things and practices yourself
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={clsx(`mt-6 flex items-center justify-center space-x-4`)}>
          {/* noopener is security to prevent malicious links from gaining access to a user’s browser. 
              noreferrer masks your referral links in destination analytics. It protects your site’s information from being transferred to the website your users are navigating to.
          */}

          <Link href="/Kantamas.pdf" target="_blank" rel="noopener noreferrer">
            <Button variant={'default'} className={clsx(`bg-orange-500 text-white`, `hover:bg-orange-600`)}>
              Resume
            </Button>
          </Link>

          <Link href="https://github.com/HYDDDDD" target="_blank" rel="noreferrer">
            <Button variant={'default'} className={clsx(`flex gap-1 bg-black text-white`, `hover:bg-slate-800`)}>
              <AiFillGithub />
              GitHub
            </Button>
          </Link>

          <Link
            href="https://fastwork.co/user/faikan/web-development-11088240?badges=&page=1&position=1&q=Kantamas&source=search"
            target="_blank"
            rel="noreferrer"
          >
            <Button variant={'default'} className={clsx(`bg-fastWork flex gap-1 text-white`, `hover:bg-blue-700`)}>
              Fastwork
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
