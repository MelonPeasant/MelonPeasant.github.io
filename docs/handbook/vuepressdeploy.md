---
title: 部署到GitHub Pages
author: 麻瓜【码瓜】
date: '2024-07-01'
---
## 编译
在`<respositoy>.github.io`目录下使用cmd运行
```
npm run docs:build
```
## 初始化本地仓库
进入打算同步的文件夹  
```
cd docs/.vuepress/dist
```
初始化
```
git init
```
添加文件
```
git add -A
```
准备提交
```
git commit -m 'deploy'
```
## 同步到远程仓库
使用方法```git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git <branch>```  
```
git push -f git@github.com:melonpeasant/melonpeasant.github.io.git main
```