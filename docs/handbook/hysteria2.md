---
title: 搭建HY2服务器
author: 麻瓜【码瓜】
date: '2024-07-17'
---  
## 0、关于
Hysteria是底层传输基于udp的加密代理协议，对比目前使用的ss、vmess、vless、trojan等协议，Hysteria在绕过防火墙审查的同时还能大幅提升上网速度，这是因为Hysteria修改了quic的拥塞控制算法。最近Hysteria2更新到了2.0版本，大幅提升了性能和稳定性，支持反代伪装，增加抗审查能力。  
## 1、安装部署  
### 一键安装Hysteria2  
```  
bash <(curl -fsSL https://get.hy2.sh/)
```  
### 设置开机自启  
```  
systemctl enable hysteria-server.service
```  
### 生成自签证书  
```  
openssl req -x509 -nodes -newkey ec:<(openssl ecparam -name prime256v1) -keyout /etc/hysteria/server.key -out /etc/hysteria/server.crt -subj "/CN=bing.com" -days 365 && sudo chown hysteria /etc/hysteria/server.key && sudo chown hysteria /etc/hysteria/server.crt  
```
### 服务器配置文件  
/etc/hysteria/config.yaml  
```  
listen: :port

tls:
  cert: /etc/hysteria/server.crt
  key: /etc/hysteria/server.key

quic:
  initStreamReceiveWindow: 16777216
  maxStreamReceiveWindow: 16777216
  initConnReceiveWindow: 33554432
  maxConnReceiveWindow: 33554432

auth:
  type: password
  password: passwords

masquerade:
  type: proxy
  proxy:
    url: https://fakesite.com
    rewriteHost: true

```  
## 2、补充说明  
```  
#启动Hysteria2
systemctl start hysteria-server.service

#重启Hysteria2
systemctl restart hysteria-server.service

#查看Hysteria2状态
systemctl status hysteria-server.service

#停止Hysteria2
systemctl stop hysteria-server.service

#设置开机自启
systemctl enable hysteria-server.service

#查看日志
journalctl -u hysteria-server.service  
``` 