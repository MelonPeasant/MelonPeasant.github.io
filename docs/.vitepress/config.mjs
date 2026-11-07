import { defineConfig } from 'vitepress'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// posts 文件夹绝对路径
const postsDir = path.resolve(__dirname, '../../posts')

function getPostsSidebar() {
  if (!fs.existsSync(postsDir)) return []

  const files = fs.readdirSync(postsDir)
  const posts = []

  for (const fname of files) {
    if (!fname.endsWith('.md')) continue
    const filePath = path.join(postsDir, fname)
    const content = fs.readFileSync(filePath, 'utf8')

    // 提取 frontmatter --- 之间的内容
    const match = content.match(/^---\s*\n([\s\S]*?)\n---/)
    if (!match) continue

    const fmRaw = match[1]
    const titleMatch = fmRaw.match(/title:\s*(.+)/)
    const dateMatch = fmRaw.match(/date:\s*(.+)/)

    const title = titleMatch?.[1]?.trim() || fname
    const date = dateMatch?.[1]?.trim() || '0000-00-00'
    const link = `/posts/${fname.replace('.md', '')}`

    posts.push({ title, date, link })
  }

  // 按日期倒序，新文章放上面
  posts.sort((a, b) => b.date.localeCompare(a.date))

  return [
    {
      text: '文章列表',
      items: posts.map(p => ({
        text: p.title,
        link: p.link
      }))
    }
  ]
}

export default defineConfig({
  title: "MelonPeasant's Blog",
  description: '用 VitePress 搭建的个人博客',
  base: '/',

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/posts/hello' }
    ],
    sidebar: getPostsSidebar(),
    socialLinks: [
      { icon: 'github', link: 'https://github.com/MelonPeasant' }
    ]
  }
})
