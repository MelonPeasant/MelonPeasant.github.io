---
title: 系统恢复出厂设置
author: 麻瓜【码瓜】
date: '2024-08-02'
---
## 说明  
mmcblk0p2：Bootargs分区，存放启动参数负责引导到哪个分区启动  
mmcblk0p7：BusyBox分区，负责自动刷机到mmcblk0p9  
mmcblk0p8：Backup分区，存放需要刷机的数据  
mmcblk0p9：Rootfs分区，日常使用的系统存放分区  
  
## Bootargs分区
启动busyboxs时，Bootargs分区
```  
baudrate=115200
ethaddr=00:01:02:03:04:05
ipaddr=192.168.1.10
netmask=255.255.255.0
gatewayip=192.168.1.1
serverip=192.168.1.1
bootcmd=mmc read 0 0x1FFFFC0 0x7000 0xA000;bootm 0x1FFFFC0
bootargs_512M=mem=512M mmz=ddr,0,0,48M vmalloc=500M
bootargs_1G=mem=1G mmz=ddr,0,0,48M vmalloc=500M
bootargs_2G=mem=2G mmz=ddr,0,0,48M vmalloc=500M
bootargs_768M=mem=768M mmz=ddr,0,0,48M vmalloc=500M
bootargs_1536M=mem=1536M mmz=ddr,0,0,48M vmalloc=500M
bootargs_3840M=mem=3840M mmz=ddr,0,0,48M vmalloc=500M
bootargs=console=ttyAMA0,115200 root=/dev/mmcblk0p7 rootfstype=ext4 rootwait blkdevparts=mmcblk0:1M(boot),1M(bootargs),4M(baseparam),4M(pqparam),4M(logo),20M(kernel),64M(busybox),512M(backup),-(rootfs)
bootdelay=0
stdin=serial
stdout=serial
stderr=serial
```  
  
启动rootfs时，Bootargs分区  
``` 
baudrate=115200
ethaddr=00:01:02:03:04:05
ipaddr=192.168.1.10
netmask=255.255.255.0
gatewayip=192.168.1.1
serverip=192.168.1.1
bootcmd=mmc read 0 0x1FFFFC0 0x7000 0xA000;bootm 0x1FFFFC0
bootargs_512M=mem=512M mmz=ddr,0,0,48M vmalloc=500M
bootargs_1G=mem=1G mmz=ddr,0,0,48M vmalloc=500M
bootargs_2G=mem=2G mmz=ddr,0,0,48M vmalloc=500M
bootargs_768M=mem=768M mmz=ddr,0,0,48M vmalloc=500M
bootargs_1536M=mem=1536M mmz=ddr,0,0,48M vmalloc=500M
bootargs_3840M=mem=3840M mmz=ddr,0,0,48M vmalloc=500M
bootargs=console=ttyAMA0,115200 root=/dev/mmcblk0p9 rootfstype=ext4 rootwait blkdevparts=mmcblk0:1M(boot),1M(bootargs),4M(baseparam),4M(pqparam),4M(logo),20M(kernel),64M(busybox),512M(backup),-(rootfs)
bootdelay=0
stdin=serial
stdout=serial
stderr=serial
```   
  
制作文件   
```  
mkbootargs -s 64 -r bootargs_input.txt -o bootargs.bin
```  
  
## Busybox分区  
```/etc/init.d/rcS```  
```  
echo -e "Welcome to Ubuntu"
/bin/mount -a
echo -e "Remounting the root filesystem"
mount  -o  remount,rw  /
mkdir -p /dev/pts
mount -t devpts devpts /dev/pts
echo /sbin/mdev > /proc/sys/kernel/hotplug
mdev -s
udhcpc

mkdir -p /backup
mount /dev/mmcblk0p8 /backup
gunzip -c /backup/rootfs.ext4.gz | dd of=/dev/mmcblk0p9 bs=1024
dd if=/backup/bootargs-9.bin of=/dev/mmcblk0p2 bs=1024 count=1024
umount /backup
reboot
```  
  
## Backup分区  
```  
bootargs-7.bin
bootargs-9.bin
rootfs.ext4.gz
```  
  
## Rootfs分区  
```/usr/bin/recover.sh```  
```  
#!/bin/bash

mkdir -p /backup
mount /dev/mmcblk0p8 /backup
dd if=/backup/bootargs-7.bin of=/dev/mmcblk0p2 bs=1024 count=1024
umount /backup
reboot
```  
赋予执行权限  
```  
chmod +x /usr/bin/recover.sh
```  