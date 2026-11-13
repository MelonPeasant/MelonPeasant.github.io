import{_ as a,o as n,c as e,a0 as p}from"./chunks/framework.Cx-5KwGw.js";const u=JSON.parse('{"title":"搭建HY2服务器","description":"","frontmatter":{"title":"搭建HY2服务器","author":"麻瓜【码瓜】","date":"2024-07-17"},"headers":[],"relativePath":"posts/hysteria2.md","filePath":"posts/hysteria2.md"}'),t={name:"posts/hysteria2.md"};function i(l,s,r,c,o,h){return n(),e("div",null,[...s[0]||(s[0]=[p(`<h2 id="_0、关于" tabindex="-1">0、关于 <a class="header-anchor" href="#_0、关于" aria-label="Permalink to &quot;0、关于&quot;">​</a></h2><p>Hysteria是底层传输基于udp的加密代理协议，对比目前使用的ss、vmess、vless、trojan等协议，Hysteria在绕过防火墙审查的同时还能大幅提升上网速度，这是因为Hysteria修改了quic的拥塞控制算法。最近Hysteria2更新到了2.0版本，大幅提升了性能和稳定性，支持反代伪装，增加抗审查能力。</p><h2 id="_1、安装部署" tabindex="-1">1、安装部署 <a class="header-anchor" href="#_1、安装部署" aria-label="Permalink to &quot;1、安装部署&quot;">​</a></h2><h3 id="一键安装hysteria2" tabindex="-1">一键安装Hysteria2 <a class="header-anchor" href="#一键安装hysteria2" aria-label="Permalink to &quot;一键安装Hysteria2&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>bash &lt;(curl -fsSL https://get.hy2.sh/)</span></span></code></pre></div><h3 id="设置开机自启" tabindex="-1">设置开机自启 <a class="header-anchor" href="#设置开机自启" aria-label="Permalink to &quot;设置开机自启&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>systemctl enable hysteria-server.service</span></span></code></pre></div><h3 id="生成自签证书" tabindex="-1">生成自签证书 <a class="header-anchor" href="#生成自签证书" aria-label="Permalink to &quot;生成自签证书&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>openssl req -x509 -nodes -newkey ec:&lt;(openssl ecparam -name prime256v1) -keyout /etc/hysteria/server.key -out /etc/hysteria/server.crt -subj &quot;/CN=bing.com&quot; -days 365 &amp;&amp; sudo chown hysteria /etc/hysteria/server.key &amp;&amp; sudo chown hysteria /etc/hysteria/server.crt</span></span></code></pre></div><h3 id="服务器配置文件" tabindex="-1">服务器配置文件 <a class="header-anchor" href="#服务器配置文件" aria-label="Permalink to &quot;服务器配置文件&quot;">​</a></h3><p>/etc/hysteria/config.yaml</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>listen: :port</span></span>
<span class="line"><span></span></span>
<span class="line"><span>tls:</span></span>
<span class="line"><span>  cert: /etc/hysteria/server.crt</span></span>
<span class="line"><span>  key: /etc/hysteria/server.key</span></span>
<span class="line"><span></span></span>
<span class="line"><span>quic:</span></span>
<span class="line"><span>  initStreamReceiveWindow: 16777216</span></span>
<span class="line"><span>  maxStreamReceiveWindow: 16777216</span></span>
<span class="line"><span>  initConnReceiveWindow: 33554432</span></span>
<span class="line"><span>  maxConnReceiveWindow: 33554432</span></span>
<span class="line"><span></span></span>
<span class="line"><span>auth:</span></span>
<span class="line"><span>  type: password</span></span>
<span class="line"><span>  password: passwords</span></span>
<span class="line"><span></span></span>
<span class="line"><span>masquerade:</span></span>
<span class="line"><span>  type: proxy</span></span>
<span class="line"><span>  proxy:</span></span>
<span class="line"><span>    url: https://fakesite.com</span></span>
<span class="line"><span>    rewriteHost: true</span></span></code></pre></div><h2 id="_2、补充说明" tabindex="-1">2、补充说明 <a class="header-anchor" href="#_2、补充说明" aria-label="Permalink to &quot;2、补充说明&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#启动Hysteria2</span></span>
<span class="line"><span>systemctl start hysteria-server.service</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#重启Hysteria2</span></span>
<span class="line"><span>systemctl restart hysteria-server.service</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#查看Hysteria2状态</span></span>
<span class="line"><span>systemctl status hysteria-server.service</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#停止Hysteria2</span></span>
<span class="line"><span>systemctl stop hysteria-server.service</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#设置开机自启</span></span>
<span class="line"><span>systemctl enable hysteria-server.service</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#查看日志</span></span>
<span class="line"><span>journalctl -u hysteria-server.service</span></span></code></pre></div>`,14)])])}const y=a(t,[["render",i]]);export{u as __pageData,y as default};
