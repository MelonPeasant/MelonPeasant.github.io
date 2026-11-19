---
title: 添加开机脚本
author: 麻瓜【码瓜】
date: '2024-07-30'
---
# 添加开机脚本
## 说明  
网上很多都采用init.d或者rc.local来制作开机脚本，经过实验以上两种都比较麻烦，本文采用目前Ubuntu默认支持的systermd方式添加开机启动脚本    
  
## 过程  
### 制作service文件  
```
vim /etc/systemd/system/startup.service
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
```  
systemctl enable startup.service
```  
控制台返回：  
Created symlink ```/etc/systemd/system/multi-user.target.wants/startup.service``` → ```/etc/systemd/system/startup.service.```
此步骤相当于将```/etc/systemd/system/startup.sh```链接到```/etc/systemd/system/multi-user.target.wants/startup.service```  
```  
systemctl daemon-reload
```  
## 总结
此方法相对于其他方法更加简单方便，也是Ubuntu现在默认的添加开机启动的方案 
## 再总结 
```.service```可以放三个位置，不同的位置代表的意义和优先级别也不同   
1. ```/etc/systemd/system/``` 【最高，管理员自定义】 
2. ```/run/systemd/system/``` 【运行时临时】 
3. ```/usr/lib/systemd/system/``` 【安装包自带的】         
另外：  
```
Drop-In: /etc/systemd/system/xray.service.d
             └─10-donot_touch_single_conf.conf
```
这个优先级最高，可以修改```/etc/systemd/system/```里的service文件
