---
title: XRAY支持REALITY协议
author: 麻瓜【码瓜】
date: '2024-09-03'
---
## 1、安装  
更新安装环境  
```
apt update
```  
```
apt install wget curl -y
```    
用官方脚本安装  
```  
bash -c "$(curl -L https://github.com/XTLS/Xray-install/raw/main/install-release.sh)" @ install
```  
## 2、配置  
生成uuid、key文件  
```  
cd /usr/local/bin/
```  
```  
./xray uuid > uuid
```  
```  
./xray x25519 > key
```  
查看uuid、key文件是否生成，拷贝出来待用   
```  
cat uuid
```  
``` 
cat key
```  
屏幕输出如下  
```root@USVPS:/usr/local/bin# cat uuid```  
```94b60beb-a0fd-4aff-9c7c-9a36f74022db```  
```root@USVPS:/usr/local/bin# cat key```   
```Private key: UCWnsGnHIqsCgb10JzaL7TaC9pZKJSSax9vW-QbaVkM```   
```Public key: C-ZyGgcGadi5PJvQLFGYdPf6uBJAvgtLrnC8OV02Lxc```   
修改配置文件
```  
vim /usr/local/etc/xray/config.json
```  
内容如下  
```  
{
    "inbounds": [
        {
            "listen": "0.0.0.0",
            "port": 443,
            "protocol": "vless",
            "settings": {
                "clients": [
                    {
                        "id": "94b60beb-a0fd-4aff-9c7c-9a36f74022db",
                        "flow": "xtls-rprx-vision"
                    }
                ],
                "decryption": "none"
            },
            "streamSettings": {
                "network": "tcp",
                "security": "reality",
                "realitySettings": {
                    "show": false,
                    "dest": "www.amazon.com:443",
                    "xver": 0,
                    "serverNames": [
                        "amazon.com",
                        "www.amazon.com"
                    ],
                    "privateKey": "UCWnsGnHIqsCgb10JzaL7TaC9pZKJSSax9vW-QbaVkM",
                    "minClientVer": "",
                    "maxClientVer": "",
                    "maxTimeDiff": 0,
                    "shortIds": [
                        "88",
                        "888888"
                    ]
                }
            }
        }
    ],
    "outbounds": [
        {
            "protocol": "freedom",
            "tag": "direct"
        },
        {
            "protocol": "blackhole",
            "tag": "blocked"
        }
    ]    
}
```  
## 3、BBR加速  
默认安装即可
```  
cd
```
```  
wget --no-check-certificate https://github.com/teddysun/across/raw/master/bbr.sh && chmod +x bbr.sh && ./bbr.sh
```  