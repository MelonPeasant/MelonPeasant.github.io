---
title: 本地搭建VuePress
author: 麻瓜【码瓜】
date: '2024-07-01'
---
## 0. 关于VuePress  
VuePress 自然不用多说，基于 Vue 的静态网站生成器，风格简约，配置也比较简单。之所以不使用 VitePress，是因为想使用现有的主题， 而 VitePress 不兼容当前 VuePress 的生态系统，至于为什么不选择 VuePress@next，考虑到还处于 Beta 阶段，等稳定后再开始迁移。  

## 1. 本地搭建  
### 本地环境一  
```OS:Windows 10```   
```Node.js: V16.20.2```   
```npm: 8.19.4```   
```git: 2.45.2```  
### 本地环境二  
```OS:Ubuntu 20.04.6 LTS```   
```Node.js: v18.19.0```   
```npm: 10.2.3```   
```git: 2.25.1```  

### 创建并进入一个新目录  
```
mkdir starter && cd starter
```  
### 初始化
```
npm init -y
```  
### 安装为本地依赖  
```
npm install -D vuepress
```  
### 创建README.md当作主页  
```
mkdir docs && echo '# Hello VuePress' > docs/README.md
```
### 在 package.json 中添加一些 scripts  
```
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```   

## 2. 基础配置   
在docs目录下创建.vuepress目录，在.vuepress目录下创建config.js，整体目录如下：  
```
.
├─ docs
│  ├─ README.md
│  └─ .vuepress
│     └─ config.js
└─ package.json
```  
config.js文件内添加如下内容：
```
module.exports = {
  title: '网站标题',
  description: '网站描述'
}
```  
## 3. 添加导航栏   
```  
module.exports = {
    title: '...',
    description: '...',
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
    }
}
```  

## 4. 添加侧边栏  
添加一些md文档，目录结构如下：  
```
.
├─ docs
│  ├─ README.md
│  └─ .vuepress
│     └─ config.js
|  └─ handbook
|	    └─ coder.md
|	    └─ mkcert.md
|	    └─ nginxphpmysql.md
|	    └─ noteone.md
|	    └─ peasant.md
|	    └─ vuepressdeploy.md
|	    └─ vupresssetup.md
|	    └─ wordpress.md
└─ package.json
```   
修改docs/.vuepress/config.js文件，添加sidebar部分  
```
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
              title: "Ubuntu22.04搭建网站",
              path: '/handbook/nginxphpmysql',
              collapsable: false, // 不折叠
              children: [
                { title: "Nginx+PHP+MySql", path: "/handbook/nginxphpmysql" },
                { title: "本地配置SSL证书", path: "/handbook/mkcert" },
                { title: "笔记", path: "/handbook/noteone" }
              ],
            },
            {
              title: "VuePress+GithubPages",
              path: '/handbook/vuepressdeploy',
              collapsable: false, // 不折叠
              children: [
                { title: "本地搭建过程", path: "/handbook/vuepresssetup" },
                { title: "部署到Github Pages", path: "/handbook/vuepressdeploy" }
              ],
            },
            {
              title: "WordPress搭建",
              path: '/handbook/wordpress',
              collapsable: true, // 折叠
              children: [
                { title: "搭建过程", path: "/handbook/wordpress" }
              ],
            },
            ]
```  
## 5. 更换主题  
### 安装主题  
```
npm install vuepress-theme-reco --save-dev
```  
修改docs/.vuepress/config.js文件，添加主题导入部分  
```
module.exports = {
  // ......
  theme: 'reco'
  // ......
} 
```  
## 6.安装插件  
### 代码复制插件  
安装  
```
npm install vuepress-plugin-code-copy
```  
在.vuepress/config.js添加plugins   
``` 
module.exports = {
    //......
    plugins: [['vuepress-plugin-code-copy', true]]
    //......
}

```  
可以自定义样式  
```  
module.exports = {
  //......
  plugins: [
    ["vuepress-plugin-code-copy", {
        selector: String,
        align: String,
        color: String,
        backgroundTransition: Boolean,
        backgroundColor: String,
        successText: String
        }
    ]
  ]
  //......
}
```  

## 7. 添加文章信息  
每个md文档在头部添加如下信息  

```
---
title: 本地配置SSL证书
author: 麻瓜【码瓜】
date: '2024-07-03'
---
```  

## 8. 设置语言  
修改docs/.vuepress/config.js文件  
```
module.exports = {
  //......
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  //......
}  
```  

## 9. 开启目录结构  
将左边子导航栏移到右边  
```
module.exports = {
  //......
  themeConfig: {
    subSidebar: 'auto'
  }
  //......
}
```  

## 10. 修改主题颜色  
创建.vuepress/styles/palette.styl 文件，添加如下信息:
```
$accentColor = #3178c6
``` 
  
    
接下来就是部署到你的服务器或者Github Pages上了，可以参考[部署到GitHub Pages](https://melonpeasant.github.io/handbook/vuepressdeploy.html)。