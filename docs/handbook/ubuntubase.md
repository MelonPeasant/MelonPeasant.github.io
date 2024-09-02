---
title: Ubuntu-Base制作Rootfs
author: 麻瓜【码瓜】
date: '2024-07-23'
---
## 0、环境介绍
系统环境：```Ubuntu 22.04.4 LTS```  
目标系统：```ubuntu 20.04.4 armhf```  
  
## 1、安装环境&建立目录
安装环境
```
apt update
```  
```
apt install qemu-user-static -y
```  
建立工作目录  
```
mkdir /var/rootfs
```  
```
cd /var/rootfs
```  
```
mkdir ubuntu-base
```  
## 2、下载Ubuntu Base
```
wget --no-check-certificate https://cdimage.ubuntu.com/ubuntu-base/releases/20.04/release/ubuntu-base-20.04.4-base-armhf.tar.gz
```  
```
tar -zxvf ubuntu-base-20.04.4-base-armhf.tar.gz -C ./ubuntu-base
```  
```
cd ./ubuntu-base
```  

## 3、配置QEMU 
```
cp /usr/bin/qemu-arm-static ./usr/bin/
```  
```
cp /etc/resolv.conf ./etc/resolv.conf
```
## 4、使用Chroot进入Ubuntu Base  
```
chroot ./
```  
开始操作Ubuntu Base
```
apt update
``` 
  
修改密码  
```
passwd root
```  

安装日常必须Apps（时间有点长，耐心等待15分钟左右）
```
apt install -y systemd systemd-sysv sudo net-tools ethtool ifupdown iputils-ping vim ssh bash-completion locales language-pack-en-base
```  
  
Bash自动化    
```  
vim /root/.bashrc
```  
去掉注释  
```  
if [ -f /etc/bash_completion ] && ! shopt -oq posix; then
    . /etc/bash_completion
fi
```  
  
给设备命名（包括网络名称）
``` 
echo HiNAS > /etc/hostname
``` 
  
``` 
echo 127.0.0.1 localhost > /etc/hosts
``` 
  
```
echo 127.0.0.1 HiNAS >> /etc/hosts
``` 
  
允许用root用户登录  
```
echo PermitRootLogin yes >> /etc/ssh/sshd_config
```  
  
配置挂载系统  
```
vim /etc/fstab
```  
```
# <file system>   <dir>         <type>    <options>                          <dump> <pass>
/dev/mmcblk0p9    /             ext4      defaults,noatime,errors=remount-ro 0      1
```  
  
配置调试端口
```
ln -s /lib/systemd/system/getty\@.service /etc/systemd/system/getty.target.wants/getty\@ttyAMA0.service
```  
  
配置自动获取IP  
```
echo auto eth0 > /etc/network/interfaces.d/eth0
```  
  
```
echo iface eth0 inet dhcp >> /etc/network/interfaces.d/eth0
```  
  
最后退出Chroot环境  

>CTRL+D

## 5、制作镜像
```
cd ..
```  
   
```  
mkdir rootfs
```  
```  
dd if=/dev/zero of=./rootfs.ext4 bs=1M count=1024
```  
``` 
mkfs.ext4 rootfs.ext4
```
``` 
mount -o loop rootfs.ext4 ./rootfs
```
  
```  
cp -rf ubuntu-base/* rootfs/
```
``` 
umount rootfs
```  
最后获得镜像roofs.ext4是我们需要的文件  
