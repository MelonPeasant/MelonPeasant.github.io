---
title: 本地配置SSL证书
author: 麻瓜【码瓜】
date: '2024-07-03'
---
## 安装支持包
```
apt install wget libnss3-tools -y
```

## 下载Mkcert
建议挂代理下载  
```https://github.moeyy.xyz/```  
```https://mirror.ghproxy.com/```  
```https://gitdl.cn/```   
```
wget --no-check-certificate https://github.com/FiloSottile/mkcert/releases/download/v1.4.3/mkcert-v1.4.3-linux-amd64
```

## 添加到系统路径   
```
mv mkcert-v1.4.3-linux-amd64 /usr/bin/mkcert
```

## 设置执行权限
```
chmod +x /usr/bin/mkcert
```

## 验证 Mkcert 版本
```
mkcert -version
```
您应该看到以下输出：  
```v1.4.3```   

## 生成本地 CA
```
mkcert -install
```
您应该看到以下输出：  
```Created a new local CA ????```     
```The local CA is now installed in the system trust store! ??```     
```The local CA is now installed in the Firefox and/or Chrome/Chromium trust store (requires browser restart)! ????```     
您可以使用以下命令检查 CA 证书的路径：
```
mkcert -CAROOT
```
您应该看到以下输出：   
```/root/.local/share/mkcert```

## 生成本地网站证书
```
mkcert domain.com
```  
您应该看到以下输出：    
```Created a new certificate valid for the following names ????```   
``` - "domain.com"```   
```The certificate is at "./domain.com.pem" and the key at "./domain.com-key.pem" ?```   
```It will expire on 1 November 2023 ????```   

生成的证书在当前目录下   
```domain.com.pem```    
```domain.com-key.pem```   

## 启用生成的证书
将生成的证书文件复制到```/etc/ssl/```目录
```
cp domain.com* /etc/ssl/
```
## 修改nginx配置文件
```/etc/nginx/conf.d/nginx.conf```     
配置方法参考下面的代码  
```
#/etc/nginx/conf.d/nginx.conf
server{
        root /var/www/[ROOTDIR];
        index index.php index.html index.htm index.nginx-debian.html;

        server_name [DOMAIN].net;

        location / {
                try_files $uri $uri/ /index.php?$args;
        }
        location ~ \.php$ {
                include snippets/fastcgi-php.conf;
                fastcgi_pass unix:/run/php/php7.4-fpm.sock;
        }
    listen 443 ssl; 
    ssl_certificate /etc/ssl/[DOMAIN].pem; 
    ssl_certificate_key /etc/ssl/[DOMAIN]-key.pem; 
}

server{
    if ($host = www.[DOMAIN].net) {
        return 301 https://$host$request_uri;
    }
    if ($host = [DOMAIN].net) {
        return 301 https://$host$request_uri;
    }
        listen 80 ;

        server_name [DOMAIN].net www.[DOMAIN].net;
    return 404; 
}
```    

## 测试nginx配置文件
```
nginx -t
```
## 重启 Nginx 服务
```
systemctl restart nginx
```