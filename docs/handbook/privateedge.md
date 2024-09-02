---
title: 打造无指纹浏览器
author: 麻瓜【码瓜】
date: '2024-07-21'
---  
## 测试浏览器泄露网址  
[BrowserScan.net](https://www.browserscan.net/)  
![image](https://i.111666.best/image/tYIV927seXQDNw8zc8wGhw.png)  
  
[Whoer.net](https://whoer.net)  
![image](https://i.111666.best/image/LP0RiJ6scxLvauPWvWjR7h.png)  
如果有泄露，红框处都不会是100%。  
  
## 浏览器设置  
Settings --> Privacy, search, and services --> Privacy --> Send "Do Not Track" requests --> "Enable"  
  
## WebRTC泄露  
浏览器安装插件：```WebRTC Leak Shield```   
图标如下图：  
![image](https://i.111666.best/image/4acq7HbThsT8AZZbPqIyGN.png)  
界面如下图：  
![image](https://i.111666.best/image/HULgRYMeBTvCKf1TQR161M.png)
  
## IP Time Zone和本地时区不一致  
浏览器安装插件：```Vytal - Spoof Timezone, Geolocation & Locale```  
图标如下图:  
![image](https://i.111666.best/image/NHBN4BdC7llAZg8rp0q39O.png)    
作者的网站：[https://vytal.io/](https://vytal.io/)    
作者的Github：[https://github.com/vytal-io](https://github.com/vytal-io)  
安装后浏览时会提示扩展调试模式，通过下面的命令将提示关闭。  
界面如下图：  
![image](https://i.111666.best/image/7BRv9Oy20cZIrcV34WXqNr.png)
    
## 浏览器启动参数设置  
英文环境设置：```--lang=en-US```；   
关闭调试模式提醒：```--silent-debugger-extension-api```；  
  
```
"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" --disable-background-networking --user-data-dir="D:\Program Files\EDGE\Private" --disk-cache-dir="D:\Program Files\EDGE\Private" --silent-debugger-extension-api --lang=en-US
```  
