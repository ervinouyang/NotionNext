import Link from 'next/link'
import { useGlobal } from '@/lib/global'
import formatDate from '@/lib/formatDate'
import CONFIG_SIMPLE from '../config_simple'
import BLOG from '@/blog.config'

export const ArticleInfo = (props) => {
  const { post } = props

  const { locale } = useGlobal()
  const date = formatDate(post?.date?.start_date || post?.createdTime, locale.LOCALE)

  return (
        <section className="flex-wrap flex mt-2 text-gray-400 dark:text-gray-400 font-light leading-8">
            <div>
                <h2
                    id='blog-item-title'
                    className="mb-5 font-bold text-black text-xl md:text-2xl no-underline">
                    {post.title}
                </h2>

            </div>

        </section>
  )
}
