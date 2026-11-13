import{_ as n,o as a,c as p,a0 as e}from"./chunks/framework.Cx-5KwGw.js";const u=JSON.parse('{"title":"磁盘格式化并挂载","description":"","frontmatter":{"title":"磁盘格式化并挂载","author":"麻瓜【码瓜】","date":"2024-07-20"},"headers":[],"relativePath":"posts/formatdisk.md","filePath":"posts/formatdisk.md"}'),l={name:"posts/formatdisk.md"};function i(t,s,o,c,d,r){return a(),p("div",null,[...s[0]||(s[0]=[e(`<h1 id="磁盘格式化并挂载" tabindex="-1">磁盘格式化并挂载 <a class="header-anchor" href="#磁盘格式化并挂载" aria-label="Permalink to &quot;磁盘格式化并挂载&quot;">​</a></h1><h2 id="查看磁盘情况" tabindex="-1">查看磁盘情况 <a class="header-anchor" href="#查看磁盘情况" aria-label="Permalink to &quot;查看磁盘情况&quot;">​</a></h2><p>root@cloud:~# <code>lsblk</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>NAME                      MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT</span></span>
<span class="line"><span>fd0                         2:0    1    4K  0 disk</span></span>
<span class="line"><span>loop0                       7:0    0   55M  1 loop /snap/core18/1880</span></span>
<span class="line"><span>loop1                       7:1    0 55.7M  1 loop /snap/core18/2829</span></span>
<span class="line"><span>loop2                       7:2    0 71.3M  1 loop /snap/lxd/16099</span></span>
<span class="line"><span>loop3                       7:3    0 38.8M  1 loop /snap/snapd/21759</span></span>
<span class="line"><span>loop4                       7:4    0   64M  1 loop /snap/core20/2318</span></span>
<span class="line"><span>loop5                       7:5    0 91.9M  1 loop /snap/lxd/24061</span></span>
<span class="line"><span>sda                         8:0    0   50G  0 disk</span></span>
<span class="line"><span>sdb                         8:16   0   40G  0 disk</span></span>
<span class="line"><span>├─sdb1                      8:17   0    1M  0 part</span></span>
<span class="line"><span>├─sdb2                      8:18   0    1G  0 part /boot</span></span>
<span class="line"><span>└─sdb3                      8:19   0   39G  0 part</span></span>
<span class="line"><span>  └─ubuntu--vg-ubuntu--lv 253:0    0   39G  0 lvm  /</span></span>
<span class="line"><span>sr0                        11:0    1 1024M  0 rom</span></span></code></pre></div><p>root@cloud:~# <code>fdisk -l</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Disk /dev/loop0: 54.98 MiB, 57626624 bytes, 112552 sectors  </span></span>
<span class="line"><span>Units: sectors of 1 * 512 = 512 bytes  </span></span>
<span class="line"><span>Sector size (logical/physical): 512 bytes / 512 bytes  </span></span>
<span class="line"><span>I/O size (minimum/optimal): 512 bytes / 512 bytes  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>Disk /dev/loop1: 55.68 MiB, 58363904 bytes, 113992 sectors  </span></span>
<span class="line"><span>Units: sectors of 1 * 512 = 512 bytes  </span></span>
<span class="line"><span>Sector size (logical/physical): 512 bytes / 512 bytes  </span></span>
<span class="line"><span>I/O size (minimum/optimal): 512 bytes / 512 bytes  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>Disk /dev/loop2: 71.28 MiB, 74735616 bytes, 145968 sectors  </span></span>
<span class="line"><span>Units: sectors of 1 * 512 = 512 bytes  </span></span>
<span class="line"><span>Sector size (logical/physical): 512 bytes / 512 bytes  </span></span>
<span class="line"><span>I/O size (minimum/optimal): 512 bytes / 512 bytes  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>Disk /dev/loop3: 38.85 MiB, 40714240 bytes, 79520 sectors  </span></span>
<span class="line"><span>Units: sectors of 1 * 512 = 512 bytes  </span></span>
<span class="line"><span>Sector size (logical/physical): 512 bytes / 512 bytes  </span></span>
<span class="line"><span>I/O size (minimum/optimal): 512 bytes / 512 bytes  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>Disk /dev/loop4: 63.97 MiB, 67051520 bytes, 130960 sectors  </span></span>
<span class="line"><span>Units: sectors of 1 * 512 = 512 bytes  </span></span>
<span class="line"><span>Sector size (logical/physical): 512 bytes / 512 bytes  </span></span>
<span class="line"><span>I/O size (minimum/optimal): 512 bytes / 512 bytes  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>Disk /dev/loop5: 91.85 MiB, 96292864 bytes, 188072 sectors  </span></span>
<span class="line"><span>Units: sectors of 1 * 512 = 512 bytes  </span></span>
<span class="line"><span>Sector size (logical/physical): 512 bytes / 512 bytes  </span></span>
<span class="line"><span>I/O size (minimum/optimal): 512 bytes / 512 bytes  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>Disk /dev/sdb: 40 GiB, 42949672960 bytes, 83886080 sectors  </span></span>
<span class="line"><span>Disk model: Virtual Disk  </span></span>
<span class="line"><span>Units: sectors of 1 * 512 = 512 bytes  </span></span>
<span class="line"><span>Sector size (logical/physical): 512 bytes / 4096 bytes  </span></span>
<span class="line"><span>I/O size (minimum/optimal): 4096 bytes / 4096 bytes  </span></span>
<span class="line"><span>Disklabel type: gpt  </span></span>
<span class="line"><span>Disk identifier: 7D9AF8C8-F8DB-4C6A-9995-E209CABA5502  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>Device       Start      End  Sectors Size Type  </span></span>
<span class="line"><span>/dev/sdb1     2048     4095     2048   1M BIOS boot  </span></span>
<span class="line"><span>/dev/sdb2     4096  2101247  2097152   1G Linux filesystem  </span></span>
<span class="line"><span>/dev/sdb3  2101248 83884031 81782784  39G Linux filesystem  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>Disk /dev/sda: 50 GiB, 53687091200 bytes, 104857600 sectors    </span></span>
<span class="line"><span>Disk model: Virtual Disk  </span></span>
<span class="line"><span>Units: sectors of 1 * 512 = 512 bytes  </span></span>
<span class="line"><span>Sector size (logical/physical): 512 bytes / 4096 bytes  </span></span>
<span class="line"><span>I/O size (minimum/optimal): 4096 bytes / 4096 bytes  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>Disk /dev/mapper/ubuntu--vg-ubuntu--lv: 38.102 GiB, 41871736832 bytes, 81780736 sectors  </span></span>
<span class="line"><span>Units: sectors of 1 * 512 = 512 bytes  </span></span>
<span class="line"><span>Sector size (logical/physical): 512 bytes / 4096 bytes  </span></span>
<span class="line"><span>I/O size (minimum/optimal): 4096 bytes / 4096 bytes</span></span></code></pre></div><h2 id="对磁盘进行分区" tabindex="-1">对磁盘进行分区 <a class="header-anchor" href="#对磁盘进行分区" aria-label="Permalink to &quot;对磁盘进行分区&quot;">​</a></h2><p>root@cloud:~# <code>fdisk /dev/sda</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>Welcome to fdisk (util-linux 2.34).  </span></span>
<span class="line"><span>Changes will remain in memory only, until you decide to write them.  </span></span>
<span class="line"><span>Be careful before using the write command.  </span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>Device does not contain a recognized partition table.  </span></span>
<span class="line"><span>Created a new DOS disklabel with disk identifier 0x6d9425cf.</span></span></code></pre></div><p>Command (m for help): <code>n</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Partition type   </span></span>
<span class="line"><span>   p   primary (0 primary, 0 extended, 4 free)  </span></span>
<span class="line"><span>   e   extended (container for logical partitions)</span></span></code></pre></div><p>Select (default p): <code>p</code><br> Partition number (1-4, default 1): <code>1</code><br> First sector (2048-104857599, default 2048):<br> Last sector, +/-sectors or +/-size{K,M,G,T,P} (2048-104857599, default 104857599):</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  </span></span>
<span class="line"><span>Created a new partition 1 of type &#39;Linux&#39; and of size 50 GiB.</span></span></code></pre></div><p>Command (m for help): <code>w</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>The partition table has been altered.  </span></span>
<span class="line"><span>Calling ioctl() to re-read partition table.  </span></span>
<span class="line"><span>Syncing disks.</span></span></code></pre></div><h2 id="建立磁盘文件系统" tabindex="-1">建立磁盘文件系统 <a class="header-anchor" href="#建立磁盘文件系统" aria-label="Permalink to &quot;建立磁盘文件系统&quot;">​</a></h2><p>root@cloud:~# <code>mkfs -t ext4 /dev/sda1</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mke2fs 1.45.5 (07-Jan-2020)</span></span>
<span class="line"><span>Discarding device blocks: done</span></span>
<span class="line"><span>Creating filesystem with 13106944 4k blocks and 3276800 inodes</span></span>
<span class="line"><span>Filesystem UUID: 1c8f1cb8-9ff2-4518-8e4f-b0e9e696b279</span></span>
<span class="line"><span>Superblock backups stored on blocks:</span></span>
<span class="line"><span>        32768, 98304, 163840, 229376, 294912, 819200, 884736, 1605632, 2654208,</span></span>
<span class="line"><span>        4096000, 7962624, 11239424</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Checking for bad blocks (read-only test): done </span></span>
<span class="line"><span>Allocating group tables: done</span></span>
<span class="line"><span>Writing inode tables: done</span></span>
<span class="line"><span>Creating journal (65536 blocks): done</span></span>
<span class="line"><span>Writing superblocks and filesystem accounting information: done</span></span></code></pre></div><h2 id="挂载磁盘" tabindex="-1">挂载磁盘 <a class="header-anchor" href="#挂载磁盘" aria-label="Permalink to &quot;挂载磁盘&quot;">​</a></h2><p>root@cloud:~# <code>mkdir /mnt/sda1</code><br> root@cloud:~# <code>mount /dev/sda1 /mnt/sda1/</code><br> root@cloud:~# <code>vim /etc/fstab</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># /etc/fstab: static file system information.</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># Use &#39;blkid&#39; to print the universally unique identifier for a</span></span>
<span class="line"><span># device; this may be used with UUID= as a more robust way to name devices</span></span>
<span class="line"><span># that works even if disks are added and removed. See fstab(5).</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># &lt;file system&gt; &lt;mount point&gt;   &lt;type&gt;  &lt;options&gt;       &lt;dump&gt;  &lt;pass&gt;</span></span>
<span class="line"><span># / was on /dev/ubuntu-vg/ubuntu-lv during curtin installation</span></span>
<span class="line"><span>/dev/disk/by-id/dm-uuid-LVM-AT48KhRbtnvYlcRSO8sFlRodE7WLLS67JQM79pFFmu3U71iQq2lNsUou23Q1ok6Z / ext4 defaults 0 0</span></span>
<span class="line"><span># /boot was on /dev/sda2 during curtin installation</span></span>
<span class="line"><span>/dev/disk/by-uuid/afcf8daf-72b6-4680-8362-937d4e054317 /boot ext4 defaults 0 0</span></span>
<span class="line"><span>/swap.img       none    swap    sw      0       0</span></span>
<span class="line"><span>UUID=1c8f1cb8-9ff2-4518-8e4f-b0e9e696b279 /mnt/sda1 ext4 defaults 0 0</span></span></code></pre></div>`,21)])])}const m=n(l,[["render",i]]);export{u as __pageData,m as default};
