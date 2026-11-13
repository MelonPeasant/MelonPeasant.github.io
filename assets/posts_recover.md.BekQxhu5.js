import{_ as a,o as n,c as p,a0 as e}from"./chunks/framework.Cx-5KwGw.js";const b=JSON.parse('{"title":"系统恢复出厂设置","description":"","frontmatter":{"title":"系统恢复出厂设置","author":"麻瓜【码瓜】","date":"2024-08-02"},"headers":[],"relativePath":"posts/recover.md","filePath":"posts/recover.md"}'),o={name:"posts/recover.md"};function l(t,s,i,c,r,d){return n(),p("div",null,[...s[0]||(s[0]=[e(`<h1 id="系统恢复出厂设置" tabindex="-1">系统恢复出厂设置 <a class="header-anchor" href="#系统恢复出厂设置" aria-label="Permalink to &quot;系统恢复出厂设置&quot;">​</a></h1><h2 id="说明" tabindex="-1">说明 <a class="header-anchor" href="#说明" aria-label="Permalink to &quot;说明&quot;">​</a></h2><p>mmcblk0p2：Bootargs分区，存放启动参数负责引导到哪个分区启动<br> mmcblk0p7：BusyBox分区，负责自动刷机到mmcblk0p9<br> mmcblk0p8：Backup分区，存放需要刷机的数据<br> mmcblk0p9：Rootfs分区，日常使用的系统存放分区</p><h2 id="bootargs分区" tabindex="-1">Bootargs分区 <a class="header-anchor" href="#bootargs分区" aria-label="Permalink to &quot;Bootargs分区&quot;">​</a></h2><p>启动busyboxs时，Bootargs分区</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>baudrate=115200</span></span>
<span class="line"><span>ethaddr=00:01:02:03:04:05</span></span>
<span class="line"><span>ipaddr=192.168.1.10</span></span>
<span class="line"><span>netmask=255.255.255.0</span></span>
<span class="line"><span>gatewayip=192.168.1.1</span></span>
<span class="line"><span>serverip=192.168.1.1</span></span>
<span class="line"><span>bootcmd=mmc read 0 0x1FFFFC0 0x7000 0xA000;bootm 0x1FFFFC0</span></span>
<span class="line"><span>bootargs_512M=mem=512M mmz=ddr,0,0,48M vmalloc=500M</span></span>
<span class="line"><span>bootargs_1G=mem=1G mmz=ddr,0,0,48M vmalloc=500M</span></span>
<span class="line"><span>bootargs_2G=mem=2G mmz=ddr,0,0,48M vmalloc=500M</span></span>
<span class="line"><span>bootargs_768M=mem=768M mmz=ddr,0,0,48M vmalloc=500M</span></span>
<span class="line"><span>bootargs_1536M=mem=1536M mmz=ddr,0,0,48M vmalloc=500M</span></span>
<span class="line"><span>bootargs_3840M=mem=3840M mmz=ddr,0,0,48M vmalloc=500M</span></span>
<span class="line"><span>bootargs=console=ttyAMA0,115200 root=/dev/mmcblk0p7 rootfstype=ext4 rootwait blkdevparts=mmcblk0:1M(boot),1M(bootargs),4M(baseparam),4M(pqparam),4M(logo),20M(kernel),64M(busybox),512M(backup),-(rootfs)</span></span>
<span class="line"><span>bootdelay=0</span></span>
<span class="line"><span>stdin=serial</span></span>
<span class="line"><span>stdout=serial</span></span>
<span class="line"><span>stderr=serial</span></span></code></pre></div><p>启动rootfs时，Bootargs分区</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>baudrate=115200</span></span>
<span class="line"><span>ethaddr=00:01:02:03:04:05</span></span>
<span class="line"><span>ipaddr=192.168.1.10</span></span>
<span class="line"><span>netmask=255.255.255.0</span></span>
<span class="line"><span>gatewayip=192.168.1.1</span></span>
<span class="line"><span>serverip=192.168.1.1</span></span>
<span class="line"><span>bootcmd=mmc read 0 0x1FFFFC0 0x7000 0xA000;bootm 0x1FFFFC0</span></span>
<span class="line"><span>bootargs_512M=mem=512M mmz=ddr,0,0,48M vmalloc=500M</span></span>
<span class="line"><span>bootargs_1G=mem=1G mmz=ddr,0,0,48M vmalloc=500M</span></span>
<span class="line"><span>bootargs_2G=mem=2G mmz=ddr,0,0,48M vmalloc=500M</span></span>
<span class="line"><span>bootargs_768M=mem=768M mmz=ddr,0,0,48M vmalloc=500M</span></span>
<span class="line"><span>bootargs_1536M=mem=1536M mmz=ddr,0,0,48M vmalloc=500M</span></span>
<span class="line"><span>bootargs_3840M=mem=3840M mmz=ddr,0,0,48M vmalloc=500M</span></span>
<span class="line"><span>bootargs=console=ttyAMA0,115200 root=/dev/mmcblk0p9 rootfstype=ext4 rootwait blkdevparts=mmcblk0:1M(boot),1M(bootargs),4M(baseparam),4M(pqparam),4M(logo),20M(kernel),64M(busybox),512M(backup),-(rootfs)</span></span>
<span class="line"><span>bootdelay=0</span></span>
<span class="line"><span>stdin=serial</span></span>
<span class="line"><span>stdout=serial</span></span>
<span class="line"><span>stderr=serial</span></span></code></pre></div><p>制作文件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mkbootargs -s 64 -r bootargs_input.txt -o bootargs.bin</span></span></code></pre></div><h2 id="busybox分区" tabindex="-1">Busybox分区 <a class="header-anchor" href="#busybox分区" aria-label="Permalink to &quot;Busybox分区&quot;">​</a></h2><p><code>/etc/init.d/rcS</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>echo -e &quot;Welcome to Ubuntu&quot;</span></span>
<span class="line"><span>/bin/mount -a</span></span>
<span class="line"><span>echo -e &quot;Remounting the root filesystem&quot;</span></span>
<span class="line"><span>mount  -o  remount,rw  /</span></span>
<span class="line"><span>mkdir -p /dev/pts</span></span>
<span class="line"><span>mount -t devpts devpts /dev/pts</span></span>
<span class="line"><span>echo /sbin/mdev &gt; /proc/sys/kernel/hotplug</span></span>
<span class="line"><span>mdev -s</span></span>
<span class="line"><span>udhcpc</span></span>
<span class="line"><span></span></span>
<span class="line"><span>mkdir -p /backup</span></span>
<span class="line"><span>mount /dev/mmcblk0p8 /backup</span></span>
<span class="line"><span>gunzip -c /backup/rootfs.ext4.gz | dd of=/dev/mmcblk0p9 bs=1024</span></span>
<span class="line"><span>dd if=/backup/bootargs-9.bin of=/dev/mmcblk0p2 bs=1024 count=1024</span></span>
<span class="line"><span>umount /backup</span></span>
<span class="line"><span>reboot</span></span></code></pre></div><h2 id="backup分区" tabindex="-1">Backup分区 <a class="header-anchor" href="#backup分区" aria-label="Permalink to &quot;Backup分区&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>bootargs-7.bin</span></span>
<span class="line"><span>bootargs-9.bin</span></span>
<span class="line"><span>rootfs.ext4.gz</span></span></code></pre></div><h2 id="rootfs分区" tabindex="-1">Rootfs分区 <a class="header-anchor" href="#rootfs分区" aria-label="Permalink to &quot;Rootfs分区&quot;">​</a></h2><p><code>/usr/bin/recover.sh</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span>mkdir -p /backup</span></span>
<span class="line"><span>mount /dev/mmcblk0p8 /backup</span></span>
<span class="line"><span>dd if=/backup/bootargs-7.bin of=/dev/mmcblk0p2 bs=1024 count=1024</span></span>
<span class="line"><span>umount /backup</span></span>
<span class="line"><span>reboot</span></span></code></pre></div><p>赋予执行权限</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>chmod +x /usr/bin/recover.sh</span></span></code></pre></div>`,20)])])}const u=a(o,[["render",l]]);export{b as __pageData,u as default};
