---
title: 笔记
author: 麻瓜【码瓜】
date: '2024-07-04'
---
## MySQL无法远程连接  
修改配置文件```/etc/mysql/mysql.conf.d/mysqld.cnf```，将```bind-address = 127.0.0.1```注释掉  

## 备份数据库  
```
mysqldump -u root -p  [DATABASE_NAME] > ./[DATABASE_NAME].sql
```

## 恢复数据库  
### 方法一   
进入对应的数据库  
```
use [DATABASE_NAME];
```
恢复数据库
```
source /var/bak/[DATABASE_NAME].sql;
```   
### 方法二  
直接在bash界面下操作  
```
mysql -u root -p [DATABASE_NAME] < ./[DATABASE_NAME].sql
```  

## HTTPS配置  
### 安装
```
apt install -y certbot python3-certbot-nginx
```   
### 部署  
```
certbot --nginx -d domain.com -d www.domain.com
```
返回如下信息即成功：  
```Successfully received certificate.```   
```Certificate is saved at: /etc/letsencrypt/live/domain.com/fullchain.pem``` 
```Key is saved at:         /etc/letsencrypt/live/domain.com/privkey.pem```   
```This certificate expires on 2024-09-08.```   
```These files will be updated when the certificate renews.```   
```Certbot has set up a scheduled task to automatically renew this certificate in the background.```   
```Deploying certificate```   
```Successfully deployed certificate for domain.com to /etc/nginx/conf.d/domain.conf```   
```Successfully deployed certificate for www.domain.com to /etc/nginx/conf.d/domain.conf```   
```Congratulations! You have successfully enabled HTTPS on https://domain.com and https://www.domain.com```   

## 压缩与解压  
压缩tar.gz  
```
tar -zcvf archive.tar.gz directory
```   
解压tar.gz  
```  
tar -zxvf example.tar.gz
```  