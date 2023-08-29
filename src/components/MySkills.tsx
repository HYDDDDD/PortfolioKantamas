import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'
import { Zoom } from 'react-awesome-reveal'
import ReactPng from '/public/assets/icons/icon-react.png'
import TailwindCssPng from '/public/assets/icons/icon-tailwindcss.png'
import TypeScriptPng from '/public/assets/icons/icon-typeScript.png'
import JavaScriptPng from '/public/assets/icons/icon-javaScript.png'
import GitHubSvg from '/public/assets/icons/icon-github.svg'
import FirebasePng from '/public/assets/icons/icon-firebase.png'
import Card from './UI/Card'

const cardSize = clsx(`w-16 h-16 flex items-center`)

const MySkills = () => {
  const MOCKIMAGE = [
    {
      src: ReactPng,
      alt: 'react',
    },
    {
      src: TailwindCssPng,
      alt: 'tailwind css',
    },
    {
      src: TypeScriptPng,
      alt: 'typeScript',
    },
    {
      src: JavaScriptPng,
      alt: 'javaScript',
    },
    {
      src: GitHubSvg,
      alt: 'github',
    },
    {
      src: FirebasePng,
      alt: 'firebase',
    },
  ]

  return (
    <div id="mySkills" className={clsx(`mt-4 h-full`)}>
      <div className="container">
        <p className={clsx(`text-header-4`, `sm:text-header-5`)}>My Skills</p>
        <Zoom>
          <div className={clsx(`grid grid-cols-3 gap-12 p-10`, `sm:grid-cols-2 sm:gap-6`)}>
            {MOCKIMAGE.map((dataImage) => {
              return (
                <Card
                  key={dataImage.alt}
                  variant="body"
                  className={clsx(`flex items-center justify-center bg-white transition-all`, `hover:scale-110`)}
                >
                  <div className={cardSize}>
                    <Image
                      src={dataImage.src}
                      quality={10}
                      alt={`icon ${dataImage.alt}`}
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                </Card>
              )
            })}
          </div>
        </Zoom>
      </div>
    </div>
  )
}

export default MySkills
