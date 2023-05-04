import { useRouter } from 'next/router'
import { useState } from 'react'
import { MenuList } from './MenuList'

/**
 * 菜单导航
 * @param {*} props
 * @returns
 */
export const NavBar = (props) => {
  const [showSearchInput, changeShowSearchInput] = useState(false)
  const router = useRouter()

  const toggleShowSearchInput = () => {
    changeShowSearchInput(!showSearchInput)
  }

  const onKeyUp = (e) => {
    if (e.keyCode === 13) {
      const search = document.getElementById('theme-simple-search').value
      if (search) {
        router.push({ pathname: '/search/' + search })
      }
    }
  }

  return (
        <nav className="w-full bg-white md:pt-0  relative z-20 shadow border-t border-gray-100 dark:border-hexo-black-gray dark:bg-black">
        </nav>
  )
}
