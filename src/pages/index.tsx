import { NextPageWithLayout } from '@/types/layout'
import { getDefaultLayout } from '@/utils/getLayout'
import clsx from 'clsx'
import React from 'react'

const HomePage: NextPageWithLayout = () => {
  // return this!
  return <div className={clsx(`container`)}>HomePage</div>
}

HomePage.getLayout = getDefaultLayout //page get a React component for the layout.

export default HomePage
