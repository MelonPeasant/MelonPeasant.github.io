---
title: Ubuntu22.04下搭建Nginx+PHP+MySql服务
author: 麻瓜【码瓜】
date: '2024-07-03'
---
## 搭建环境
```Ubuntu22.04```
  
## 更新apt
```
apt update
```
## 安装相应的服务  
```
apt install nginx mysql-server php-fpm php8.1-xml php-mysql php-gd -y
```
注意，确保php8.1-xml要和php需要安装的版本相对应，否则就是要安装php*.*-xml了，  
如果不能确定安装的版本，可以先不安装php8.1-xml，等安装完php确定版本后再补安装php-xml。
## 检测版本（非必须运行）
```
nginx -v
```
```
php -v
```  
```
mysql -V
```   

## 配置nginx服务
打开nginx默认配置目录  
```
cd /etc/nginx/conf.d
```
新建一个.conf配置文件（nginx会遍历该目录下所有配置文件）
```
vim xxxx.conf
```    
```
server{
        listen 80 ;
        root /var/www/wordpress;
        index index.php index.html index.htm index.nginx-debian.html;

        server_name domain.com www.domain.com;

        location / {
                try_files $uri $uri/ /index.php?$args;
        }
        location ~ \.php$ {
                include snippets/fastcgi-php.conf;
                fastcgi_pass unix:/run/php/php8.1-fpm.sock;
        }
}
```
## 配置数据库
进入数据库
```
mysql
```
进入mysql数据库，该数据库用于存放mysql设置相关的内容
```
USE mysql;
```
设置数据库登录密码  
```
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '密码';
```
设置数据库访问权限（本地访问/外部访问/限定访问）  
```
update user set host = '%' where user = 'root';
```
设置更新数据库权限
```
FLUSH PRIVILEGES;
```
退出数据库  
```
quit;
```
下次再进入数据库  
```
mysql -u root -p
```
输入密即可再次进入数据库  
## 配置php
php采用默认配置即可，如果需要自己配置，文件位置：  
```/etc/php/8.1/fpm/php.ini```
