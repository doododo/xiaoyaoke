import Live2D from '@/components/Live2D'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import CONFIG from '../config'
import Card from './Card'
import Logo from './Logo'
import { MenuList } from './MenuList'
import SearchInput from './SearchInput'
import Toc from './Toc'

/**
 * 侧边平铺
 * @param tags
 * @param currentTag
 * @param post
 * @param currentSearch
 * @returns {JSX.Element}
 * @constructor
 */
const SideAreaLeft = props => {
  const { post, slot } = props
  const { locale } = useGlobal()
  const showToc = post && post.toc && post.toc.length > 1
  return (
    <aside
      id='left'
      className={
        (JSON.parse(siteConfig('LAYOUT_SIDEBAR_REVERSE')) ? 'ml-4' : 'mr-4') +
        ' hidden lg:block flex-col w-60 z-20 relative'
      }>
      <section className='w-60'>
        {/* 菜单 */}
        <section className='shadow hidden lg:block mb-5 pb-4 bg-white dark:bg-hexo-black-gray hover:shadow-xl duration-200'>
          <Logo className='min-h-32 ' {...props} />
          <div className='pt-2 px-2 '>
            <MenuList allowCollapse={true} {...props} />
          </div>
          {siteConfig('XIAOYAOKE_MENU_SEARCH', null, CONFIG) && (
            <div className='px-2 pt-2 '>
              <SearchInput {...props} />
            </div>
          )}
        </section>
      </section>

      <div className='sticky top-4 hidden lg:block'>
        <Card>
            {showToc && (
              <div
                key={locale.COMMON.TABLE_OF_CONTENTS}
                className='dark:text-gray-400 text-gray-600 bg-white dark:bg-hexo-black-gray duration-200'>
                <Toc toc={post.toc} />
              </div>
            )}
        </Card>

        <div className='flex justify-center'>
          {slot}
          <Live2D />
        </div>
      </div>
    </aside>
  )
}
export default SideAreaLeft
