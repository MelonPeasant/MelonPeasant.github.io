---
title: 磁盘格式化并挂载
author: 麻瓜【码瓜】
date: '2024-07-20'
---
## 查看磁盘情况
root@cloud:~# ```lsblk```
```
NAME                      MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
fd0                         2:0    1    4K  0 disk
loop0                       7:0    0   55M  1 loop /snap/core18/1880
loop1                       7:1    0 55.7M  1 loop /snap/core18/2829
loop2                       7:2    0 71.3M  1 loop /snap/lxd/16099
loop3                       7:3    0 38.8M  1 loop /snap/snapd/21759
loop4                       7:4    0   64M  1 loop /snap/core20/2318
loop5                       7:5    0 91.9M  1 loop /snap/lxd/24061
sda                         8:0    0   50G  0 disk
sdb                         8:16   0   40G  0 disk
├─sdb1                      8:17   0    1M  0 part
├─sdb2                      8:18   0    1G  0 part /boot
└─sdb3                      8:19   0   39G  0 part
  └─ubuntu--vg-ubuntu--lv 253:0    0   39G  0 lvm  /
sr0                        11:0    1 1024M  0 rom  
```
root@cloud:~# ```fdisk -l```
```
Disk /dev/loop0: 54.98 MiB, 57626624 bytes, 112552 sectors  
Units: sectors of 1 * 512 = 512 bytes  
Sector size (logical/physical): 512 bytes / 512 bytes  
I/O size (minimum/optimal): 512 bytes / 512 bytes  
  
  
Disk /dev/loop1: 55.68 MiB, 58363904 bytes, 113992 sectors  
Units: sectors of 1 * 512 = 512 bytes  
Sector size (logical/physical): 512 bytes / 512 bytes  
I/O size (minimum/optimal): 512 bytes / 512 bytes  
  
  
Disk /dev/loop2: 71.28 MiB, 74735616 bytes, 145968 sectors  
Units: sectors of 1 * 512 = 512 bytes  
Sector size (logical/physical): 512 bytes / 512 bytes  
I/O size (minimum/optimal): 512 bytes / 512 bytes  
  
  
Disk /dev/loop3: 38.85 MiB, 40714240 bytes, 79520 sectors  
Units: sectors of 1 * 512 = 512 bytes  
Sector size (logical/physical): 512 bytes / 512 bytes  
I/O size (minimum/optimal): 512 bytes / 512 bytes  
  
  
Disk /dev/loop4: 63.97 MiB, 67051520 bytes, 130960 sectors  
Units: sectors of 1 * 512 = 512 bytes  
Sector size (logical/physical): 512 bytes / 512 bytes  
I/O size (minimum/optimal): 512 bytes / 512 bytes  
  
  
Disk /dev/loop5: 91.85 MiB, 96292864 bytes, 188072 sectors  
Units: sectors of 1 * 512 = 512 bytes  
Sector size (logical/physical): 512 bytes / 512 bytes  
I/O size (minimum/optimal): 512 bytes / 512 bytes  
  

  
  
  
  
Disk /dev/sdb: 40 GiB, 42949672960 bytes, 83886080 sectors  
Disk model: Virtual Disk  
Units: sectors of 1 * 512 = 512 bytes  
Sector size (logical/physical): 512 bytes / 4096 bytes  
I/O size (minimum/optimal): 4096 bytes / 4096 bytes  
Disklabel type: gpt  
Disk identifier: 7D9AF8C8-F8DB-4C6A-9995-E209CABA5502  
  
Device       Start      End  Sectors Size Type  
/dev/sdb1     2048     4095     2048   1M BIOS boot  
/dev/sdb2     4096  2101247  2097152   1G Linux filesystem  
/dev/sdb3  2101248 83884031 81782784  39G Linux filesystem  
  
  
Disk /dev/sda: 50 GiB, 53687091200 bytes, 104857600 sectors    
Disk model: Virtual Disk  
Units: sectors of 1 * 512 = 512 bytes  
Sector size (logical/physical): 512 bytes / 4096 bytes  
I/O size (minimum/optimal): 4096 bytes / 4096 bytes  
  
  
Disk /dev/mapper/ubuntu--vg-ubuntu--lv: 38.102 GiB, 41871736832 bytes, 81780736 sectors  
Units: sectors of 1 * 512 = 512 bytes  
Sector size (logical/physical): 512 bytes / 4096 bytes  
I/O size (minimum/optimal): 4096 bytes / 4096 bytes
```
## 对磁盘进行分区
root@cloud:~# ```fdisk /dev/sda```
```

Welcome to fdisk (util-linux 2.34).  
Changes will remain in memory only, until you decide to write them.  
Be careful before using the write command.  
    
Device does not contain a recognized partition table.  
Created a new DOS disklabel with disk identifier 0x6d9425cf.  
```
Command (m for help): ```n```
```
Partition type   
   p   primary (0 primary, 0 extended, 4 free)  
   e   extended (container for logical partitions)
``` 
Select (default p): ```p```   
Partition number (1-4, default 1): ```1```  
First sector (2048-104857599, default 2048):  
Last sector, +/-sectors or +/-size{K,M,G,T,P} (2048-104857599, default 104857599):
```
  
Created a new partition 1 of type 'Linux' and of size 50 GiB.  
```
Command (m for help): ```w```  
```
The partition table has been altered.  
Calling ioctl() to re-read partition table.  
Syncing disks.  
  
```
## 建立磁盘文件系统
root@cloud:~# ```mkfs -t ext4 /dev/sda1```
```
mke2fs 1.45.5 (07-Jan-2020)
Discarding device blocks: done
Creating filesystem with 13106944 4k blocks and 3276800 inodes
Filesystem UUID: 1c8f1cb8-9ff2-4518-8e4f-b0e9e696b279
Superblock backups stored on blocks:
        32768, 98304, 163840, 229376, 294912, 819200, 884736, 1605632, 2654208,
        4096000, 7962624, 11239424

Checking for bad blocks (read-only test): done 
Allocating group tables: done
Writing inode tables: done
Creating journal (65536 blocks): done
Writing superblocks and filesystem accounting information: done
```
## 挂载磁盘  
root@cloud:~# ```mkdir /mnt/sda1```  
root@cloud:~# ```mount /dev/sda1 /mnt/sda1/```   
root@cloud:~# ```vim /etc/fstab```  
```
# /etc/fstab: static file system information.
#
# Use 'blkid' to print the universally unique identifier for a
# device; this may be used with UUID= as a more robust way to name devices
# that works even if disks are added and removed. See fstab(5).
#
# <file system> <mount point>   <type>  <options>       <dump>  <pass>
# / was on /dev/ubuntu-vg/ubuntu-lv during curtin installation
/dev/disk/by-id/dm-uuid-LVM-AT48KhRbtnvYlcRSO8sFlRodE7WLLS67JQM79pFFmu3U71iQq2lNsUou23Q1ok6Z / ext4 defaults 0 0
# /boot was on /dev/sda2 during curtin installation
/dev/disk/by-uuid/afcf8daf-72b6-4680-8362-937d4e054317 /boot ext4 defaults 0 0
/swap.img       none    swap    sw      0       0
UUID=1c8f1cb8-9ff2-4518-8e4f-b0e9e696b279 /mnt/sda1 ext4 defaults 0 0
```