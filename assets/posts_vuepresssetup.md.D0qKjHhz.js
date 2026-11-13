import{_ as a,o as n,c as p,a0 as e}from"./chunks/framework.Cx-5KwGw.js";const u=JSON.parse('{"title":"本地搭建VuePress","description":"","frontmatter":{"title":"本地搭建VuePress","author":"麻瓜【码瓜】","date":"2024-07-01"},"headers":[],"relativePath":"posts/vuepresssetup.md","filePath":"posts/vuepresssetup.md"}'),l={name:"posts/vuepresssetup.md"};function t(i,s,o,c,d,r){return n(),p("div",null,[...s[0]||(s[0]=[e(`<h1 id="本地搭建vuepress" tabindex="-1">本地搭建VuePress <a class="header-anchor" href="#本地搭建vuepress" aria-label="Permalink to &quot;本地搭建VuePress&quot;">​</a></h1><h2 id="_0-关于vuepress" tabindex="-1">0. 关于VuePress <a class="header-anchor" href="#_0-关于vuepress" aria-label="Permalink to &quot;0. 关于VuePress&quot;">​</a></h2><p>VuePress 自然不用多说，基于 Vue 的静态网站生成器，风格简约，配置也比较简单。之所以不使用 VitePress，是因为想使用现有的主题， 而 VitePress 不兼容当前 VuePress 的生态系统，至于为什么不选择 VuePress@next，考虑到还处于 Beta 阶段，等稳定后再开始迁移。</p><h2 id="_1-本地搭建" tabindex="-1">1. 本地搭建 <a class="header-anchor" href="#_1-本地搭建" aria-label="Permalink to &quot;1. 本地搭建&quot;">​</a></h2><h3 id="本地环境一" tabindex="-1">本地环境一 <a class="header-anchor" href="#本地环境一" aria-label="Permalink to &quot;本地环境一&quot;">​</a></h3><p><code>OS:Windows 10</code><br><code>Node.js: V16.20.2</code><br><code>npm: 8.19.4</code><br><code>git: 2.45.2</code></p><h3 id="本地环境二" tabindex="-1">本地环境二 <a class="header-anchor" href="#本地环境二" aria-label="Permalink to &quot;本地环境二&quot;">​</a></h3><p><code>OS:Ubuntu 20.04.6 LTS</code><br><code>Node.js: v18.19.0</code><br><code>npm: 10.2.3</code><br><code>git: 2.25.1</code></p><h3 id="创建并进入一个新目录" tabindex="-1">创建并进入一个新目录 <a class="header-anchor" href="#创建并进入一个新目录" aria-label="Permalink to &quot;创建并进入一个新目录&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mkdir starter &amp;&amp; cd starter</span></span></code></pre></div><h3 id="初始化" tabindex="-1">初始化 <a class="header-anchor" href="#初始化" aria-label="Permalink to &quot;初始化&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm init -y</span></span></code></pre></div><h3 id="安装为本地依赖" tabindex="-1">安装为本地依赖 <a class="header-anchor" href="#安装为本地依赖" aria-label="Permalink to &quot;安装为本地依赖&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm install -D vuepress</span></span></code></pre></div><h3 id="创建readme-md当作主页" tabindex="-1">创建README.md当作主页 <a class="header-anchor" href="#创建readme-md当作主页" aria-label="Permalink to &quot;创建README.md当作主页&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mkdir docs &amp;&amp; echo &#39;# Hello VuePress&#39; &gt; docs/README.md</span></span></code></pre></div><h3 id="在-package-json-中添加一些-scripts" tabindex="-1">在 package.json 中添加一些 scripts <a class="header-anchor" href="#在-package-json-中添加一些-scripts" aria-label="Permalink to &quot;在 package.json 中添加一些 scripts&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;scripts&quot;: {</span></span>
<span class="line"><span>    &quot;docs:dev&quot;: &quot;vuepress dev docs&quot;,</span></span>
<span class="line"><span>    &quot;docs:build&quot;: &quot;vuepress build docs&quot;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_2-基础配置" tabindex="-1">2. 基础配置 <a class="header-anchor" href="#_2-基础配置" aria-label="Permalink to &quot;2. 基础配置&quot;">​</a></h2><p>在docs目录下创建.vuepress目录，在.vuepress目录下创建config.js，整体目录如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.</span></span>
<span class="line"><span>├─ docs</span></span>
<span class="line"><span>│  ├─ README.md</span></span>
<span class="line"><span>│  └─ .vuepress</span></span>
<span class="line"><span>│     └─ config.js</span></span>
<span class="line"><span>└─ package.json</span></span></code></pre></div><p>config.js文件内添加如下内容：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  title: &#39;网站标题&#39;,</span></span>
<span class="line"><span>  description: &#39;网站描述&#39;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_3-添加导航栏" tabindex="-1">3. 添加导航栏 <a class="header-anchor" href="#_3-添加导航栏" aria-label="Permalink to &quot;3. 添加导航栏&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>module.exports = {</span></span>
<span class="line"><span>    title: &#39;...&#39;,</span></span>
<span class="line"><span>    description: &#39;...&#39;,</span></span>
<span class="line"><span>    themeConfig: {</span></span>
<span class="line"><span>        nav: [</span></span>
<span class="line"><span>            { text: &#39;首页&#39;, link: &#39;/&#39; },</span></span>
<span class="line"><span>            { </span></span>
<span class="line"><span>                text: &#39;瓜农的博客&#39;, </span></span>
<span class="line"><span>                items: [</span></span>
<span class="line"><span>                    { text: &#39;瓜农&#39;, link: &#39;https://melonpeasant.github.io/handbook/peasant.html&#39; },</span></span>
<span class="line"><span>                    { text: &#39;码农&#39;, link: &#39;https://melonpeasant.github.io/handbook/coder.html&#39; }</span></span>
<span class="line"><span>                ]</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        ],</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_4-添加侧边栏" tabindex="-1">4. 添加侧边栏 <a class="header-anchor" href="#_4-添加侧边栏" aria-label="Permalink to &quot;4. 添加侧边栏&quot;">​</a></h2><p>添加一些md文档，目录结构如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.</span></span>
<span class="line"><span>├─ docs</span></span>
<span class="line"><span>│  ├─ README.md</span></span>
<span class="line"><span>│  └─ .vuepress</span></span>
<span class="line"><span>│     └─ config.js</span></span>
<span class="line"><span>|  └─ handbook</span></span>
<span class="line"><span>|	    └─ coder.md</span></span>
<span class="line"><span>|	    └─ mkcert.md</span></span>
<span class="line"><span>|	    └─ nginxphpmysql.md</span></span>
<span class="line"><span>|	    └─ noteone.md</span></span>
<span class="line"><span>|	    └─ peasant.md</span></span>
<span class="line"><span>|	    └─ vuepressdeploy.md</span></span>
<span class="line"><span>|	    └─ vupresssetup.md</span></span>
<span class="line"><span>|	    └─ wordpress.md</span></span>
<span class="line"><span>└─ package.json</span></span></code></pre></div><p>修改docs/.vuepress/config.js文件，添加sidebar部分</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>        sidebar: [</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                title: &#39;首页&#39;,</span></span>
<span class="line"><span>                path: &#39;/&#39;,</span></span>
<span class="line"><span>                collapsable: false, // 不折叠</span></span>
<span class="line"><span>                children: [</span></span>
<span class="line"><span>                    { title: &quot;必读&quot;, path: &quot;/&quot; }</span></span>
<span class="line"><span>                ]</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>              title: &quot;Ubuntu22.04搭建网站&quot;,</span></span>
<span class="line"><span>              path: &#39;/handbook/nginxphpmysql&#39;,</span></span>
<span class="line"><span>              collapsable: false, // 不折叠</span></span>
<span class="line"><span>              children: [</span></span>
<span class="line"><span>                { title: &quot;Nginx+PHP+MySql&quot;, path: &quot;/handbook/nginxphpmysql&quot; },</span></span>
<span class="line"><span>                { title: &quot;本地配置SSL证书&quot;, path: &quot;/handbook/mkcert&quot; },</span></span>
<span class="line"><span>                { title: &quot;笔记&quot;, path: &quot;/handbook/noteone&quot; }</span></span>
<span class="line"><span>              ],</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>              title: &quot;VuePress+GithubPages&quot;,</span></span>
<span class="line"><span>              path: &#39;/handbook/vuepressdeploy&#39;,</span></span>
<span class="line"><span>              collapsable: false, // 不折叠</span></span>
<span class="line"><span>              children: [</span></span>
<span class="line"><span>                { title: &quot;本地搭建过程&quot;, path: &quot;/handbook/vuepresssetup&quot; },</span></span>
<span class="line"><span>                { title: &quot;部署到Github Pages&quot;, path: &quot;/handbook/vuepressdeploy&quot; }</span></span>
<span class="line"><span>              ],</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>              title: &quot;WordPress搭建&quot;,</span></span>
<span class="line"><span>              path: &#39;/handbook/wordpress&#39;,</span></span>
<span class="line"><span>              collapsable: true, // 折叠</span></span>
<span class="line"><span>              children: [</span></span>
<span class="line"><span>                { title: &quot;搭建过程&quot;, path: &quot;/handbook/wordpress&quot; }</span></span>
<span class="line"><span>              ],</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            ]</span></span></code></pre></div><h2 id="_5-更换主题" tabindex="-1">5. 更换主题 <a class="header-anchor" href="#_5-更换主题" aria-label="Permalink to &quot;5. 更换主题&quot;">​</a></h2><h3 id="安装主题" tabindex="-1">安装主题 <a class="header-anchor" href="#安装主题" aria-label="Permalink to &quot;安装主题&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm install vuepress-theme-reco --save-dev</span></span></code></pre></div><p>修改docs/.vuepress/config.js文件，添加主题导入部分</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  // ......</span></span>
<span class="line"><span>  theme: &#39;reco&#39;</span></span>
<span class="line"><span>  // ......</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_6-安装插件" tabindex="-1">6.安装插件 <a class="header-anchor" href="#_6-安装插件" aria-label="Permalink to &quot;6.安装插件&quot;">​</a></h2><h3 id="代码复制插件" tabindex="-1">代码复制插件 <a class="header-anchor" href="#代码复制插件" aria-label="Permalink to &quot;代码复制插件&quot;">​</a></h3><p>安装</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm install vuepress-plugin-code-copy</span></span></code></pre></div><p>在.vuepress/config.js添加plugins</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>module.exports = {</span></span>
<span class="line"><span>    //......</span></span>
<span class="line"><span>    plugins: [[&#39;vuepress-plugin-code-copy&#39;, true]]</span></span>
<span class="line"><span>    //......</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>可以自定义样式</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  //......</span></span>
<span class="line"><span>  plugins: [</span></span>
<span class="line"><span>    [&quot;vuepress-plugin-code-copy&quot;, {</span></span>
<span class="line"><span>        selector: String,</span></span>
<span class="line"><span>        align: String,</span></span>
<span class="line"><span>        color: String,</span></span>
<span class="line"><span>        backgroundTransition: Boolean,</span></span>
<span class="line"><span>        backgroundColor: String,</span></span>
<span class="line"><span>        successText: String</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>  //......</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_7-添加文章信息" tabindex="-1">7. 添加文章信息 <a class="header-anchor" href="#_7-添加文章信息" aria-label="Permalink to &quot;7. 添加文章信息&quot;">​</a></h2><p>每个md文档在头部添加如下信息</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>---</span></span>
<span class="line"><span>title: 本地配置SSL证书</span></span>
<span class="line"><span>author: 麻瓜【码瓜】</span></span>
<span class="line"><span>date: &#39;2024-07-03&#39;</span></span>
<span class="line"><span>---</span></span></code></pre></div><h2 id="_8-设置语言" tabindex="-1">8. 设置语言 <a class="header-anchor" href="#_8-设置语言" aria-label="Permalink to &quot;8. 设置语言&quot;">​</a></h2><p>修改docs/.vuepress/config.js文件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  //......</span></span>
<span class="line"><span>  locales: {</span></span>
<span class="line"><span>    &#39;/&#39;: {</span></span>
<span class="line"><span>      lang: &#39;zh-CN&#39;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  //......</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_9-开启目录结构" tabindex="-1">9. 开启目录结构 <a class="header-anchor" href="#_9-开启目录结构" aria-label="Permalink to &quot;9. 开启目录结构&quot;">​</a></h2><p>将左边子导航栏移到右边</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  //......</span></span>
<span class="line"><span>  themeConfig: {</span></span>
<span class="line"><span>    subSidebar: &#39;auto&#39;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  //......</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_10-修改主题颜色" tabindex="-1">10. 修改主题颜色 <a class="header-anchor" href="#_10-修改主题颜色" aria-label="Permalink to &quot;10. 修改主题颜色&quot;">​</a></h2><p>创建.vuepress/styles/palette.styl 文件，添加如下信息:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$accentColor = #3178c6</span></span></code></pre></div><p>接下来就是部署到你的服务器或者Github Pages上了，可以参考<a href="https://melonpeasant.github.io/handbook/vuepressdeploy.html" target="_blank" rel="noreferrer">部署到GitHub Pages</a>。</p>`,56)])])}const b=a(l,[["render",t]]);export{u as __pageData,b as default};
