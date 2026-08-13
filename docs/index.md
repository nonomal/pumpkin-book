---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "南瓜书"
  text: "pumpkin-book"
  tagline: 《机器学习》（西瓜书）公式详解
  image:
    src: /pumpkin-logo.png
    alt: 南瓜书（pumpkin-book）
  actions:
    - theme: brand
      text: 开始学习
      link: /chapter1/chapter1

# features:
#   - title: 💥 前沿
#     details: 紧跟技术发展输出最前沿的知识
#   - title: 🎁 免费
#     details: 无任何形式的收费
#   - title: 🌐 开源
#     details: 教程和代码源文件全部托管在GitHub
---
<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/Sm1les.png',
    name: '谢文睿',
    title: '主编',
    links: [
      { icon: 'github', link: 'https://github.com/Sm1les' },
    ]
  },
  {
    avatar: 'https://www.github.com/archwalker.png',
    name: '秦州',
    title: '主编',
    links: [
      { icon: 'github', link: 'https://github.com/archwalker' },
    ]
  },
  {
    avatar: 'https://www.github.com/jbb0523.png',
    name: '贾彬彬',
    title: '主编',
    links: [
      { icon: 'github', link: 'https://blog.csdn.net/jbb0523' },
    ]
  },
  {
    avatar: 'https://www.github.com/juxiao.png',
    name: 'juxiao',
    title: '编委',
    links: [
      { icon: 'github', link: 'https://github.com/juxiao' },
    ]
  },
  {
    avatar: 'https://www.github.com/Majingmin.png',
    name: 'Majingmin',
    title: '编委',
    links: [
      { icon: 'github', link: 'https://github.com/Majingmin' },
    ]
  },
  {
    avatar: 'https://www.github.com/MrBigFan.png',
    name: 'MrBigFan',
    title: '编委',
    links: [
      { icon: 'github', link: 'https://github.com/MrBigFan' },
    ]
  },
  {
    avatar: 'https://www.github.com/shanry.png',
    name: 'shanry',
    title: '编委',
    links: [
      { icon: 'github', link: 'https://github.com/shanry' },
    ]
  },
  {
    avatar: 'https://www.github.com/Ye980226.png',
    name: 'Ye980226',
    title: '编委',
    links: [
      { icon: 'github', link: 'https://github.com/Ye980226' },
    ]
  },
]
</script>


<h2 align="center">编委会</h2>
<VPTeamMembers size="small" :members />