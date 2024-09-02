---
title: Ubuntu笔记
author: 麻瓜【码瓜】
date: '2024-07-22'
---  
## 生成UUID
```
cat /proc/sys/kernel/random/uuid
```  
  
## 提取Json字段  
``` 
jq '{字段}' file.json > newfile.json
```  

## 压缩与解压   
### tar.gz  
  
压缩文件  
```tar -zcvf archive.tar.gz directory```   
* -z: 表示要使用 gzip 进行压缩。  
* -c: 表示创建新的归档文件。  
* -v: 表示详细输出，列出被添加到归档中的文件。  
* -f: archive.tar.gz: 指定归档文件的名称为 archive.tar.gz。   
   
解压文件    
```tar -zxvf archive.tar.gz```    
* -z: 表示要使用 gzip 解压归档文件。  
* -x: 表示解压操作。  
* -v: 表示详细输出，列出被解压的文件。  
* -f: example.tar.gz: 指定要解压的归档文件的名称为 example.tar.gz。  
  
### 总结  
压缩  
```  
tar –cvf jpg.tar *.jpg       // 将目录里所有jpg文件打包成 jpg.tar
tar –czf jpg.tar.gz *.jpg    // 将目录里所有jpg文件打包成 jpg.tar 后，并且将其用 gzip 压缩，生成一个 gzip 压缩过的包，命名为 jpg.tar.gz 
tar –cjf jpg.tar.bz2 *.jpg   // 将目录里所有jpg文件打包成 jpg.tar 后，并且将其用 bzip2 压缩，生成一个 bzip2 压缩过的包，命名为jpg.tar.bz2 
tar –cZf jpg.tar.Z *.jpg     // 将目录里所有 jpg 文件打包成 jpg.tar 后，并且将其用 compress 压缩，生成一个 umcompress 压缩过的包，命名为jpg.tar.Z 
rar a jpg.rar *.jpg          // rar格式的压缩，需要先下载 rar for linux 
zip jpg.zip *.jpg            // zip格式的压缩，需要先下载 zip for linux
```  
解压  
```  
tar –xvf file.tar         // 解压 tar 包 
tar -xzvf file.tar.gz     // 解压 tar.gz 
tar -xjvf file.tar.bz2    // 解压 tar.bz2 
tar –xZvf file.tar.Z      // 解压 tar.Z 
unrar e file.rar          // 解压 rar 
unzip file.zip            // 解压 zip 
```  
总结  
```  
1、*.tar 用 tar –xvf 解压 
2、*.gz 用 gzip -d或者gunzip 解压 
3、*.tar.gz和*.tgz 用 tar –xzf 解压 
4、*.bz2 用 bzip2 -d或者用bunzip2 解压 
5、*.tar.bz2用tar –xjf 解压 
6、*.Z 用 uncompress 解压 
7、*.tar.Z 用tar –xZf 解压 
8、*.rar 用 unrar e解压 
9、*.zip 用 unzip 解压
``` 