---
title: Git仓库初始化
author: 麻瓜【码瓜】
date: '2024-07-07'
---  
## 全新仓库  
```  
git init <repo>
cd <repo>
touch README.md
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:<user>/<repo>.git
git push -u origin "main"
```  
## 已有仓库
```
cd <repo>
git remote add origin git@github.com:<user>/<repo>.git
git branch -M main
git push -u origin "main"
```  
## 常用操作
```
git add .  
```  
```  
git commit -m "message"
```  
```  
git push
```  

