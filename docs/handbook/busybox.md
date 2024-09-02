---
title: BusyBox制作Rootfs
author: 麻瓜【码瓜】
date: '2024-07-23'
---
## 介绍  
```
apt update
```
```
apt install -y gcc make gcc-arm-linux-gnueabihf libncurses5-dev bzip2
```
```
wget --no-check-certificate https://busybox.net/downloads/busybox-1.36.1.tar.bz2
```
```
tar -vxjf busybox-1.36.1.tar.bz2
```
```
mv busybox-1.36.1 busybox && cd busybox
```
```
vim Makefile
``` 
```
CROSS_COMPILE ?= /usr/bin/arm-linux-gnueabihf-
```
```
ARCH ?= arm
```
```
make defconfig
```
```
make menuconfig
```
```
make -j2 && make install
```
```
cd _install/
```
```
mkdir etc dev mnt
```
```
mkdir -p proc sys tmp mnt
```
```
mkdir -p etc/init.d/
```
```
vim etc/fstab
```
```
proc        /proc           proc         defaults        0        0
tmpfs       /tmp            tmpfs    　　defaults        0        0
sysfs       /sys            sysfs        defaults        0        0 
```
  
```
vim etc/init.d/rcS
``` 
```
echo -e "Welcome to Ubuntu"
/bin/mount -a
echo -e "Remounting the root filesystem"
mount  -o  remount,rw  /
mkdir -p /dev/pts
mount -t devpts devpts /dev/pts
echo /sbin/mdev > /proc/sys/kernel/hotplug
mdev -s 
```
```
chmod 755 etc/init.d/rcS
```
```
vim etc/inittab
```
```
::sysinit:/etc/init.d/rcS
::respawn:-/bin/sh
::askfirst:-/bin/sh
::ctrlaltdel:/bin/umount -a -r 
```
```
chmod 755 etc/inittab
```
```
cd dev
```
```
mknod console c 5 1
mknod null c 1 3
mknod tty1 c 4 1
```
```
cd ..
```

------------------------------above busybox--------------------------------------------

```
mkdir rootfs-busybox
```
```
dd if=/dev/zero of=./rootfs-busybox.ext4 bs=1M count=32
```
```
mkfs.ext4 rootfs-busybox.ext4
```
```
mount -o loop rootfs-busybox.ext4 ./rootfs-busybox
```
```
cp -rf _install/* ./rootfs-busybox
```
```
umount rootfs-busybox
```
```
gzip --best -c rootfs-busybox.ext4 > rootfs8-busybox.img.gz
```

------------------------------Dropbear--------------------------------------------
apt install gcc-arm-linux-gnueabi -y
