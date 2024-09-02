---
title: Frp服务端+客户端搭建
author: 麻瓜【码瓜】
date: '2024-08-02'
---
## 服务端搭建  
  
配置文件```/usr/local/frps/frps.toml```  
```  
bindPort = 11502
auth.method = "token"
auth.token = "password"
vhostHTTPPort = 11506
vhostHTTPSPort = 11507
# webServer.addr = "0.0.0.0"
# webServer.port = 11508
# webServer.user = "root"
# webServer.password = "password"
transport.tls.force = false
transport.maxPortsPerClient = 20
allowPorts = [
    { single = 11503 },
    { single = 11504 },
    { start = 30000, end = 40000 }
]
```  
  
服务文件```/usr/lib/systemd/system/frps.service```  
```  
[Unit]
Description=frps
After=network.target syslog.target
Wants=network.target

[Service]
Type=simple
ExecStart=/usr/local/frps/frps -c /usr/local/frps/frps.toml
Restart=always

[Install]
WantedBy=multi-user.target
```  

开机启动  
```
systemctl enable frps.service
```  
  
## 客户端搭建  
   
配置文件```/etc/frp/frpc.toml```
```  
serverAddr = "ip or domain"
serverPort = 11502
auth.method = "token"
auth.token = "password"

[[proxies]]
name = "HiRemote"
type = "tcp"
localIP = "127.0.0.1"
localPort = 22
remotePort = 11503
```  
   
服务文件```/usr/lib/systemd/system/frpc.service```  
```  
[Unit]
Description=Frp Client
After=network.target
Wants=network.target

[Service]
Restart=on-failure
RestartSec=6s
ExecStart=/usr/bin/frpc -c /etc/frp/frpc.toml

[Install]
WantedBy=multi-user.target
``` 
  
开机启动  
```
systemctl enable frpc.service
```  