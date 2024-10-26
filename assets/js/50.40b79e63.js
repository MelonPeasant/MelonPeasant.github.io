(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{462:function(a,t,e){"use strict";e.r(t);var s=e(2),r=Object(s.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"mysql无法远程连接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql无法远程连接"}},[a._v("#")]),a._v(" MySQL无法远程连接")]),a._v(" "),t("p",[a._v("修改配置文件"),t("code",[a._v("/etc/mysql/mysql.conf.d/mysqld.cnf")]),a._v("，将"),t("code",[a._v("bind-address = 127.0.0.1")]),a._v("注释掉")]),a._v(" "),t("h2",{attrs:{id:"备份数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#备份数据库"}},[a._v("#")]),a._v(" 备份数据库")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("mysqldump -u root -p  [DATABASE_NAME] > ./[DATABASE_NAME].sql\n")])])]),t("h2",{attrs:{id:"恢复数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#恢复数据库"}},[a._v("#")]),a._v(" 恢复数据库")]),a._v(" "),t("h3",{attrs:{id:"方法一"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方法一"}},[a._v("#")]),a._v(" 方法一")]),a._v(" "),t("p",[a._v("进入对应的数据库")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("use [DATABASE_NAME];\n")])])]),t("p",[a._v("恢复数据库")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("source /var/bak/[DATABASE_NAME].sql;\n")])])]),t("h3",{attrs:{id:"方法二"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方法二"}},[a._v("#")]),a._v(" 方法二")]),a._v(" "),t("p",[a._v("直接在bash界面下操作")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("mysql -u root -p [DATABASE_NAME] < ./[DATABASE_NAME].sql\n")])])]),t("h2",{attrs:{id:"https配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#https配置"}},[a._v("#")]),a._v(" HTTPS配置")]),a._v(" "),t("h3",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[a._v("#")]),a._v(" 安装")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("apt install -y certbot python3-certbot-nginx\n")])])]),t("h3",{attrs:{id:"部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#部署"}},[a._v("#")]),a._v(" 部署")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("certbot --nginx -d domain.com -d www.domain.com\n")])])]),t("p",[a._v("返回如下信息即成功："),t("br"),a._v(" "),t("code",[a._v("Successfully received certificate.")]),t("br"),a._v(" "),t("code",[a._v("Certificate is saved at: /etc/letsencrypt/live/domain.com/fullchain.pem")]),a._v(" "),t("code",[a._v("Key is saved at: /etc/letsencrypt/live/domain.com/privkey.pem")]),t("br"),a._v(" "),t("code",[a._v("This certificate expires on 2024-09-08.")]),t("br"),a._v(" "),t("code",[a._v("These files will be updated when the certificate renews.")]),t("br"),a._v(" "),t("code",[a._v("Certbot has set up a scheduled task to automatically renew this certificate in the background.")]),t("br"),a._v(" "),t("code",[a._v("Deploying certificate")]),t("br"),a._v(" "),t("code",[a._v("Successfully deployed certificate for domain.com to /etc/nginx/conf.d/domain.conf")]),t("br"),a._v(" "),t("code",[a._v("Successfully deployed certificate for www.domain.com to /etc/nginx/conf.d/domain.conf")]),t("br"),a._v(" "),t("code",[a._v("Congratulations! You have successfully enabled HTTPS on https://domain.com and https://www.domain.com")])]),a._v(" "),t("h2",{attrs:{id:"压缩与解压"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#压缩与解压"}},[a._v("#")]),a._v(" 压缩与解压")]),a._v(" "),t("p",[a._v("压缩tar.gz")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("tar -zcvf archive.tar.gz directory\n")])])]),t("p",[a._v("解压tar.gz")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("tar -zxvf example.tar.gz\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);