---
title: GitHub和Gitee多账户
author: 麻瓜【码瓜】
date: '2024-07-07'
---
## 说明  
本文章主要是说明GitHub和Gitee多账号共存的问题  
## 全部相同  
用户名、邮箱都相同的情况下，可以公用一个id_rsa证书，证书的名称、存储的位置均为默认时，可以公用同一个证书。只需要把id_rsa.pub的内容分别填如GitHub和Gitee中即可。------>已经过证实可以正常使用    
两个系统A/B，通过sftp下载A中的证书，再通过sftp上传到B中，可以迁移证书。------>已经过证实可以正常使用
## 部分相同  
### 邮箱不同  
证书根据不同邮箱生成的，所以理论上必须生成不同的证书。
### 用户名不同
在不同项目下配置项目级的user.name应该时可以使用。------>推测，待验证  
### 不同证书  
待验证不同的情况    
-证书名字不是默认的    
-证书存储位置不是默认的    
证书存储位置默认，存储的名字不是默认的，在不更改其他配置下，无法正常使用。------>已经过证实无法正常使用   
证书存储位置不是默认，存储名字是默认的，在不更改其他配置下，无法正常使用。------>已经过证实无法正常使用   
  
解决办法：在~/.ssh/下创建config文件，指定证书名称\存储位置均可达到效果  
```  
# GitHub
Host github.com
    HostName github.com
    User <USER>
    IdentityFile ~/.ssh/Github/id_rsa_github
	
# Gitee
host gitee.com
	Hostname gitee.com
	User <USER>
	IdentityFile ~/.ssh/Gitee/id_rsa_gitee
```   
****特别注意****  
id_rsa文件的权限要改为：
```
chmod 700 ./id_rsa
```  
否则会提示证书没有授权  