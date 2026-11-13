import{_ as a,o as n,c as p,a2 as e}from"./chunks/framework.vLhlLNVn.js";const h=JSON.parse('{"title":"Frp服务端+客户端搭建","description":"","frontmatter":{"title":"Frp服务端+客户端搭建","author":"麻瓜【码瓜】","date":"2024-08-02"},"headers":[],"relativePath":"posts/frpsetup.md","filePath":"posts/frpsetup.md","lastUpdated":1794548361000}'),t={name:"posts/frpsetup.md"};function l(i,s,o,c,r,d){return n(),p("div",null,[...s[0]||(s[0]=[e(`<h1 id="frp服务端-客户端搭建" tabindex="-1">Frp服务端+客户端搭建 <a class="header-anchor" href="#frp服务端-客户端搭建" aria-label="Permalink to &quot;Frp服务端+客户端搭建&quot;">​</a></h1><h2 id="服务端搭建" tabindex="-1">服务端搭建 <a class="header-anchor" href="#服务端搭建" aria-label="Permalink to &quot;服务端搭建&quot;">​</a></h2><p>配置文件<code>/usr/local/frps/frps.toml</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>bindPort = 11502</span></span>
<span class="line"><span>auth.method = &quot;token&quot;</span></span>
<span class="line"><span>auth.token = &quot;password&quot;</span></span>
<span class="line"><span>vhostHTTPPort = 11506</span></span>
<span class="line"><span>vhostHTTPSPort = 11507</span></span>
<span class="line"><span># webServer.addr = &quot;0.0.0.0&quot;</span></span>
<span class="line"><span># webServer.port = 11508</span></span>
<span class="line"><span># webServer.user = &quot;root&quot;</span></span>
<span class="line"><span># webServer.password = &quot;password&quot;</span></span>
<span class="line"><span>transport.tls.force = false</span></span>
<span class="line"><span>transport.maxPortsPerClient = 20</span></span>
<span class="line"><span>allowPorts = [</span></span>
<span class="line"><span>    { single = 11503 },</span></span>
<span class="line"><span>    { single = 11504 },</span></span>
<span class="line"><span>    { start = 30000, end = 40000 }</span></span>
<span class="line"><span>]</span></span></code></pre></div><p>服务文件<code>/usr/lib/systemd/system/frps.service</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[Unit]</span></span>
<span class="line"><span>Description=frps</span></span>
<span class="line"><span>After=network.target syslog.target</span></span>
<span class="line"><span>Wants=network.target</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Service]</span></span>
<span class="line"><span>Type=simple</span></span>
<span class="line"><span>ExecStart=/usr/local/frps/frps -c /usr/local/frps/frps.toml</span></span>
<span class="line"><span>Restart=always</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Install]</span></span>
<span class="line"><span>WantedBy=multi-user.target</span></span></code></pre></div><p>开机启动</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>systemctl enable frps.service</span></span></code></pre></div><h2 id="客户端搭建" tabindex="-1">客户端搭建 <a class="header-anchor" href="#客户端搭建" aria-label="Permalink to &quot;客户端搭建&quot;">​</a></h2><p>配置文件<code>/etc/frp/frpc.toml</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>serverAddr = &quot;ip or domain&quot;</span></span>
<span class="line"><span>serverPort = 11502</span></span>
<span class="line"><span>auth.method = &quot;token&quot;</span></span>
<span class="line"><span>auth.token = &quot;password&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[proxies]]</span></span>
<span class="line"><span>name = &quot;HiRemote&quot;</span></span>
<span class="line"><span>type = &quot;tcp&quot;</span></span>
<span class="line"><span>localIP = &quot;127.0.0.1&quot;</span></span>
<span class="line"><span>localPort = 22</span></span>
<span class="line"><span>remotePort = 11503</span></span></code></pre></div><p>服务文件<code>/usr/lib/systemd/system/frpc.service</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[Unit]</span></span>
<span class="line"><span>Description=Frp Client</span></span>
<span class="line"><span>After=network.target</span></span>
<span class="line"><span>Wants=network.target</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Service]</span></span>
<span class="line"><span>Restart=on-failure</span></span>
<span class="line"><span>RestartSec=6s</span></span>
<span class="line"><span>ExecStart=/usr/bin/frpc -c /etc/frp/frpc.toml</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Install]</span></span>
<span class="line"><span>WantedBy=multi-user.target</span></span></code></pre></div><p>开机启动</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>systemctl enable frpc.service</span></span></code></pre></div>`,15)])])}const g=a(t,[["render",l]]);export{h as __pageData,g as default};
