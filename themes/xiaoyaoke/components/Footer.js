import { siteConfig } from '@/lib/config'
import Link from 'next/link'
import CONFIG from '../config'

/**
 * 页脚
 * @param {*} param0
 * @returns
 */
const Footer = props => {
  const d = new Date()
  const currentYear = d.getFullYear()
  const since = siteConfig('SINCE')
  const copyrightDate =
    parseInt(since) < currentYear ? since + '-' + currentYear : currentYear
  const customMenu1 = [
    { name: '日常购物', href: 'https://11010.net/my-shop' },
    { name: 'Xbox 游戏', href: 'https://11010.net/xbox-game' },
    {
      name: '积存金行情',
      href: 'https://mybank.icbc.com.cn/icbc/newperbank/perbank3/gold/goldaccrual_query_out.jsp'
    }
  ]
  const customMenu2 = [
    { name: 'Pdf 工具箱', href: 'https://pdf.11010.net' },
    { name: 'IT 工具箱', href: 'https://it-tools.11010.net' },
    { name: 'Logo 生成器', href: 'https://logo.11010.net' }
  ]
  const customMenu22 = [{ name: 'Axhub 原型托管', href: 'https://pr.gend.cn' }]
  return (
    <footer
      id='footer-wrapper'
      className='relative bg-[#2A2A2A] justify-center w-full leading-6 text-gray-300 text-sm md:p-10'>
      <div id='footer-container' className='w-full mx-auto max-w-screen-xl'>
        <div className='flex'>
          {/* 页脚工具库菜单组 */}
          <div className='hidden md:flex flex-grow my-4 space-x-20 text-lg  '>
            {/* 分类菜单  */}
            <div>
              <div className='font-bold mb-4 text-white'>
                {siteConfig(
                  'XIAOYAOKE_TEXT_FOOTER_MENU_1',
                  'Product Center',
                  CONFIG
                )}
              </div>
              <nav
                id='home-nav-button'
                className={'flex flex-col space-y-2 text-start'}>
                {customMenu1?.map(menu => {
                  return (
                    <Link
                      key={`${menu.name}`}
                      title={`${menu.name}`}
                      href={`${menu.href}`}
                      passHref>
                      {menu.name}
                    </Link>
                  )
                })}
              </nav>
            </div>

            {/* 页脚工具库菜单  */}
            <div>
              <div className='font-bold mb-4 text-white'>
                {siteConfig('XIAOYAOKE_TEXT_FOOTER_MENU_2', 'About US', CONFIG)}
              </div>
              <nav
                id='home-nav-button'
                className={'flex flex-col space-y-2 text-start'}>
                {customMenu2?.map(menu => {
                  return (
                    <Link
                      key={`${menu.name}`}
                      title={`${menu.name}`}
                      href={`${menu.href}`}
                      passHref>
                      {menu.name}
                    </Link>
                  )
                })}
              </nav>
            </div>
            <div>
              <nav
                id='home-nav-button'
                className={'flex flex-col space-y-2 text-start mt-11'}>
                {customMenu22?.map(menu => {
                  return (
                    <Link
                      key={`${menu.name}`}
                      title={`${menu.name}`}
                      href={`${menu.href}`}
                      passHref>
                      {menu.name}
                    </Link>
                  )
                })}
              </nav>
            </div>
          </div>
        </div>

        {/* 底部版权相关 */}
        <div
          id='footer-copyright-wrapper'
          className='flex flex-col md:flex-row justify-between border-t border-gray-600 pt-8 px-4 md:px-0'>
          <div className='text-start space-y-1'>
            {/* 网站所有者 */}
            <div>
              {' '}
              Copyright <i className='fas fa-copyright' /> {`${copyrightDate}`}{' '}
              <a
                href={siteConfig('LINK')}
                className='underline font-bold  dark:text-gray-300 '>
                {siteConfig('AUTHOR')}
              </a>{' '}
              All Rights Reserved.
            </div>

            {/* 技术支持 */}
            <div className='text-xs text-light-500 dark:text-gray-700'>
              Powered by{' '}
              <a
                href='https://github.com/tangly1024/NotionNext'
                className='dark:text-gray-300'>
                NotionNext {siteConfig('VERSION')}
              </a>
              .
            </div>

            {/* 站点统计 */}
            <div>
              <span className='hidden busuanzi_container_site_pv'>
                <i className='fas fa-eye' />
                <span className='px-1 busuanzi_value_site_pv'> </span>{' '}
              </span>
              <span className='pl-2 hidden busuanzi_container_site_uv'>
                <i className='fas fa-users' />{' '}
                <span className='px-1 busuanzi_value_site_uv'> </span>{' '}
              </span>
            </div>
          </div>

          {/* 右边公司名字 */}
          <div className='md:text-right'>
            <h1 className='text-xs pt-4 text-light-400 dark:text-gray-400'>
              {siteConfig('TITLE')} {siteConfig('BIO')}
            </h1>
            <h2> {siteConfig('DESCRIPTION')}</h2>
            {/* 可选备案信息 */}
            {siteConfig('BEI_AN') && (
              <>
                <i className='fas fa-shield-alt' />{' '}
                <a href='https://beian.miit.gov.cn/' className='mr-2'>
                  {siteConfig('BEI_AN')}
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
