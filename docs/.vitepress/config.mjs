import { defineConfig } from 'vitepress'

export default defineConfig({
  // 网站标题
  title: "MelonPeasant's Blog",
  // 描述
  description: '用 VitePress 搭建的个人博客',
  // 重要！base 配置：
  // 因为仓库是 MelonPeasant.github.io，根站点，base 写 '/'
  // 如果是普通项目仓库才需要 '/仓库名/'，这里不要写仓库名！
  base: '/',

  // transformPageData(pageData) {
  //   // 路径以 /posts/ 开头，自动设置布局
  //   if (pageData.frontmatter.layout === undefined && pageData.filePath.startsWith('posts/')) {
  //     pageData.frontmatter.layout = 'PostLayout'
  //   }
  //   },

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/posts/hello' }
    ],
    sidebar: [
      {
        text: '文章列表',
        collapsed: false,
        items: [
          { text: 'BusyBox制作Rootfs', link: '/posts/busybox' },
          { text: 'Git相关命令', link: '/posts/aboutgitcmd' }
          
        ]
      },
      {
        text: 'VuePress',
        collapsed: true,
        items: [
          { text: '本地搭建VuePress', link: '/posts/VuePress/vuepresssetup' },
          { text: '部署到GitHub Pages', link: '/posts/VuePress/vuepressdeploy' },
          { text: 'VuePress笔记', link: '/posts/VuePress/vuepressnote' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/MelonPeasant' }
    ]
  }
})

