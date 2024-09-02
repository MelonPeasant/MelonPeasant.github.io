module.exports = {
    title: '瓜农的博客',
    description: '从码农到瓜农的转换',
    locales: {
        '/': {
          lang: 'zh-CN'
        }
      },  
    theme: 'reco',
    plugins: [['vuepress-plugin-code-copy', true]],
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { 
                text: '瓜农的博客', 
                items: [
                    { text: '瓜农', link: 'https://melonpeasant.github.io/handbook/peasant.html' },
                    { text: '码农', link: 'https://melonpeasant.github.io/handbook/coder.html' }
                ]
            }
        ],
        subSidebar: 'auto',
        sidebar: [
            {
                title: '首页',
                path: '/',
                collapsable: false, // 不折叠
                children: [
                    { title: "必读", path: "/" }
                ]
            },
            {
              title: "Ubuntu日常操作",
              path: '/handbook/ubuntunote',
              collapsable: false, // 不折叠
              children: [
                { title: "Ubuntu-Base制作Rootfs", path: "/handbook/ubuntubase" },
                { title: "BusyBox制作Rootfs", path: "/handbook/busybox" },
                { title: "添加开机自动执行脚本", path: "/handbook/startup" },
                { title: "磁盘格式化并挂载", path: "/handbook/formatdisk" },
                { title: "系统恢复出厂设置", path: "/handbook/recover" },
                { title: "Ubuntu笔记", path: "/handbook/ubuntunote" },
              ],
            },
            {
              title: "网站搭建",
              path: '/handbook/nginxphpmysql',
              collapsable: true, // 折叠
              children: [
                { title: "Nginx+PHP+MySql", path: "/handbook/nginxphpmysql" },
                { title: "本地配置SSL证书", path: "/handbook/mkcert" },
                { title: "笔记", path: "/handbook/noteone" }
              ],
            },
            {
              title: "VuePress+GithubPages",
              path: '/handbook/vuepressdeploy',
              collapsable: true, // 折叠
              children: [
                { title: "本地搭建过程", path: "/handbook/vuepresssetup" },
                { title: "部署到Github Pages", path: "/handbook/vuepressdeploy" },
                { title: "VuePress笔记", path: "/handbook/vuepressnote" },
              ],
            },
            {
              title: "Git命令相关",
              path: '/handbook/aboutgitcmd',
              collapsable: false, // 不折叠
              children: [
                { title: "Git命令", path: "/handbook/aboutgitcmd" },
                { title: "Ubuntu配置GitHub", path: "/handbook/githubonubuntu" },
                { title: "GitHub和Gitee多账户", path: "/handbook/githubandgitee" },
                { title: "Git仓库初始化", path: "/handbook/gitreadme" }
              ],
            },
            {
              title: "WordPress相关",
              path: '/handbook/wordpress',
              collapsable: true, // 折叠
              children: [
                { title: "搭建过程", path: "/handbook/wordpress" },
                { title: "笔记", path: "/handbook/wordpressqanda"}
              ],
            },
            {
              title: "梯子相关",
              path: '/handbook/v2raywstlsweb',
              collapsable: true, // 折叠
              children: [
                { title: "V2Ray+ws+tls+web", path: "/handbook/v2raywstlsweb" },
                { title: "HYSTERIA2", path: "/handbook/hysteria2" },
                { title: "Frp服务端+客户端搭建", path: "/handbook/frpsetup" },
                { title: "打造无指纹浏览器", path: "/handbook/privateedge" }
              ],
            },
            ]
    }
  }
  