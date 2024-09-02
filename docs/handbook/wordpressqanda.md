---
title: WordPress Q&A
author: 麻瓜【码瓜】
date: '2024-07-09'
---
## 更换域名  
修改数据库  
```  
UPDATE wp_options SET option_value = replace(option_value, 'OLD_DOMAIN', 'NEW_DOMAIN') WHERE option_name = 'home' OR option_name = 'siteurl';
```  
```  
UPDATE wp_posts SET post_content = replace( post_content, 'OLD_DOMAIN', 'NEW_DOMAIN' ) ;
```  
```   
UPDATE wp_posts SET guid = replace( guid, 'OLD_DOMAIN', 'NEW_DOMAIN' ) ;
```   

## 上传时提示权限不足
修改wp-config.php文件 
```   
 /* Add any custom values between this line and the "stop editing" line. */
 define('FS_METHOD','direct');
 
 
 /* That's all, stop editing! Happy publishing. */  
 ```  
   
## 备份WordPress
网站根目录：/var/www/wordpress   
nginx配置文件路径：/etc/nginx/conf.d/bd.conf   
数据库名称：www  
```  
root@BraniyDecor:/var/www# ls
html  wordpress
root@BraniyDecor:/var/www# tar -czf wordpress.tar.gz wordpress/
root@BraniyDecor:/var/www# ls
html  wordpress  wordpress.tar.gz
root@BraniyDecor:/var/www#
```  
```  
root@BraniyDecor:~/backup/2024.08.01# ls
wordpress.tar.gz
root@BraniyDecor:~/backup/2024.08.01# mysqldump -u root -p www > www.sql
Enter password:
root@BraniyDecor:~/backup/2024.08.01# ls
wordpress.tar.gz  www.sql
root@BraniyDecor:~/backup/2024.08.01#
```  