import BLOG from '@/blog.config'
import Link from 'next/link'
import CONFIG_SIMPLE from '../config_simple'
// import CONFIG_SIMPLE from '../config_simple'

/**
 * 网站顶部
 * @returns
 */
export const Header = (props) => {
  const { siteInfo } = props
  const avatar = siteInfo?.icon || BLOG.AVATAR

  return (
        <header className="text-center justify-between items-center px-6 bg-white h-80 dark:bg-black relative z-10">
        </header>
  )
}
