import AboutMe from '@/components/AboutMe'
import MyProjects from '@/components/MyProjects'
import MySkills from '@/components/MySkills'
import { NextPageWithLayout } from '@/types/layout'
import { getDefaultLayout } from '@/utils/getLayout'
import clsx from 'clsx'
import React, { Fragment } from 'react'

const HomePage: NextPageWithLayout = () => {
  // return this!
  return (
    <Fragment>
      <section>
        <div className={clsx(`container`)}>
          <AboutMe />
          <MySkills />
          <MyProjects />
        </div>
      </section>
    </Fragment>
  )
}

HomePage.getLayout = getDefaultLayout //page get a React component for the layout.

export default HomePage
