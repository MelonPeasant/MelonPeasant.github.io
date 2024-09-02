---
title: 添加开机脚本
author: 麻瓜【码瓜】
date: '2024-07-30'
---
## 说明  
网上很多都采用init.d或者rc.local来制作开机脚本，经过实验以上两种都比较麻烦，本文采用目前Ubuntu默认支持的systermd方式添加开机启动脚本    
  
## 过程  
### 制作service文件  
```
vim /usr/lib/systemd/system/startup.service
```  
```  
[Unit]
Description=Startup Script
After=network.target

[Service]
Type=oneshot
ExecStart=/usr/local/etc/startup.sh

[Install]
WantedBy=multi-user.target
```  
### 制作.sh脚本文件  
```  
vim /usr/local/etc/startup.sh
```  
```
#!/bin/bash

if [ ! -f /root/service.txt ]
then
    echo `date -R` > /root/service.txt
else
    echo `date -R` >> /root/service.txt
fi
```  
赋予执行权限
```  
chmod +x /usr/local/etc/startup.sh
```  
### 开机启动
此步骤相当于将```/usr/lib/systemd/system/startup.sh```链接到```/etc/systemd/system/multi-user.target.wants/startup.service```  
```  
systemctl enable startup.service
```
```  
systemctl daemon-reload
```  
## 总结
此方法相对于其他方法更加简单方便，也是Ubuntu现在默认的添加开机启动的方案
