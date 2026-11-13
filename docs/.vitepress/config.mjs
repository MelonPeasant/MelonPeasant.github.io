import { defineConfig } from 'vitepress'

export default defineConfig({
  // 网站标题
  title: "码农",
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
      { text: '首页', link: '/' }
    ],
    sidebar: [
      {
        text: '文章列表',
        collapsed: false,
        items: [
          { text: 'BusyBox制作Rootfs', link: '/posts/busybox' }
        ]
      },
      {
        text: 'VuePress',
        collapsed: true,
        items: [
          { text: '本地搭建VuePress', link: '/posts/vuepresssetup' },
          { text: '部署到GitHub Pages', link: '/posts/vuepressdeploy' },
          { text: 'VuePress笔记', link: '/posts/vuepressnote' }
        ]
      },
      {
        text: 'WordPress',
        collapsed: true,
        items: [
          { text: 'WordPress', link: '/posts/wordpress' },
          { text: 'MySQL和HTTPS配置', link: '/posts/mysqlandhttps' },
          { text: 'WordPress Q&A', link: '/posts/wordpressqanda' }
        ]
      },
      {
        text: 'Linux',
        collapsed: true,
        items: [
          { text: 'Ubuntu笔记', link: '/posts/ubuntunote' },
          { text: '磁盘格式化并挂载', link: '/posts/formatdisk' },
          { text: '添加开机脚本', link: '/posts/startup' },
        ]
      },
      {
        text: 'GIT',
        collapsed: true,
        items: [
          { text: 'Git相关命令', link: '/posts/aboutgitcmd' },
          { text: 'Git仓库初始化', link: '/posts/gitreadme' },
          { text: 'GitHub和Gitee多账户', link: '/posts/githubandgitee' },
          { text: 'Ubuntu配置GitHub', link: '/posts/githubonubuntu' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/MelonPeasant' }
    ]
  }
})

