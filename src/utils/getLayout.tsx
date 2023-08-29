import type { IDefaultLayoutProps } from '@/layouts/Default'
import Layout from '@/layouts/Default'
import ErrorLayout from '@/layouts/Error'
import type { GetLayout } from '@/types/layout'

export const getDefaultLayout: GetLayout<IDefaultLayoutProps> = (page, props) => {
  return <Layout {...props}>{page}</Layout>
}

export const getErrorLayout: GetLayout = (page) => {
  return <ErrorLayout>{page}</ErrorLayout>
}
