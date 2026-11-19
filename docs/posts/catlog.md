---
title: Ubuntu目录说明
author: 麻瓜【码瓜】
date: '2026-11-19'
---
# Ubuntu目录说明
## 自己写的二进制、自己写的脚本  
优先 `/usr/local/bin`；管理员后台工具放 `/usr/local/sbin`    
  
## 目录清单（按场景）

### 1. 系统自带（apt 安装，不要手动放这里！）  

- `/usr/bin`：普通用户命令，`ls`、`nginx`、`git`、`python3`，apt 安装的程序都在这里
- `/usr/sbin`：root 管理员命令，`systemctl`、`iptables`、`sshd`
- `/bin` / `/sbin`：新版 Ubuntu 只是软链接指向 `/usr/bin`，兼容老系统，**不建议手动放东西**

> 
> 这些目录属于系统包管理，`apt upgrade` 会覆盖里面文件

### 2. 管理员手动部署（你最常用，xray 就属于这类）  

- `/usr/local/bin`：**全局可用、所有用户都能跑**，自己编译的 Go 二进制、下载的独立程序、shell/python 脚本（推荐首选）Ubuntu
  - 你的 `/usr/local/bin/xray` 就是这个规范！
- `/usr/local/sbin`：**只有 root 用的本地工具**，后台守护、运维脚本，普通用户 PATH 一般不带这个

> 
> `/usr/local` 整个目录**apt 不会碰，升级系统不会覆盖**，这是它最大优势Linux Foun...

### 3. 仅当前用户自己用（不需要 sudo）  

- `~/.local/bin`（XDG 标准，推荐），现代 Ubuntu 默认进 PATH
- `~/bin`：老传统目录，部分 shell 会自动加入 PATH

> 
> 只有你这个用户能调用，别的用户看不到，放个人小脚本、自用工具

### 4. 完整独立打包程序（比如带一堆依赖 / 资源）  

- `/opt/xxx/`：整套软件放这里（比如 `/opt/myservice/`），然后在 `/usr/local/bin` 建软链接指向主程序

> 
> 适合一整个文件夹的程序，不是单个二进制

### 5. 内部辅助脚本（不给用户直接敲命令调用）  

- `/usr/libexec/` 或者跟着服务放，systemd 内部调用，一般不在 PATH 里