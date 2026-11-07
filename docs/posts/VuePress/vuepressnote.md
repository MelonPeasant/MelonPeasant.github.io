---
title: VuePress笔记
author: 麻瓜【码瓜】
date: '2024-07-30'
---
## 报错（一）  
运行```npm run docs:build```报错```Error: error:0308010C:digital envelope routines::unsupported```   
### 方法一  
直接输入如下命令  
Linux & Mac OS：  
```
export NODE_OPTIONS=--openssl-legacy-provider
```  
windows命令提示符:  
```  
set NODE_OPTIONS=--openssl-legacy-provider
```  
### 方法二  
在```package.json```文件中修改添加```SET NODE_OPTIONS=--openssl-legacy-provider```  
```
"scripts": {
   "test": "echo \"Error: no test specified\" && exit 1",
   "server": "SET NODE_OPTIONS=--openssl-legacy-provider && webpack-dev-server --env.server --env.develop --inline --max-old-space-size=3000",
   "docs:dev": "vuepress dev docs",
   "docs:build": "SET NODE_OPTIONS=--openssl-legacy-provider && vuepress build docs"
 },
```  
