---
title: Debian/Ubuntu安装Zerotier
author: 麻瓜【码瓜】
date: '2026-11-19'
---
# Debian/Ubuntu安装Zerotier  
假设已经在Zerotier后台创建了一个名为‘abcdefg’的网络ID，Debian/Ubuntu系统的VPS可以按下述步骤加入它。  
## 安装ZeroTier One  
你需要先在你的Debian系统上安装ZeroTier One。可以通过以下命令来进行安装：  
```
curl -s https://install.zerotier.com | sudo bash
```  
## 启动ZeroTier One    
安装完成后，启动ZeroTier One服务：  
```  
sudo systemctl start zerotier-one
```   
## 检查ZeroTier One服务状态    
确保ZeroTier One服务正常运行：  
```
sudo systemctl status zerotier-one
```
## 加入ZeroTier网络  
使用你的网络ID来加入ZeroTier网络，执行以下命令：  
```
sudo zerotier-cli join abcdefg
```  
## 检查网络连接状态   
确认已经成功加入网络：  
```
sudo zerotier-cli listnetworks
``` 
你应该看到类似以下的输出，表示你已经连接到网络：  
> 200 listnetworks  
> - abcdefg 200 join 1.2.3.4/5.6.7.8  

## 设置开机自动启动   
如果希望在系统启动时自动启动ZeroTier One服务，可以执行以下命令：  
```
sudo systemctl enable zerotier-one
``` 
这些步骤完成后，你的Debian/Ubuntu系统应该已经成功加入了ZeroTier网络ID为abcdefg的网络。接下来可以先给他手动分配一个固定的虚拟局域网IP地址，然后就可以像局域网的VPS一样，按照自己的需求进行相应的操作了。