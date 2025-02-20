const CONFIG_SIMPLE = {

  LOGO_IMG: '',
  TOP_BAR: false, // 显示顶栏
  TOP_BAR_CONTENT: process.env.NEXT_PUBLIC_THEME_SIMPLE_TOP_TIPS || '',
  LOGO_DESCRIPTION: process.env.NEXT_PUBLIC_THEME_SIMPLE_LOGO_DESCRIPTION || '<div>有声图书馆</div>',

  AUTHOR_LINK: process.env.NEXT_PUBLIC_AUTHOR_LINK || '#',

  // 菜单配置
  MENU_CATEGORY: false, // 显示分类
  MENU_TAG: false, // 显示标签
  MENU_ARCHIVE: false, // 显示归档
  MENU_SEARCH: false // 显示搜索
}
export default CONFIG_SIMPLE
