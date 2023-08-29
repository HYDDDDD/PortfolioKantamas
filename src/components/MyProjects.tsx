import clsx from 'clsx'
import React from 'react'
import ProjectDessertShopPng from '/public/assets/projects/project-dessert-shop.png'
import ProjectIncomeExpenseAccountPng from '/public/assets/projects/project-income-expense-account.png'
import Image from 'next/image'
import Button from './UI/Button'
import Link from 'next/link'
import { AiFillGithub } from 'react-icons/ai'

const topicProject = clsx(`mt-2 text-body-18`)
const contantProject = clsx('ml-2')

const MyProjects = () => {
  const MOCKDEPLOYEDPROJECTIMAGE = [
    {
      src: ProjectDessertShopPng,
      alt: 'project dessert shop',
    },
    {
      src: ProjectIncomeExpenseAccountPng,
      alt: 'project income expense account',
    },
  ]

  return (
    <div id="myProjects" className={clsx(`mt-4 h-full`)}>
      <div className="container">
        <p className={clsx(`text-header-4`, `sm:text-header-5`)}>My Project</p>
        <div className="p-4">
          <p className={clsx(`text-header-5`, `sm:text-header-6`)}>Deployed projects</p>
          <div className="mt-4 space-y-10">
            {MOCKDEPLOYEDPROJECTIMAGE.map((dataDeployedProject) => {
              return (
                <div key={dataDeployedProject.alt}>
                  <Image
                    src={dataDeployedProject.src}
                    quality={75}
                    alt={dataDeployedProject.alt}
                    style={{ objectFit: 'cover' }}
                  />

                  {dataDeployedProject.alt === 'project dessert shop' && (
                    <div>
                      <p className={topicProject}>Project Dessert Shop.</p>
                      <p className={clsx(`p-4`)}>
                        <span className={topicProject}>Start a project</span> :
                        <span className={contantProject}>Freshman in university.</span>
                        <br />
                        <span className={topicProject}>Description</span> :
                        <span className={contantProject}>
                          A project that practice HTML , CSS (not responsive for mobile and tablet).
                        </span>
                        <br />
                        <Link href="https://dessert-shop.netlify.app/" target="_blank" rel="noreferrer">
                          <Button variant={'primary'} className={clsx(`mt-4 text-white`)}>
                            Link my project
                          </Button>
                        </Link>
                        <br />
                      </p>
                    </div>
                  )}
                  {dataDeployedProject.alt === 'project income expense account' && (
                    <div>
                      <p className={topicProject}>Project Income expense account.</p>
                      <p className={clsx(`p-4`)}>
                        <span className={topicProject}>Start a project</span> :
                        <span className={contantProject}>Freshman in university.</span>
                        <br />
                        <span className={topicProject}>Description</span> :
                        <span className={contantProject}>
                          A project that My react first time. practice React , Tailwind CSS , JavaScript and CSS. I
                          studied on a YouTube channel named KongRuksiam Official.
                        </span>
                        <br />
                        <Link href="https://fai-react-1.netlify.app/" target="_blank" rel="noreferrer">
                          <Button variant={'primary'} className={clsx(`mt-4 text-white`)}>
                            Link my project
                          </Button>
                        </Link>
                        <br />
                      </p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
        <div className="flex items-center space-x-4 p-4">
          <p className={clsx(`text-body-20`)}>Other projects :</p>
          <Link href="https://github.com/HYDDDDD?tab=repositories" target="_blank" rel="noreferrer">
            <Button variant={'default'} className={clsx(`flex gap-1 bg-black text-white`, `hover:bg-slate-800`)}>
              <AiFillGithub />
              GitHub
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MyProjects
