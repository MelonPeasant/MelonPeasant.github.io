---
title: Ubuntu配置GitHub
author: 麻瓜【码瓜】
date: '2024-07-06'
---
## 系统源更新  
```
sudo apt update
```  
## 安装Git  
```
sudo apt install git -y
```  
## 配置GitHub证书
```
ssh-keygen -t rsa -C "xxx@xxx.com"
```   
邮箱为当时注册GitHub账号时的邮箱，
## 复制证书到Github网站
```
cat ~/.ssh/id_rsa.pub
```  
将显示的内容复制到```GitHub账号``` -> ```Settings``` -> ```SSH and GPG keys``` -> ```New SSH Key``` 中  
## 配置用户名和邮箱
```
git config user.name "USERNAME"
```
```
git config user.email "EMAIL"
```
## 测试
```
ssh -T git@github.com
```
显示```You've successfully authenticated```信息，表明设置成功！