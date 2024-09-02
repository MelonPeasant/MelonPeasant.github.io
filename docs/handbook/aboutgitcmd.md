---
title: Git相关命令
author: 麻瓜【码瓜】
date: '2024-07-01'
---
## Git配置信息
查看Git配置信息  
```
git config --list
```  

## Git账号设置
账号全局设置(针对系统当前用户进行设置)    
```
git config --global user.name "USERNAME"
``` 
邮箱全局设置(针对系统当前用户进行设置)   
```
git config --global user.email "EMAIL"
```  
查看账号、邮箱
```
git config --global user.name
```
```
git config --global user.email
```   
如果只正对当前项目进行设置，则不需要带参数--global，例子如下  
```
git config user.name "USERNAME"
``` 
```
git config user.email "EMAIL"
```  

## GitHub账号
查看本地登录的Github账号  
```
git credential-manager github list
```
登录GitHub账号  
```
git credential-manager github login --username <username>
```  
执行命令后会弹出窗口要求输入密码登录  
退出GitHub账号 
```
git credential-manager github logout <account>
```  


## 仓库
新建并初始化仓库
```
git init <dir>
```  
现有目录初始化  
```
git init
```  
产生新的分支并切换到新的分支  
```
git checkout -b NewBranch
```  
不带参数```-b```则是切换   
添加文件  
```
git add .
```  
添加备注  
```
git commit -m 'deploy'
```  
推送到远程仓库（main分支）
```
git push -f git@github.com:melonpeasant/melonpeasant.github.io.git main
```  
-----------------------------------------------------------------------    
将本地分支和远程分支关联  
```
git remote add origin git@github.com:<username>/<repo>.git
```  
使用上面的命令后，可以直接使用下面的命令进行推送、删除、重命名  
推送到远程仓库（main分支）
```
git push -u origin main
```   
删除远程仓库
```
git remote rm <repo>
```   
重新命名仓库
```
git remote rename <old.repo> <new.repo>
```  
-----------------------------------------------------------------------    

## 分支
列出本地分支
```
git branch
```  
列出远程分支  
```
git branch -r
```  
列出所有分支（本地+远程）
``` 
git branch -a
```
删除本地分支
```
git branch -d <branch>
```  
如果你还在一个分支上，那么 Git 是不允许你删除这个分支的。所以，请记得退出分支
```
git checkout <branch>
```  
参数```-d```是删除(```--delete```)  
参数```-D```是强行删除(```--delete --force```)
删除远程分支  
```
git push origin --delete --force remoteBranchName
```
添加```--force```会强行删除  

