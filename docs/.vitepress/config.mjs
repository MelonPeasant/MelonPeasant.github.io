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
      { text: '首页', link: '/' },
      { text: '关于博主', link: '/posts/aboutme' }
    ],
    sidebar: [
      {
        text: '定制Ubuntu系统',
        link: '/posts/busybox',
        collapsed: false,
        items: [
          { text: 'BusyBox制作Rootfs', link: '/posts/busybox' },
          { text: 'Ubuntu-Base制作Rootfs', link: '/posts/ubuntubase' },
          { text: '系统恢复出厂设置', link: '/posts/recover' }
        ]
      },
      {
        text: 'VuePress',
        link: '/posts/vuepresssetup',
        collapsed: true,
        items: [
          { text: '本地搭建VuePress', link: '/posts/vuepresssetup' },
          { text: '部署到GitHub Pages', link: '/posts/vuepressdeploy' },
          { text: 'VuePress笔记', link: '/posts/vuepressnote' }
        ]
      },
      {
        text: 'WordPress',
        link: '/posts/wordpress',
        collapsed: true,
        items: [
          { text: 'WordPress', link: '/posts/wordpress' },
          { text: 'MySQL和HTTPS配置', link: '/posts/mysqlandhttps' },
          { text: 'WordPress Q&A', link: '/posts/wordpressqanda' }
        ]
      },
      {
        text: 'Linux',
        link: '/posts/ubuntunote',
        collapsed: true,
        items: [
          { text: 'Ubuntu笔记', link: '/posts/ubuntunote' },
          { text: '磁盘格式化并挂载', link: '/posts/formatdisk' },
          { text: '添加开机脚本', link: '/posts/startup' },
        ]
      },
      {
        text: 'GIT',
        link: '/posts/aboutgitcmd',
        collapsed: true,
        items: [
          { text: 'Git相关命令', link: '/posts/aboutgitcmd' },
          { text: 'Git仓库初始化', link: '/posts/gitreadme' },
          { text: 'GitHub和Gitee多账户', link: '/posts/githubandgitee' },
          { text: 'Ubuntu配置GitHub', link: '/posts/githubonubuntu' }
        ]
      },
      {
        text: '待整理',
        link: '/posts/frpsetup',
        collapsed: true,
        items: [
          { text: 'Frp服务端+客户端搭建', link: '/posts/frpsetup' },
          { text: '搭建HY2服务器', link: '/posts/hysteria2' },
          { text: '本地配置SSL证书', link: '/posts/mkcert' },
          { text: 'Ubuntu22.04下搭建Nginx+PHP+MySql服务', link: '/posts/nginxphpmysql' },
          { text: 'Ubuntu笔记', link: '/posts/noteone' },
          { text: '打造无指纹浏览器', link: '/posts/privateedge' },
          { text: '搭建V2Ray服务器（ws+tls+web）', link: '/posts/v2raywstlsweb' },
          { text: 'XRAY支持REALITY协议', link: '/posts/xtlsrprxvision' }
        ]
      }
    ],
    // 本地搜索（内置，不用额外付费）
    search: {
      provider: 'local'
    },
    // 文章底部：上次更新时间
    lastUpdated: {
      text: '最后更新：',
      formatOptions: { dateStyle: 'short' }
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/MelonPeasant' }
    ]
  }
})

